<template>
    <div class="colleges">
        <div class="container">
            <div class="banner">
                <img :src="collegesData.bannerImg" alt="">
                <div class="banner-text">
                    <div class="title">{{collegesData.title}}</div>
                    <div class="banner-description">{{collegesData.collegeText}}</div>
                </div>
            </div>
        </div>
        <div class="series-video" v-if="collegesData.translate == 1">
            <div class="tabtext">
                <p class="tabtitle">{{collegesData.seriesTitle}}</p>
                <p class="ubtitle">{{collegesData.seriesText}}</p>
            </div>
            <VideoList :collegesData="collegesList.seriesVedioList" isPopout="true"></VideoList>
        </div>
        <div class="atlas-learning"  id="atlas_learning" name="atlas_learning" v-if="this.$i18n.locale !=='en'">
            <div class="online-wrap">
                <div class="tabtext">
                    <p class="tabtitle">{{collegesData.tabTitle_1}}</p>
                    <p class="ubtitle">{{collegesData.tabText_1}}</p>
                </div>
                <VideoList :collegesData="collegesData.learningVideosMsg" isAtlas='true'></VideoList>
                <div class='padding'></div>
            </div>
        </div>
        <div class="online-learning" v-if="this.$i18n.locale ==='en'" >
            <div class="online-wrap">
                <div class="tabtext">
                    <p class="tabtitle">{{collegesData.tabTitle}}</p>
                    <p class="ubtitle">{{collegesData.tabText}}</p>
                </div>
                <VideoList :collegesData="[collegesData.videos[0]]" isOnline='true'></VideoList>
            </div>
        </div>
        <div v-if="false">
            <div class="application-video" v-if="this.$i18n.locale!=='en'" >
                <div class="online-wrap">
                    <div class="tabtext">
                        <p class="tabtitle">{{collegesData.applicationVideos.tabTitle}}</p>
                        <p class="ubtitle">{{collegesData.applicationVideos.tabText}}</p>
                    </div>
                    <div :key="index" v-for="(video,index) in collegesData.applicationVideos.collegeVideos" class="single-video">
                        <router-link :to="'/colleges/applicationCourses/' + index">
                            <div class="thumbnail-container">
                                <div class="thumbnail">
                                    <img :src="video.imgUrl" alt="">
                                    <div class="colleges-icon-wrap">
                                        <SVGIcon class="colleges-icon" height="78px" icon="play" width="78px"></SVGIcon>
                                    </div>
                                </div>
                                <div class="views">
                                    <div class="video-title">{{video.title}}</div>
                                </div>
                            </div>
                            <div class="description">
                                <p class="videos-descript-text">
                                    {{video.description}}
                                </p>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>


<!--        <div class="college-page">-->
<!--            <paging :count="1" :row="collegesList.otherVedioList.length" :option="8"></paging>-->
<!--        </div>-->

    </div>
</template>

