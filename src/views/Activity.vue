<template>
    <div class="active">
        <div class="container">
            <div class="nav">
                <div class="text">
                    <div class="text-center">
                        <p class="nav-title">{{activityData.activity.title}}</p>
                        <p class="title-bottom">{{activityData.activity.titlebottom}}</p>
                    </div>

                </div>
            </div>
            <div class="content">
                <p class="content-title">{{activityData.activity.activity}}</p>
                <div class="content-bottom">
                    <div class="content-img">
                        <router-link to="/activity/details">
                        <div :style="{'backgroundImage':'url('+pic1+')'}" class="content-bg">
                        </div>
                        <div class="img-text">
                            <div class="content-text">
                                <p class="new-time">{{activityData.activity.content}}</p>
                                <p class="new-title">{{activityData.activity.time}}</p>
                            </div>
                            <div class="img-button">
                                <button>{{activityData.activity.button}}</button>
                            </div>
                        </div>
                        </router-link>
                    </div>
                    <div class="content-img">
                        <router-link to="/activity/universityCooperation">
                        <div :style="{'backgroundImage':'url('+pic2+')'}" class="content-bg"></div>
                        <div class="img-text">
                            <div class="content-text">
                                <p class="new-time">{{activityData.activity.universities}}</p>
<!--                                <p class="new-title">{{home.time}}</p>-->
                            </div>
                            <div class="img-button">
                                <button>{{activityData.activity.button}}</button>
                            </div>
                        </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import homeData from "../static_data/home";
    import SVGIcon from "../components/SVGIcon";
    import {eventBus,eventBusActions} from "../event_bus";
    export default {
        name: "Activity",
        data(){
            return{
                activityJson:homeData,
                language:'',
                pic1:"/imgs/pic1.png",
                pic2:"/imgs/pic2.png",
                pic3:"/imgs/pic3.png",
                pic4:"/imgs/pic4.png",
            }
        },
        components:{
            SVGIcon
        },
        computed:{
            activityData(){
                if(this.activityJson[this.$i18n.locale]){
                    return this.activityJson[this.$i18n.locale];
                }
                //return Chinese page if the specific language isn't available
                return this.activityJson["zh"];
            }
        },
        // created() {
        //     this.language = sessionStorage.getItem('lang') ? sessionStorage.getItem('lang'):this.$i18n.locale;
        //     eventBus.$on(eventBusActions.LANGUAGE_CHANGED,(e)=>{
        //         if(e === 'en'){
        //             this.$router.push('/home');
        //             // this.$router.replace("/home");
        //         }
        //         //do something when the language is changed
        //     });
        // },
        // beforeDestroy() {
        //     eventBus.$off(eventBusActions.LANGUAGE_CHANGED)
        // }

    }
</script>

<style scoped lang="scss">
    @import "../assets/css/mixins";
    @import "../assets/css/partials";
    .active{
        width: 100%;
        background: $gray-site-bg-color;
    }
       .nav{
           width: 100%;
           height: 330px;
           background: url("/imgs/activebanner.png") no-repeat;
           background-size: 100% 100%;
           color: $white-color;
           position: relative;
           .text{
               @include absoluteYCenter;
               width: 100%;
               left: 0;
               .text-center{
                   max-width: 1326px;
                   margin: 0 auto;
                   padding: 0 20px;
                   .nav-title{
                       font-size: 40px;
                   }
                   .title-bottom{
                       font-size: 14px;
                       margin-top: 30px;
                       width: 45%;
                   }
               }

           }
       }
    .content{
        max-width: 1366px;
        margin: 0 auto;
        padding: 80px 20px;
        .content-title{
            font-size: 28px;
        }
        .content-bottom{
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            .content-img{
                width: 49.15%;
                position: relative;
                &:nth-child(2n){
                    margin-left: 1.694%;
                }
                &:nth-child(1),
                &:nth-child(2),
                &:nth-child(3),
                &:nth-child(4){
                    margin-top: 20px;
                }
                .content-bg{
                    height: 320px;
                    cursor: pointer;
                    flex-grow: initial;
                    background-repeat: no-repeat;
                    background-size: cover;
                    flex-wrap:wrap;
                }
                .img-text{
                    position: absolute;
                    width: 100%;
                    height: 106px;
                    bottom: 0px;
                    display: flex;
                    justify-content:space-between;
                    background: linear-gradient(90deg, #1754e1 0%, rgba(63, 63, 74, 0) 100%);
                    color: $white-color;
                    .content-text{
                        padding: 30px 0px 20px 20px;
                    }
                    @include media($phone-width){
                        .content-text{
                            font-size: 12px;
                        }
                        .new-title{
                            font-size: 12px;
                            margin-top: 2px;
                        }
                    }
                    @include media($tablet-width){
                        .content-text{
                            font-size: 14px;
                        }
                        .new-title{
                            font-size: 14px;
                            margin-top: 6px;
                        }
                    }
                    @include media($pc-width){
                        .content-text{
                            font-size: 18px;
                        }
                        .new-title{
                            font-size: 14px;
                            margin-top: 10px;
                        }
                    }
                    .img-button{
                        padding: 30px 20px 0px 0px;
                        button{
                            width: 20.689%;
                            height: 36px;
                            padding: 0px;
                            background: $color-primary;
                            color: $white-color;
                            @include secondButtonStyle;
                        }
                    }
                }
            }

        }
    }

</style>
