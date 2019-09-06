<template>
    <div class="doc-home">
        <div class="container">
            <div class="banner">
                <div class="banner-text">
                    <div class="title">{{$t("docCenter")}}</div>
                    <div class="description">{{$t("docDescription")}}</div>
                </div>
                <div class="search-container">
                    <input @keyup.enter="search" v-model="keywords" class="search-input" :placeholder="$t('searchPlaceholder')" type="text">
                    <div class="search-icon" @click="search">
                        <SVGIcon width="24px" height="24px" icon="search"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="doc-links safe-distance">
            <div class="title header-one">{{$t("productDocumentation")}}</div>
            <div class="docs-list">
                <!--make the version static for now,use 1.3.0-->
<!--                <router-link :to="'/documentation/details/'+doc.lang+'/'+doc.versionNum+'/'+doc.productId"-->
                <router-link :to="jumpToDocumnet('/documentation/details/'+doc.lang+'/'+doc.versionNum+'/'+doc.productId)"
                             :key="doc.id" v-for="doc in documentations" class="single-item">
                    <div class="icon-outer-wrapper">
                        <img src="/imgs/document_icon.png" alt="">
                    </div>
                    <div class="doc-title">{{doc.name}}</div>
                    <div class="versions-list">
                        <router-link :key="version.id" :to="jumpToDocumnet('/documentation/details/'+version.lang+'/'+version.version+'/'+version.productId)" v-for="version in doc.version" class="versions-link">
                            {{$t("version")}}&nbsp;>&nbsp;&nbsp;{{version.version}}
                        </router-link>
                    </div>
                </router-link>
            </div>
        </div>

        <div class="online-learning" v-show="this.$i18n.locale=='zh'">
            <div class="title header-one">{{$t("onlineLearning")}}</div>
            <div class="videos-grid safe-distance">
                <router-link :to="index===homeData.videos.length-1? '/Institute/':'/Course/' + index" :key="index"
                             v-for="(video,index) in homeData.videos" class="single-video">
                    <div class="thumbnail-container">
                        <div :style="{'backgroundImage':'url('+video.imgUrl+')'}" class="thumbnail">
                            <SVGIcon class="play-icon" width="78px" height="78px" icon="play"/>
                        </div>
                        <div class="views">
                            <div class="video-title">{{video.title}}</div>
                        </div>
                    </div>
                    <div class="description">{{video.description}}</div>
                </router-link>
            </div>
<!--            <div class="videos-grid safe-distance">-->
<!--                <div @click="viewMedia(index)" :key="index" v-for="(video,index) in allMedia" class="single-video">-->
<!--                    <div class="thumbnail-container">-->

<!--                        <div :style="{'backgroundImage': 'url('+video.imgUrl+')'}" class="thumbnail">-->
<!--                            <SVGIcon class="play-icon" width="78px" height="78px" icon="play-btn"/>-->
<!--                        </div>-->


<!--                        <div class="views">-->
<!--                            <div class="video-title">{{video.title}}</div>-->
<!--                            <div class="video-views">-->
<!--                                <SVGIcon class="hat-icon" width="20px" height="15px" icon="graduation-hat"/>-->
<!--                                <div class="views-num">{{video.views}}</div>-->
<!--                            </div>-->
<!--                        </div>-->

<!--                    </div>-->
<!--                    <div class="description">{{video.description}}</div>-->
<!--                </div>-->
<!--            </div>-->
        </div>

        <!--Media player-->
        <div class="overlay" v-if="shouldShowMedia">
            <MediaPlayer :onCloseMedia="closeMediaPlayer" :data="media" :autoplay="true"/>
        </div>

    </div>
</template>


