<template>
    <div class="container">
        <div class="news-nav">
            <img src="/imgs/Unknown-news.png" alt="">
            <div class="banner-title">
                <div class="banner-title-center">
                    <p class="new-h">{{newsData.h1}}</p>
                    <p class="new-h">{{newsData.h2}}</p>
                </div>

            </div>

        </div>
        <div class="new-subject safe-distance">
                <p class="header-one">{{newsData.newtitle}}</p>
            <div v-for="(list,index) in newsData.newLists">
                <div class="new-specific">
                    <div class="new-img">
                        <div  :style="{'backgroundImage':'url('+list.imgUrl+')'}" class="empty">
                        </div>
                        <div class="img-text">
                            <div class="new-title-wrap">
                                <p class="new-time">{{list.newTime}}</p>
                                <p class="new-title">{{list.textTitle}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="new-text">
                        <p class="text-title">{{list.textTitle}}</p>
                        <p class="text-time">{{list.newTime}}</p>
                        <p class="text-contenta">{{list.contentText}}</p>
                        <p class="text-butt"><a :href="list.jumpUrl" target="_blank" class="button">{{$t('knowMore')}}</a></p>
                    </div>
                </div>
            </div>
        </div>
<!--        <paging class="paging" @onpage="onpage" ref="paging"></paging>-->
    </div>
</template>

<script>
    import news from "../static_data/news";
    import paging from "../components/paging";
    import SVGIcon from "../components/SVGIcon";
    import {constants,settings} from "../../public/static/index";
    import {eventBus,eventBusActions} from "../event_bus";
    export default {
        name: "news",
        data() {
            return {
                newsList: news,
                language:""
            }
        },
        components:{
            paging,
            SVGIcon
        },
        methods:{
        },
        created() {
            this.language = settings.getLanguage();
            eventBus.$on(eventBusActions.LANGUAGE_CHANGED,()=>{
                this.language = settings.getLanguage();
            });
        },
        computed:{
            newsData(){
                if(this.newsList[this.$i18n.locale]){
                    return this.newsList[this.$i18n.locale].news;
                }
                //return Chinese page if the specific language isn't available
                return this.newsList["zh"].news;
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/css/mixins";
    @import "../assets/css/partials";
            .news-nav{
                width: 100%;
                position: relative;
                img{
                    width: 100%;
                }
                .banner-title{
                    position: absolute;
                    top: 50%;
                    left: 0;
                    width: 100%;
                    transform: translateY(-50%);
                    .banner-title-center{
                        max-width: 1366px;
                        margin: 0 auto;
                        padding: 0 20px;
                        .new-h{
                            text-align: left;
                            font-size: 30px;
                            color:$white-color ;
                        }
                    }
                }

            }
            .new-subject{
                max-width: 1366px;
                margin: 0 auto;
                padding-top: 70px;
                .header-one{
                    font-size: 28px;
                    font-weight: bolder;
                    color: $black-text;
                }
                .new-specific{
                    width: 100%;
                    padding: 50px 0;
                    border-bottom: 1px solid #e0e0e0;
                    .new-img{
                        width: 40.26%;
                        position: relative;
                        display: inline-block;
                        .empty{
                            padding-bottom: 54.5%;
                            background-repeat: no-repeat;
                            background-position: 100% 100%;
                        }
                        .img-text{
                            position: absolute;
                            width: 100%;
                            bottom: 15px;
                            background: linear-gradient(90deg, #1754e1 0%, rgba(63, 63, 74, 0) 100%);
                            padding: 20px 0 20px 20px;
                            .new-title-wrap{
                                width: 100%;
                                .new-time{
                                    color: #ffbc00;
                                    font-size: 14px;
                                }
                                .new-title{
                                    color: $white-color;
                                    overflow: hidden;
                                    white-space: nowrap;
                                    text-overflow:ellipsis;
                                    font-size: 20px;
                                    padding-right: 50%;
                                }

                            }


                            .arrow{
                                width: 8px;
                                height: 24px;
                                top: 40%;
                                right: 15%;
                                position: absolute;
                            }
                        }
                    }
                    .new-text{
                        width: 52%;
                        margin-left: 7.692%;
                        color: #262728;
                        display: inline-block;
                        vertical-align: top;
                        position: relative;
                        padding-bottom: 9%;
                        .text-title{
                            font-size: 18px;
                            font-weight: bold;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow:ellipsis;
                        }
                        .text-time,.text-contenta{
                            color: #393a3c;
                            font-size: 14px;
                        }
                        .text-time{
                            margin-top: 20px;
                        }
                        .text-contenta{
                            margin-top: 20px;
                            height: 100px;
                            line-height: 20px;
                            overflow: hidden;
                        }
                        .text-butt{
                            margin-top: 10%;
                            position: absolute;
                            left: 0px;
                            top: 50%;
                            .button{
                                border: #3d88ff solid 1px;
                                font-size: 12px;
                                color: #3d88ff;
                                @include buttonStyle;
                            }
                        }
                    }

                }
            }
        /*}*/
        .paging{
            padding: 100px 0px 100px 0px;
        }
</style>
