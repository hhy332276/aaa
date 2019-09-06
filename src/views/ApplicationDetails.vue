<template>
    <div class="applicationDetails">
        <BreadCrumb :data="breadcrumb" :maxWidth="'1366px'" class="bread"/>
        <div class="face safe-distance">
            <div class="face-img">
                <img :src="ApplicationDetailsData.applicationDetails[indexNum].head.imgUrl" alt="">
            </div>
            <div class="face-center">

                <p class="header-one">{{ApplicationDetailsData.applicationDetails[indexNum].head.title}}</p>
                <div class="personal">
                    <img :src="ApplicationDetailsData.applicationDetails[indexNum].head.headPortraitUrl" alt="" class="head-portrait">
                    <span class="author">{{ApplicationDetailsData.applicationDetails[indexNum].head.author}}</span>
                    <span class="time">{{ApplicationDetailsData.applicationDetails[indexNum].head.time}}</span>
                </div>

                <p class="explain">{{ApplicationDetailsData.applicationDetails[indexNum].head.introduce}}</p>
                <div class="face-bottom">
                    <p v-for="list in ApplicationDetailsData.applicationDetails[indexNum].head.button" v-html="list"></p>
                </div>
            </div>
        </div>
        <div class="details safe-distance">
            <div class="details-top">
<!--                <p class="header-one">{{ApplicationDetailsData.applicationDetails[indexNum].conter.title}}</p>-->
                <p class="back-tit">{{ApplicationDetailsData.applicationDetails[indexNum].conter.summary}}</p>
                <p class="back-center">{{ApplicationDetailsData.applicationDetails[indexNum].conter.summaryContent}}</p>
            </div>
            <div class="detail-img">
                <p class="back-tit">{{ApplicationDetailsData.applicationDetails[indexNum].conter.principle}}</p>
                <p v-for="list in ApplicationDetailsData.applicationDetails[indexNum].conter.summaryImg" v-html="list"></p>
            </div>
            <div class="detail-center">
                <div class="detail-one">
                    <p v-for="list in ApplicationDetailsData.applicationDetails[indexNum].conter.principleContent" v-html="list"></p>
                </div>
            </div>
            <div class="technology">
                <p class="technology-title">{{ApplicationDetailsData.applicationDetails[indexNum].conter.technology}}</p>
                <div class="technology-text">
                    <p class="technology-explain" v-for="list in ApplicationDetailsData.applicationDetails[indexNum].conter.technologyContent" v-html="list"></p>
                </div>
                <p class="technology-title">{{ApplicationDetailsData.applicationDetails[indexNum].conter.hardware}}</p>
                <div class="technology-text">
                <p class="technology-explain" v-for="list in ApplicationDetailsData.applicationDetails[indexNum].conter.hardwareContent" v-html="list"></p>
                </div>
                <p class="technology-title">{{ApplicationDetailsData.applicationDetails[indexNum].conter.optimization}}</p>
                <div class="technology-text">
                <p class="technology-explain">{{ApplicationDetailsData.applicationDetails[indexNum].conter.optimizationContent}}</p>
                </div>
                <p class="technology-title">{{ApplicationDetailsData.applicationDetails[indexNum].conter.effectShow}}</p>
            </div>
            <div ref="technology" class="technology-img">
                <p v-for="list in ApplicationDetailsData.applicationDetails[indexNum].conter.effectImg" v-html="list"></p>
            </div>

            <div class="video-tutorials" v-if="indexNum===0">
                <p>{{ApplicationDetailsData.applicationDetails[indexNum].conter.videoShow}}</p>
                <div ref="technology-video" class="technology-video" >
                    <div :key="index" v-for="(video,index) in ApplicationDetailsData.applicationDetails[indexNum].conter.videos" class="single-video">
                        <router-link :to="{path:'/Institute/applicationCourses/0/'+video.id}" key="index">
                            <div class="thumbnail-container">
                                <div class="thumbnail">
                                    <img :src="video.imgUrl" alt="">
                                    <div class="colleges-icon-wrap">
                                        <SVGIcon class="colleges-icon" height="78px" icon="play" width="78px"></SVGIcon>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="picture-cartridge" v-if="pictureEnlargement" @click="close">
            <div class="middle-picture">
<!--                <div  class="close-btn"><SVGIcon class="close-icon" :width="'40px'" :height="'40px'" icon="close-media"/></div>-->
                <img :src="overlayImgUrl" alt="">
            </div>

        </div>
    </div>
