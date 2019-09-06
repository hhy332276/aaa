<template>
    <div class="applications">
        <div class="container banner">
            <div class="text">
                <div class="text-center">
                    <h2 class="header">{{ApplicationDetailsData.codeSampletitle.application}}</h2>
                    <p>{{ApplicationDetailsData.codeSampletitle.backtitle}}</p>
                    <p>{{ApplicationDetailsData.codeSampletitle.backtitlea}}</p>
                </div>

            </div>
        </div>
        <div class="code-sample">
            <div class="header-one safe-distance">{{ApplicationDetailsData.codeSample.application}}</div>
            <div class="grids safe-distance">
                <div class="single-grid" v-for="(section,index) in ApplicationDetailsData.codeSample">
                    <router-link v-if="index < 7" :to="'/apps/applicationDetails/' + index" :key="index" >
                        <div v-if="index===0" class="thumbnail">
                            <div :style="{'backgroundImage':'url('+section.imgUrl+')'}" class="background">
<!--                                <div class="top-icon">-->
<!--                                    <SVGIcon class="arrow" icon="recommend"/>-->
<!--                                    <span class="arrow-text">{{ApplicationDetailsData.codeSampletitle.recommend}}</span>-->
<!--                                </div>-->
                            </div>
                        </div>
                        <div v-if="index===1" class="thumbnail">
                            <router-link :to="'/apps/applicationDetails/' + index">
                                <div :style="{'backgroundImage':'url('+section.imgUrl+')'}" class="background">
<!--                                    <div class="top-icon">-->
<!--                                        <SVGIcon class="arrow" icon="recommend"/>-->
<!--                                        <span class="arrow-text">{{ApplicationDetailsData.codeSampletitle.recommend}}</span>-->
<!--                                    </div>-->
                                </div>
                            </router-link>

                        </div>
                        <div v-if="index===2" class="thumbnail">
                            <div :style="{'backgroundImage':'url('+section.imgUrl+')'}" class="background">
<!--                                <div class="top-icon">-->
<!--                                    <SVGIcon class="arrow" icon="recommend"/>-->
<!--                                    <span class="arrow-text">{{ApplicationDetailsData.codeSampletitle.recommend}}</span>-->
<!--                                </div>-->
                            </div>
                        </div>
                        <div v-if="index===3" class="thumbnail">
                            <div :style="{'backgroundImage':'url('+section.imgUrl+')'}" class="background">
<!--                                <div class="top-icon">-->
<!--                                    <SVGIcon class="arrow" icon="recommend"/>-->
<!--                                    <span class="arrow-text">{{ApplicationDetailsData.codeSampletitle.recommend}}</span>-->
<!--                                </div>-->
                            </div>
                        </div>
                        <div v-if="index===4" class="thumbnail">
                            <div :style="{'backgroundImage':'url('+section.imgUrl+')'}" class="background">
                            </div>
                        </div>
                        <div v-if="index===5" class="thumbnail">
                            <div :style="{'backgroundImage':'url('+section.imgUrl+')'}" class="background">
                            </div>
                        </div>
                        <div v-if="index===6" class="thumbnail">
                            <div :style="{'backgroundImage':'url('+section.imgUrl+')'}" class="background">
                            </div>
                        </div>
                        <div v-if="index===7" class="thumbnail">
                            <div :style="{'backgroundImage':'url('+section.imgUrl+')'}" class="background">
                            </div>
                        </div>
                        <div v-if="index===8" class="thumbnail">
                            <div :style="{'backgroundImage':'url('+section.imgUrl+')'}" class="background">
                            </div>
                        </div>

                        <div class="text">
                            <div class="title">{{section.title}}</div>
                            <div class="hint">
                                <span>{{section.text}}</span>
                            </div>
                            <div class="introduce">
                                <img src="/imgs/toux.png" alt="">
                                <span class="introduce-text">{{section.author}}</span>
                            </div>
                            <!--                        <div class="text-img">-->
                            <!--                            <SVGIcon class="arrow" icon="img"/>-->
                            <!--                            <SVGIcon class="arrow" icon="camera"/>-->
                            <!--                            <SVGIcon class="arrow" icon="url"/>-->
                            <!--                        </div>-->
                            <div class="time">
                                <span>{{section.from}}</span>
                            </div>
                        </div>
                    </router-link>
                    <div v-else :key="index" >
                        <div v-if="index===0" class="thumbnail">
                            <div :style="{'backgroundImage':'url('+section.imgUrl+')'}" class="background">
