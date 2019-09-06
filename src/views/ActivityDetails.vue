<template>
    <div class="activity-wrapper container">
        <div class="banner"><img :src="activity.banner" alt=""></div>
        <div class="breadcrumb-container">
            <ul class="breadcrumb">
                <li>
                    <router-link to="/activity">{{$t('activity')}}<span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span></router-link>
                </li>
                <li>
                    {{$t('activityDetails')}}
                </li>
            </ul>
        </div>
        <div class="content">
            <div class="intro">
                <img :src="activity.intro" alt="">
            </div>
            <div class="text">{{activity.introDescription}}</div>
            <div class="schedule">
                <img :src="activity.schedule.title" alt="">
                <div class="list">
                    <div :key="index" v-for="(item,index) in activity.schedule.eventDates" class="single-item">
                        <div class="date">{{item.date}}</div>
                        <div>
                            <div :key="i" v-for="(singleInfo,i) in item.info" class="title">{{singleInfo}}</div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="competition">
                <img :src="activity.competitionIntro.title" alt="">
                <img class="intro-img" :src="activity.competitionIntro.introImg" alt="">
                <div class="text">{{activity.competitionIntro.text}}</div>
            </div>

            <div class="participant">
                <img :src="activity.participant.title" alt="">
                <div class="list">
                    <div :key="index" v-for="(item,index) in activity.participant.list" class="item">{{item}}</div>
                </div>
            </div>

            <div class="qr-code">
                <img :src="activity.qrCode.title" alt="">
                <img class="qr-code-img" :src="activity.qrCode.qrCodeImg" alt="">
            </div>

        </div>

    </div>
</template>

<script>
    import activityData from "../static_data/activityCenter";
    import {constants,settings} from "../../public/static/index";
    import {eventBus,eventBusActions} from "../event_bus";
    export default {
        name: "ActivityCenter",
        data(){
            return {
                lang:"zh"
            }
        },
        computed:{
            activity(){
                if(activityData[this.$i18n.locale]){
                    return activityData[this.$i18n.locale];
                }
                return activityData["zh"];
            }
        },
        // created() {
        //     this.language = sessionStorage.getItem('lang') ? sessionStorage.getItem('lang'):this.$i18n.locale;
        //     eventBus.$on(eventBusActions.LANGUAGE_CHANGED,(e)=>{
        //         if(e === 'en'){
        //             this.$router.push('/home')
        //             // this.$router.replace("/home");
        //         }
        //         //do something when the language is changed
        //     });
        // },
        mounted() {
            this.lang = settings.getLanguage();
            eventBus.$on(eventBusActions.LANGUAGE_CHANGED,()=>{
                this.lang = settings.getLanguage();
            });
        },
        // beforeDestroy() {
        //     eventBus.$off(eventBusActions.LANGUAGE_CHANGED)
        // }
    }
</script>

<style scoped lang="scss">
    @import "../assets/css/mixins";
    @import "../assets/css/partials";
    .activity-wrapper{
        background-image: url("/imgs/activity_details_bg.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        .banner{
            img{
                width: 100%;
            }
        }
        .breadcrumb-container{
            background: $white-bg;
            line-height: 64px;
            border-bottom: 1px solid #cecece;
            width: 100%;
            max-width: 1366px;
            margin: 0 auto;
        }
        .breadcrumb{
            height: 64px;
            line-height: 64px;
            padding-left: 15px;
            margin: 0 auto;
            li{
                display: inline-block;
                cursor: default;
                a{
                    color: $color-primary;
                }
                .current-position{
                    color: #27313a;
                }
            }
        }
        .content{
            margin: 60px auto 0;
            max-width: 1230px;
            .text{
                font-size: 24px;
                color: $black-text-two;
                margin-top: 50px;
                padding: 0 20px;
            }
        }
        .intro,
        .schedule,
        .competition,
        .participant,
        .qr-code{
            img{
                width: 100%;
            }
        }
        .schedule,
        .competition,
        .participant,
        .qr-code{
            img{
                margin-top: 60px;
            }
        }
        .single-item{
            margin: 30px auto 0;
            max-width: 530px;
            &:first-child{
                margin-top: 50px;
            }
            .date{
                height: 50px;
                background: #f7931e;
                border-radius: 50px;
                line-height: 50px;
                text-align: center;
                font-size: 30px;
                color: #fff;
            }
            .title{
                margin-top: 30px;
                text-align: center;
                font-size: 24px;
                &:nth-child(2){
                    margin-top: 0;
                }
            }
        }
        .competition{
            text-align: center;
            .text{
                color: #084877;
                margin-top: 20px;
                font-size: 20px;
            }
        }
        .intro-img{
            max-width: 432px;
        }
        .participant{
            .list{
                color: #084877;
                background: #f0f9ff;
                padding: 40px 38px;
                margin-top: 50px;
            }
        }
        .qr-code{
            text-align: center;
            .qr-code-img{
                width: 100%;
                max-width: 221px;
                margin: 50px 0;
            }
        }
    }
</style>