<script>
    import http from "../utils/axiosConfig";
    import mediaList from "../static_data/media";
    import SVGIcon from "../components/SVGIcon";
    import {constants,settings} from "../../public/static/index";
    import {eventBus,eventBusActions} from "../event_bus";
    import MediaPlayer from "../components/MediaPlayer";
    import homeData from "../static_data/home";
    export default {
        components:{
            SVGIcon,
            MediaPlayer
        },
        data(){
            return {
                documentations : [],
                mediaItemIndex:0,
                keywords:"",
                language:"",
                shouldShowMedia: false,
                versionNum:"",
                homeJson: homeData
            }
        },

        methods:{
            jumpToDocumnet(url){
                let docVersion = url.split("/")[4];
                let docProduct = url.split("/")[5];
                let docLang = this.$i18n.locale;
                if(docProduct==="f4f39edd90e011e9a97afa163e714aa5"){
                    if(docLang=="zh"){
                        if(docVersion=="1.1.1.0"){
                            return url+"/zh-cn_topic_0166729836.html"
                        }else{
                            return url+"/zh-cn_topic_0178961794.html"
                        }
                    }else{
                        if(docVersion=="1.1.1.0"){
                            return url+"/en-us_topic_0166729836.html"
                        }else{
                            return url+"/en-us_topic_0178961794.html"
                        }
                    }
                }else if(docProduct==="3552547e3e6e4e06b19269d8832a4ea4"){
                    if(docLang=="zh"){
                        return url+"/zh-cn_topic_0176420240.html"
                    }else{
                        return url+"/en-us_topic_0176420240.html"
                    }
                }else if(docProduct==="9ec14623b52d46e286dce11db5ada63c"){
                    if(docLang=="zh"){
                        return url+"/zh-cn_topic_0176420185.html"
                    }else{
                        return url+"/en-us_topic_0176420185.html"
                    }
                }else if(docProduct==="a71bd3a961d546b7881bb7f25417ad8e"){
                    if(docLang=="zh"){
                        return url+"/zh-cn_topic_0175394093.html"
                    }else{
                        return url+"/en-us_topic_0175394093.html"
                    }
                }
            },
            viewMedia(index){
                this.mediaItemIndex = index;
                this.shouldShowMedia = true;
            },
            closeMediaPlayer(){
                this.shouldShowMedia = false;
            },
            search(){
                if(this.keywords.trim() === ""){
                    return;
                }
                this.$router.push(`/documentation/search/${this.$i18n.locale}/${encodeURIComponent(this.keywords)}/1/10`);
            },
            getProductList:function(){
                http.post("product/queryProductList",{"lang":this.language}).then((res)=>{
                    if(constants.responseCode.SUCCESS === res.code){
                        this.documentations = res.data;
                    }
                }).catch((err)=>{

                });
            }
        },
        created() {
            //created是组件创建后的生命周期吧？这玩意只有第一次进来时触发 点完后退后 再点按钮 没有一个重新加载组件的步骤
            this.language = this.$i18n.locale;
            eventBus.$on(eventBusActions.LANGUAGE_CHANGED,(e)=>{
                this.language = e;
                this.getProductList()
                history.go(0)
                //do something when the language is changed
            });
            this.getProductList()


        },
        mounted() {
        },
        // beforeCreate(){
        //     this.getProductList()
        // },
        computed:{
            media(){
                if(!this.allMedia){
                    return {};
                }
                return this.allMedia[this.mediaItemIndex];
            },
            allMedia(){
                if(mediaList.media[this.$i18n.locale]){
                    return mediaList.media[this.$i18n.locale];
                }
                //return Chinese page if the specific language isn't available
                return mediaList.media["zh"];
            },
            homeData() {
                if (this.homeJson[this.$i18n.locale]) {
                    return this.homeJson[this.$i18n.locale];
                }
                //return Chinese page if the specific language isn't available
                return this.homeJson["zh"];
            }
        },
        // updated() {
        //     this.getProductList()
        // },
        // watch: {
        //     '$route.path': function (newVal) {
        //         if (newVal === '/documentation')  {
        //             this.getProductList()
        //         }
        //     }
        // }
    }
</script>