<!--                                <div class="top-icon">-->
<!--                                    <SVGIcon class="arrow" icon="recommend"/>-->
<!--                                    <span class="arrow-text">{{ApplicationDetailsData.codeSampletitle.recommend}}</span>-->
<!--                                </div>-->
                            </div>
                        </div>
                        <div v-if="index===1" class="thumbnail">
                            <router-link :to="'/apps/applicationDetails/' + index">
                                <div :style="{'backgroundImage':'url('+section.imgUrl+')'}" class="background">
<!--                                    <div class="top-icon">-->
<!--                                        <SVGIcon class="arrow" icon="recommend"/>-->
<!--                                        <span class="arrow-text">{{ApplicationDetailsData.codeSampletitle.recommend}}</span>-->
<!--                                    </div>-->
                                </div>
                            </router-link>

                        </div>
                        <div v-if="index===2" class="thumbnail">
                            <div :style="{'backgroundImage':'url('+section.imgUrl+')'}" class="background">
<!--                                <div class="top-icon">-->
<!--                                    <SVGIcon class="arrow" icon="recommend"/>-->
<!--                                    <span class="arrow-text">{{ApplicationDetailsData.codeSampletitle.recommend}}</span>-->
<!--                                </div>-->
                            </div>
                        </div>
                        <div v-if="index===3" class="thumbnail">
                            <div :style="{'backgroundImage':'url('+section.imgUrl+')'}" class="background">
<!--                                <div class="top-icon">-->
<!--                                    <SVGIcon class="arrow" icon="recommend"/>-->
<!--                                    <span class="arrow-text">{{ApplicationDetailsData.codeSampletitle.recommend}}</span>-->
<!--                                </div>-->
                            </div>
                        </div>
                        <div v-if="index===4" class="thumbnail">
                            <div :style="{'backgroundImage':'url('+section.imgUrl+')'}" class="background">
                            </div>
                        </div>
                        <div v-if="index===5" class="thumbnail">
                            <div :style="{'backgroundImage':'url('+section.imgUrl+')'}" class="background">
                            </div>
                        </div>
                        <div v-if="index===6" class="thumbnail">
                            <div :style="{'backgroundImage':'url('+section.imgUrl+')'}" class="background">
                            </div>
                        </div>
                        <div v-if="index===7" class="thumbnail">
                            <div :style="{'backgroundImage':'url('+section.imgUrl+')'}" class="background">
                            </div>
                        </div>
                        <div v-if="index===8" class="thumbnail">
                            <div :style="{'backgroundImage':'url('+section.imgUrl+')'}" class="background">
                            </div>
                        </div>
                        <div class="text">
                            <div class="title">{{section.title}}</div>
                            <div class="hint">
                                <span>{{section.text}}</span>
                            </div>
                            <div class="introduce">
<!--                                <img src="/imgs/toux.png" alt="">-->
                                <span class="introduce-text">{{section.author}}</span>
                            </div>
                            <!--                        <div class="text-img">-->
                            <!--                            <SVGIcon class="arrow" icon="img"/>-->
                            <!--                            <SVGIcon class="arrow" icon="camera"/>-->
                            <!--                            <SVGIcon class="arrow" icon="url"/>-->
                            <!--                        </div>-->
                            <div class="time">
                                <span>{{section.from}}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import ApplicationDetails from "../static_data/ApplicationDetails";
    import SVGIcon from "../components/SVGIcon";
    import applicationDetails from "./ApplicationDetails";
    import {eventBus,eventBusActions} from "../event_bus";
    export default {
        data(){
            return{
                ApplicationDetailsJson: ApplicationDetails,
                language:"",
            }
        },
        components:{
            SVGIcon,
            applicationDetails
        },
        methods:{
            shouldShow(index){
                if(this.language==="en") {
                    if(index===0){
                        return false
                    }else{
                        return true
                    }
                }else{
                    return true
                }
            },
        },
        created(){
            this.language = this.$i18n.locale;
            eventBus.$on(eventBusActions.LANGUAGE_CHANGED,(e)=>{
                this.language = e;
            });
        },
        computed:{
            ApplicationDetailsData(){
                if(this.ApplicationDetailsJson[this.$i18n.locale]){
                    return this.ApplicationDetailsJson[this.$i18n.locale];
                }
                //return Chinese page if the specific language isn't available
                return this.ApplicationDetailsJson["zh"];
            }
        },

    }

