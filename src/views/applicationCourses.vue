<template>
    <div class="curriculum">
        <div class="collegesBanner">
            <div class="back">
                <div class="back-top-content">
                    <BreadCrumb :data="breadcrumb" :maxWidth="'1180px'" class="bread"/>
                    <p class="back-title">{{collegesData.title}}</p>
                </div>
            </div>
        </div>
        <div class="abstract safe-distance">
            <h3 class="abstitle">{{collegesData.details.textTitle}}</h3>
            <h4 class="summary">{{collegesData.details.topText}}</h4>
            <ul v-if="collegesData.details.topList">
                <li class="abstext" v-for="list in collegesData.details.topList">{{list}}</li>
            </ul>
            <h4 class="knowledge">{{collegesData.details.bottomText}}</h4>
            <ul v-if="collegesData.details.bottomList.length !== 0" class="abstext-wrap">
                <li class="abstext" v-for="list in collegesData.details.bottomList">
                    {{list}}
                </li>
            </ul>
        </div>
        <div class="video">
            <div class="video-center">
                <div class="video-img">
                    <div v-for="(video,index) in collegesData.videosContent" :key="index" class="video-content" :id="forId(index)" :name="forId(index)">
                        <div  @click="viewMedia(index)" class="img-style">
                            <img :src="video.imgUrl" alt="" >
                            <div class="colleges-icon-wrap">
                                <SVGIcon class="colleges-icon" height="78px" icon="play" width="78px"></SVGIcon>
                            </div>
                        </div>
                        <div  class="video-detail">
                            <h3 class="video-title">{{video.title}}</h3>
                            <h4 class="video-summary">{{video.titleText}}</h4>
                            <ul v-if="video.descriptionList">
                                <li class="video-text" v-for="list in video.descriptionList">{{list}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="overlay" v-if="shouldShowMedia">
            <MediaPlayer :onCloseMedia="closeMediaPlayer" :data="allVideo" :autoplay="true"/>
        </div>
    </div>
</template>

<script>
    import colleges from "../static_data/colleges";
    import SVGIcon from "../components/SVGIcon";
    import MediaPlayer from "../components/MediaPlayer";
    import BreadCrumb from "../components/BreadCrumb";
    import {constants,settings} from "../../public/static/index";
    import {eventBus,eventBusActions} from "../event_bus";
    export default {
        name: "Curriculum",
        components:{
            SVGIcon,
            MediaPlayer,
            BreadCrumb
        },
        data(){
            return{
                allColleges:colleges,
                int:0,
                title:"",
                fixedClass:"",
                language:"",
                shouldShowMedia:false,
                mediaItemIndex:0,
                breadcrumb:[
                    {
                        "titleKey":"Institute",
                        "link":"/Institute"
                    },
                    {
                        title:"",
                    }
                ]
            }
        },
        created(){
            try {
                this.language = settings.getLanguage();
                eventBus.$on(eventBusActions.LANGUAGE_CHANGED,(e)=>{
                    this.language = e;
                });

                if(isNaN(parseInt(this.$route.params.index))){
                    this.int = 0;
                }else {
                    if(parseInt(this.$route.params.index) > colleges.colleges.zh.applicationVideos.collegeVideos.length){
                        this.int = colleges.colleges.zh.applicationVideos.collegeVideos.length - 1;
                    }else{
                        this.int = parseInt(this.$route.params.index)
                }
                }
                this.numindex();
            }
            catch (e) {
                console.log("created",e)
            }

        },
        methods:{
            viewMedia(index){
                this.mediaItemIndex = index;
                console.log("index>>>>",index);
                this.shouldShowMedia = true;
            },
            closeMediaPlayer(){
                this.shouldShowMedia = false;
            },
            numindex:function (){
                this.breadcrumb[1].title=this.collegesData.title
            },
            forId:function (index) {
                if(index===0){
                    return "principle"
                }else if(index===1){
                    return "programme"
                }else{
                    return "configure"
                }
            }
        },
        mounted() {
            let fixedId=this.$route.params.id;
            if(fixedId){
                document.documentElement.scrollTop = document.querySelector('#'+fixedId).offsetTop - 300;
            }
        },
        computed:{
            collegesData(){
                try {
                    if(this.allColleges.colleges[this.$i18n.locale]){
                        return this.allColleges.colleges[this.$i18n.locale].applicationVideos.collegeVideos[this.int];
                    }
                    return this.allColleges.colleges["zh"].applicationVideos.collegeVideos[this.int]
                }
                catch (e) {
                    console.log("computed",e)
                }
            },
            allVideo(){
                return this.collegesData.videosContent[this.mediaItemIndex]
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/css/mixins";
    @import "../assets/css/partials";
    .curriculum{
        width: 100%;
        .back{
            max-width: $max-width;
            height: 180px;
            width: 100%;
            background: url("/imgs/IndividualCourses-banner.png") no-repeat;
            background-size: 100% 100%;
            text-align: center;
            margin: 0 auto;
            .back-top-content{
                max-width: 1180px;
                margin: 0 auto;
                .bread{
                    width: 100%;
                    line-height: 64px;
                    text-align: left;
                    font-size: 18px;
                    border-bottom: 0px;
                    background: rgba(0,0,0,0);
                    position: static;
                }
                .back-title{
                    font-size: 30px;
                }
                .back-text{
                    font-size: 14px;
                    margin-top: 25px;
                }
            }

        }
        .abstract{
            max-width: 1180px;
            margin: 0 auto;
            padding: 60px 20px;
            .abstitle{
                font-size: 28px;
            }
            .summary{
                font-size: 18px;
                color: $black-text-two;
                margin-top: 25px;
            }
            ul{
                padding: 0 20px;
                margin: 0;
                li{
                    list-style:disc;
                }
            }
            .abstext{
                font-size: 14px;
                color: $black-text-three;
                margin-top: 10px;
            }
            .knowledge{
                font-size: 18px;
                margin-top: 35px;
            }
        }
        .video{
            width: 100%;
            background: $gray-site-bg-color;
            padding: 0 20px;
            .video-center{
                max-width: 1180px;
                padding: 60px 0;
                margin: 0 auto;
                .video-img{
                    width: 100%;
                    #principle,#programme,#configure{
                        width:100%;
                        height:360px;
                        display:table;
                        background: #ffffff;
                        margin-bottom: 30px;
                        .img-style{
                            cursor: pointer;
                            display: table-cell;
                            position: relative;
                            img{
                                width: 100%;
                                vertical-align: baseline;
                            }
                            .colleges-icon-wrap{
                                position: absolute;
                                top: 50%;
                                left: 0;
                                width: 100%;
                                transform: translateY(-50%);
                                .colleges-icon{
                                    margin: 0 auto;
                                    width: 78px;
                                    height: 78px;
                                }
                            }
                        }
                        .video-detail{
                            display: table-cell;
                            vertical-align: middle;
                            padding:0 30px;
                            width:40%;
                            .video-title{
                                font-size: 28px;
                            }
                            .video-summary{
                                font-size: 18px;
                                color: $black-text-two;
                                margin-top: 25px;
                            }
                            .video-text{
                                margin-left:20px;
                                font-size: 14px;
                                color: $black-text-three;
                                list-style-type:disc;
                                margin-top: 10px;
                            }
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
s