</template>

<script>
    import ApplicationDetails from "../static_data/ApplicationDetails";
    import BreadCrumb from "../components/BreadCrumb"
    import SVGIcon from "../components/SVGIcon";
    import {eventBus,eventBusActions} from "../event_bus";
    export default {
        name: 'applicationDetails',
        data() {
            return {
                ApplicationDetailsJson: ApplicationDetails,
                indexNum: 0,
                language:"",
                pictureEnlargement:false,
                overlayImgUrl:"",
                breadcrumb: [
                    {
                        "titleKey": "apps",
                        "link": "/apps"
                    },
                    {
                        "titleKey":"applicationDetails"
                    }
                ]
            }
        },
        components: {
            BreadCrumb,
            SVGIcon,
        },
        methods:{
            imgBigger(){
                this.pictureEnlargement=true;
            },
            close(){
                this.pictureEnlargement=false;
            }
        },
        computed:{
            ApplicationDetailsData(){
                try {
                    if(this.ApplicationDetailsJson[this.$i18n.locale]){
                        return this.ApplicationDetailsJson[this.$i18n.locale];
                    }
                    //return Chinese page if the specific language isn't available
                    return this.ApplicationDetailsJson["zh"];
                }
                catch (error) {
                    console.log(error)
                }
            }
        },
        created() {
            try {
                // console.log(parseInt(this.$route.params.index))
                // parseInt(this.$route.params.index)
                if (isNaN(parseInt(this.$route.params.index))) {
                    this.indexNum = 0
                } else {
                    if (parseInt(this.$route.params.index) > this.ApplicationDetailsJson.zh.applicationDetails.length) {
                        this.indexNum = this.ApplicationDetailsJson.zh.applicationDetails.length - 1
                    } else {
                        this.indexNum = parseInt(this.$route.params.index)
                    }
                }
            }
            catch (error) {
                console.log(error)
            }
            eventBus.$on(eventBusActions.LANGUAGE_CHANGED,(e)=>{
                this.language = e;
                // if(this.language==="en"){
                //     if(this.$route.params.index==0){
                //         this.$router.push('/apps');
                //     }
                // }
            });

        },
        mounted() {
            setTimeout(()=>{
                if(this.$refs.technology){
                    let imagesList = this.$refs.technology.getElementsByTagName('img');
                    for(let i=0;i<imagesList.length;i++){
                        imagesList[i].addEventListener("click",()=>{
                            this.overlayImgUrl = imagesList[i].getAttribute("src");
                            this.pictureEnlargement = true;
                        });
                    }
                }
            },500);
        }

    }
</script>