</script>


<style lang="scss" scoped>
    @import "../assets/css/mixins";
    @import "../assets/css/partials";
    .applications{
        width: 100%;
        background: #eef0f4;
        margin: 0 auto;
        .banner{
            height: 330px;
            background: url("/imgs/origin.png") no-repeat;
            background-size: cover;
            position: relative;
            p{
                font-size: 14px;
                color: $white-color;
            }
            .text{
                @include absoluteYCenter;
                left: 0;
                width: 100%;
                .text-center{
                    max-width: 1180px;
                    margin: 0 auto;
                    padding: 0 20px;
                    .header{
                        font-size: 40px;
                        color: $white-color;
                        margin-bottom: 40px;
                    }
                }

            }
        }
        .code-sample{
            max-width: 1180px;
            margin: 0 auto;
            padding: 40px 0;
            text-align: center;
            .header-one{
                text-align: left;
                /*padding-bottom: 40px;*/
            }
            .grids{
                display: flex;
                flex-wrap: wrap;
            }
            .hide{
                display: none;
            }
            .single-grid{
                position: relative;
                width: 23.72%;
                vertical-align: top;
                margin-right: 1.2%;
                margin-top: 60px;
                cursor: pointer;
                background-color: #fff;
                border: 1px solid $border-color;
                transition: box-shadow 200ms ease-in;
                flex-grow: initial;
                @include shadow;
                /*&:nth-child(4n){*/
                /*    margin-right: 0;*/
                /*}*/
                /*&:nth-child(1),*/
                /*&:nth-child(2),*/
                /*&:nth-child(3),*/
                /*&:nth-child(4){*/
                /*    margin-top: 60px;*/
                /*}*/
                .thumbnail{
                    width: 100%;
                    .background{
                        padding-bottom: 67.23%;
                        background-repeat: no-repeat;
                        background-size: cover;
                        .top-icon{
                            position: relative;
                            .arrow{
                                width: 14.2%;
                                height: 32px;
                                margin-left: 80%;
                                position: absolute;
                                top: 47%;
                            }
                            .arrow-text{
                                position: absolute;
                                font-size: 12px;
                                color: $white-color;
                                left: 82.5%;
                                top: 7px;
                            }
                        }

                    }
                }
                .text{
                    text-align: left;
                    width: 100%;
                    color: $black-text;
                    padding: 30px 20px 30px 20px;
                    .title{
                        width: 100%;
                        margin-bottom: 10px;
                        font-size: 22px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                    .hint{
                        position: relative;
                        font-size: 14px;
                        height: 70px;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        line-height: 25px;
                        span{
                            /*padding-right: 60px;*/
                            display: inline-block;
                        }
                        .arrow{
                            @include absoluteYCenter;
                            right: 0;
                            width: 30px;
                            height: 30px;
                        }
                    }
                    .introduce{
                        font-size: 14px;
                        color: #262728;
                        margin-top: 15px;
                        .introduce-text{
                            margin-left: 6px;
                        }
                    }
                    .text-img{
                        display: flex;
                        margin-top: 17px;
                        .arrow{
                            width: 15px;
                            height: 15px;
                            margin-left: 6px;
                        }
                    }
                    .time{
                        font-size: 14px;
                        color: #bfbfbf;
                        margin-top: 6px;
                    }
                }
            }
        }
    }
    .icon-position{
        position: absolute;
        top: 43%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
</style>