<script>
    import http from "../utils/axiosConfig";
    import colleges from "../static_data/colleges";
    import SVGIcon from "../components/SVGIcon";
    import paging from "../components/paging";
    import {constants,settings} from "../../public/static/index";
    import {eventBus,eventBusActions} from "../event_bus";
    import VideoList from "../components/videoList"
    export default {
        components:{
            SVGIcon,
            paging,
            VideoList
        },
        data(){
            return {
                collegeJson:colleges,
                keywords:"",
                language:"",
                collegesList:{},
            }
        },
        methods:{
            search(){
                console.log(this.keywords);
                http.get("",{keywords:this.keywords}).then(()=>{

                }).catch((err)=>{

                })
            }
        },
        mounted() {

        },
        created() {
            this.language = sessionStorage.getItem("lang")? sessionStorage.getItem("lang"):this.$i18n.locale;
            eventBus.$on(eventBusActions.LANGUAGE_CHANGED,(e)=>{
                this.language = e;
            });
            http.get("queryVideoList",{"lang":this.language}).then((res)=>{
                if(constants.responseCode.SUCCESS === res.code){
                    this.collegesList = res.data;
                    // console.log(this.collegesList)
                }
            }).catch((err)=>{

            });
            var user = this.$cookies.get('user')
            console.log(user);
            let fixedId=this.$route.params.id;
            if(fixedId){
                document.documentElement.scrollTop = 800
            }
        },
        computed:{
            collegesData(){
                if(this.collegeJson.colleges[this.$i18n.locale]){
                    return this.collegeJson.colleges[this.$i18n.locale];
                }
                //return Chinese page if the specific language isn't available
                return this.collegeJson.colleges["zh"];
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/css/mixins";
    @import "../assets/css/partials";
    .colleges{
        width: 100%;
        /*<!--background: $gray-site-bg-color;-->*/
        .banner{
            width: 100%;
            position: relative;
            text-align: center;
            color: $white-color;
            >img{
                width: 100%;
            }
            .banner-text{
                color: $white-color;
                width: 100%;
                @include absoluteCenter;
                .title{
                    font-size: 40px;
                }
                .banner-description{
                    margin-top: 30px;
                }
            }
        }
        .doc-links{
            margin: 0 auto;
            max-width: 984px;
            text-align: center;
            padding-bottom: 55px;
            padding-top: 84px;
            .title{
                margin-bottom: 50px;
                text-align: center;
            }
            .icon-outer-wrapper{
                text-align: center;
                width: 130px;
                height: 130px;
                background: #f4f6fa;
                border-radius: 50%;
                display: inline-block;
                position: relative;
            }
            .doc-icon{
                @include absoluteCenter;
                width: 50px;
                height: 50px;
            }
            .doc-title{
                font-size: 22px;
                color: #242728;
                margin-top: 24px;
                margin-bottom: 24px;
            }
            .versions-list{
                a{
                    margin-bottom: 10px;
                    display: block;
                    color: #8a8a8a;
                }
            }

        }
        .series-video,.online-learning,.application-video{
            padding-bottom: 50px;
        }
        .series-video{
            max-width: 1366px;
            margin: 0 auto;
            .tabtext{
                padding: 50px 0px 40px 0px;
                text-align: center;
                .tabtitle{
                    font-size: 28px;
                    color: #000000;
                }
                .ubtitle{
                    font-size: 14px;
                    color:$black-text-two;
                    margin-top: 30px;

                }
            }
            .description{
                background: $gray-site-bg-color;
            }
        }
        .atlas-learning{
             background: $gray-site-bg-color;
             max-width: none;
             .online-wrap{
                 max-width: 1366px;
                 margin: 0 auto;
                 .tabtext{
                     padding: 50px 0px 70px 0px;
                     text-align: center;
                     .tabtitle{
                         font-size: 28px;
                         color: #000000;
                     }
                     .ubtitle{
                         font-size: 14px;
                         color:$black-text-two;
                         margin-top: 30px;
                     }
                 }
                 .description{
                     background: $white-bg;
                 }
             }
             .padding{
                 height:50px;
             }
         }
        .online-learning{
             max-width: none;
             .online-wrap{
                 max-width: 1366px;
                 margin: 0 auto;
                 .tabtext{
                     padding: 50px 0px 70px 0px;
                     text-align: center;
                     .tabtitle{
                         font-size: 28px;
                         color: #000000;
                     }
                     .ubtitle{
                         font-size: 14px;
                         color:$black-text-two;
                         margin-top: 30px;
                     }
                 }
                 .description{
                     background: $white-bg;
                 }
             }
         }
        .application-video{
            max-width: none;
            .online-wrap{
                max-width: 1366px;
                margin: 0 auto;
                .tabtext{
                    padding: 50px 0px 70px 0px;
                    text-align: center;
                    .tabtitle{
                        font-size: 28px;
                        color: #000000;
                    }
                    .ubtitle{
                        font-size: 14px;
                        color:$black-text-two;
                        margin-top: 30px;
                    }
                }
                .description{
                    background: #eef0f4;;
                }
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
                        .views{
                            color: $white-color;
                            height: 44px;
                            line-height: 44px;
                            .video-title{
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow:ellipsis;
                                padding: 0 14px;
                            }
                        }
                    }
                    .description{
                        padding: 15px 14px;
                        color: #39383c;
                        height: 74px;
                        .videos-descript-text{
                            line-height: 22px;
                            height: 44px;
                            overflow: hidden;
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
        .paging{
            margin-top: 40px;
        }
    }

</style>