<style lang="scss">
    @import "../assets/css/mixins";
    @import "../assets/css/partials";

    .applicationDetails {
        width: 100%;

        .title {
            max-width: 1366px;
            height: 64px;
            margin-left: 157px;
            font-size: 18px;
            line-height: 64px;

            .application {
                color: #3d88ff;
            }

            .titleimg {
                margin-top: 27px;
                margin-left: 16px;
            }

            .detailsa {
                margin-left: 16px;
            }

        }

        .titlehr {
            /*max-width: 1366px;*/
            margin: 0 auto;
            color: #e6e6e6;
        }

        .face {
            max-width: 1366px;
            margin: 0 auto;
            padding-top: 110px;

            .face-img {
                width: 43.92%;
                display: inline-block;

                img {
                    width: 100%;
                }
            }

            .face-center {
                width: 45.1%;
                margin-left: 10.98%;
                display: inline-block;
                vertical-align: top;

                .personal {
                    margin-top: 20px;
                    position: relative;

                    .author {
                        margin-left: 10px;
                    }

                    .time {
                        color: #bfbfbf;
                        position: absolute;
                        right: 1px;
                    }
                }

                .explain {
                    margin-top: 5%;
                    font-size: 14px;
                    color: #393a3c;
                    line-height: 30px;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    height: 120px;
                }

                .face-bottom {
                    margin-top: 6%;
                    button{
                            width: 120px;
                            height: 36px;
                            background: #3d88ff;
                            border: 0px;
                            border-radius: 2px;
                            font-size: 14px;
                            color: $white-color;
                            padding: 0px;
                        @include secondButtonStyle;
                        }
                }
            }
        }

        .details {
            width: 100%;
            background: #eef0f4;
            margin-top: 70px;
            padding-bottom: 70px;

            .details-top {
                max-width: 1366px;
                margin: 0 auto;
                padding-top: 20px ;

                .back-tit {
                    font-size: 22px;
                    color: #333333;
                    margin-top: 20px;
                }

                .back-center {
                    font-size: 14px;
                    color: #393a3c;
                    margin-top: 40px;
                }
            }

            .detail-img, .detail-center {
                max-width: 1366px;
                margin: 0 auto;
                .back-tit {
                    font-size: 22px;
                    color: #333333;
                    padding: 60px 0px 30px 0px;
                }
                img {
                    width: 100%;
                }

            }

            .detail-center {
                display: flex;
                margin-top: 40px;
                border-left: 6px solid #3d88ff;
                background: $white-bg;
                padding: 20px 10px 20px 30px;
                .detail-one {

                    p {
                        line-height: 1.8;
                        font-size: 14px;
                        color: #393a3c;
                        a{
                            color: $color-primary;
                        }
                    }

                }
            }

            .technology {
                padding: 60px 0px 60px 0px;
                /*margin-left: 157px;*/
                max-width: 1366px;
                margin: 0 auto;

                .technology-title {
                    font-size: 22px;
                    color: #333333;
                    padding-top: 30px;
                }
                .technology-text{
                    padding-top: 30px;
                    .technology-explain {
                        font-size: 14px;
                        color: #393a3c;
                        line-height: 2;
                    }
                }
                .technology-explain {
                    font-size: 14px;
                    color: #393a3c;
                    line-height: 2;
                }


            }

            .technology-img {
                max-width: 1366px;
                margin: 0 auto;

                img {
                    width: 29.28%;
                    cursor: zoom-in;
                }

                .img-two, .img-three {
                    margin-left: 4.761%;
                }
            }
            .video-tutorials{
                max-width: 1366px;
                margin: 30px auto;
                p{
                    font-size: 22px;
                    color: #333333;
                    padding-top: 30px;
                }
                .technology-video{
                    margin-top:30px;
                    .single-video{
                        margin-bottom: 25px;
                        display: inline-block;
                        vertical-align: top;
                        width: 23.986%;
                        margin-right: 1.352%;
                        cursor: pointer;
                        &:nth-child(4n){
                            margin-right: 0;
                        }
                        .thumbnail-container{
                            width: 100%;
                            .thumbnail{
                                width: 100%;
                                position: relative;
                                img{
                                    width: 100%;
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
        }

        .comment {
            max-width: 1366px;
            margin: 0 auto;

            /*.header-one {*/
            /*    padding-top: 80px;*/
            /*}*/

            .comment-bottom {
                max-width: 1366px;
                margin: 0 auto;
                display: flex;
                margin-top: 60px;

                .comment-i {
                    margin-left: 1.83%;
                    width: 73.2%;

                    .comment-input {
                        width: 100%;
                        height: 90px;
                        border: #cccccc solid 1px;
                        border-radius: 2px;
                    }
                }

                .comment-button {
                    width: 120px;
                    height: 36px;
                    background: #3d88ff;
                    border: 0px;
                    border-radius: 2px;
                    font-size: 14px;
                    color: $white-color;
                    margin-top: 54px;
                    margin-left: 145px;
                }
            }

            hr {
                width: 100%;
                margin-top: 65px;
                color: #cccccc;
            }

            .content {
                max-width: 1366px;
                margin: 0 auto;
                display: flex;
                margin-top: 60px;

                .content-center {
                    margin-left: 1.83%;

                    .pl {
                        width: 73.2%;
                        margin-top: 25px;
                    }
                }

                .content-right {
                    margin-top: 50px;
                    margin-left: 10%;
                    width: 15%;

                    .content-time {

                    }

                }
            }
        }
        .picture-cartridge{
            width: 100%;
            height: 100%;
            margin: auto;
            position: fixed;
            z-index: 10;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(0, 0, 0,0.5);
            cursor: zoom-out;
            .middle-picture{
                @include absoluteCenter;
                .close-btn{
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    width: 40px;
                    height: 40px;
                    cursor: pointer;
                    z-index: 3;
                    .close-icon{
                        width: 40px;
                        height: 40px;
                    }
                }
                img{
                    max-width: 100%;
                    max-height: 100%;
                }
            }

        }
    }
</style>