<style lang="scss">
    @import "../assets/css/mixins";
    @import "../assets/css/partials";
    .doc-home{
        .banner{
            height: 417px;
            width: 100%;
            background-image: url("/imgs/doc_banner.png");
            background-size: cover;
            background-position: 50%,50%;
            background-repeat: no-repeat;
            position: relative;
            text-align: center;
            .banner-text{
                @include absoluteCenter;
                color: $white-color;
                width: 70%;
                .title{
                    font-size: 40px;
                }
                .description{
                    margin-top: 30px;
                }
                .button{
                    margin-top: 46px;
                }
            }
            .search-container{
                @include absoluteXCenter;
                bottom: -34px;
                width: 63.095%;
                .search-input{
                    width: 100%;
                    display: block;
                    height: 68px;
                    padding: 0 45px 0 30px;
                    box-shadow: 0px 3px 1px rgba(206,206,206,0.3);
                    font-size: 16px;
                }
                .search-icon{
                    @include absoluteYCenter;
                    right: 38px;
                    cursor: pointer;
                    z-index: 3;
                }
            }
        }
        .doc-links{
            margin: 0 auto;
            max-width: 1060px;
            //width: 63.095%;
            padding-bottom: 55px;
            padding-top: 84px;
            .title{
                margin-bottom: 50px;
                text-align: center;
            }
            .icon-outer-wrapper{
                text-align: center;
                width: 50%;
                background: #f4f6fa;
                border-radius: 50%;
                display: inline-block;
                position: relative;
                margin-top: 30px;
                margin-bottom: 30px;
                img{
                    width: 100%;
                }
            }
            .doc-icon{
                @include absoluteCenter;
                width: 50px;
                height: 50px;
            }
            .doc-title{
                font-size: 22px;
                color: #242728;
                margin-bottom: 24px;
            }
            .versions-list{
                a{
                    margin-bottom: 10px;
                    display: block;
                    color: #8a8a8a;
                    @include buttonStyle;
                }
            }
            .single-item{
                text-align: center;
                width: 18.87%;
                display: inline-block;
                vertical-align: top;
                box-shadow: 0 0 7px 3px rgba(206, 206, 206, 0.3);
                margin-right: 8.17%;
                height: 275px;
                &:last-child{
                    margin-right: 0;
                }
            }

        }
        .online-learning{
            background: #eef0f4;
            padding: 60px 0;
            .title{
                text-align: center;
                margin-bottom: 50px;
            }
            .videos-grid{
                margin: 0 auto;
                max-width: 1480px;
                .single-video{
                    margin-bottom: 25px;
                    display: inline-block;
                    vertical-align: top;
                    width: 23.986%;
                    margin-right: 1.352%;
                    background: $white-color;
                    cursor: pointer;
                    &:nth-child(4n){
                        margin-right: 0;
                    }
                    .thumbnail-container{
                        width: 100%;
                        .thumbnail{
                            padding-bottom: 56.338%;
                            background-repeat: no-repeat;
                            background-size: cover;
                            position: relative;
                            .play-icon{
                                @include absoluteCenter;
                            }
                        }
                        .views{
                            color: $white-color;
                            @include clear-float;
                            height: 44px;
                            line-height: 44px;
                            overflow: hidden;
                            .video-title{
                                float: left;
                                margin-left: 20px;
                            }
                            .video-views{
                                display: none;
                                float: right;
                                margin-right: 20px;
                                .hat-icon{
                                    display: inline-block;
                                    vertical-align: middle;
                                    margin-right: 20px;
                                }
                                .views-num{
                                    display: inline-block;
                                    vertical-align: middle;
                                }
                            }
                        }
                    }
                    .description{
                        padding: 0 20px;
                        color: #39383c;
                        height: 45px;
                        line-height: 22.5px;
                        overflow: hidden;
                        margin: 15px 0;
                    }
                    &:nth-child(4n-3){
                        .views{
                            background: linear-gradient(90deg, #3593ff, #5172e5);
                        }
                    }
                    &:nth-child(4n-2){
                        .views{
                            background: linear-gradient(90deg, #4964e7, #42b1ea);
                        }
                    }
                    &:nth-child(4n-1){
                        .views{
                            background: linear-gradient(90deg, #2bcadc, #35a0ff);
                        }
                    }
                    &:nth-child(4n){
                        .views{
                            background: linear-gradient(90deg, #516be5, #3593ff);
                        }
                    }
                }
            }
        }
        .overlay{
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 99;

            .video-player,
            .images-slides{
                @include absoluteCenter;
                width: 90%;
                max-width: 1180px;
            }
        }
    }
</style>



