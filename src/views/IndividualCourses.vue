<template>
    <div class="curriculum">
        <CollegesBanner :int="int"></CollegesBanner>
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
                    <MediaPlayer class="individual-video" :data="collegesData" :autoplay="true"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import colleges from "../static_data/colleges";
    import SVGIcon from "../components/SVGIcon";
    import CollegesBanner from "../components/CollegesBanner";
    import MediaPlayer from "../components/MediaPlayer";
    import {constants,settings} from "../../public/static/index";
    import {eventBus,eventBusActions} from "../event_bus";
    export default {
        name: "Curriculum",
         components:{
            SVGIcon,
            CollegesBanner,
            MediaPlayer
        },
        data(){
            return{
                allColleges:colleges,
                int:0,
                language:"",
            }
        },
        created(){
           try {
                this.language = settings.getLanguage();
                eventBus.$on(eventBusActions.LANGUAGE_CHANGED,()=>{
                    this.language = settings.getLanguage();
                });

                if(isNaN(parseInt(this.$route.params.index))){
                    this.int = 0;
                }else {
                    if(parseInt(this.$route.params.index) > colleges.colleges.zh.videos.length){
                        this.int = colleges.colleges.zh.videos.length - 1;
                    }else{
                        this.int = parseInt(this.$route.params.index)
                    }
                }
                this.numindex()
            }
            catch (e) {
                console.log("created",e)
            }

        },
        mounted() {

        },
        computed:{
            collegesData(){
                try {
                    if(this.allColleges.colleges[this.$i18n.locale]){
                        return this.allColleges.colleges[this.$i18n.locale].videos[this.int];
                    }
                    //return Chinese page if the specific language isn't available
                    console.log(this.allColleges.colleges["zh"].videos[this.int])
                    return this.allColleges.colleges["zh"].videos[this.int];
                }
                catch (e) {
                    console.log("computed",e)
                }
            }
        },


    }
</script>

<style lang="scss">
    @import "../assets/css/mixins";
    @import "../assets/css/partials";
    .curriculum{
        width: 100%;
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
                        img{
                            width: 100%;
                        }
                        .individual-video{
                            width: 100%;
                            .close-btn{
                                display: none;
                            }
                        }
                    }
            }

        }
    }
</style>
