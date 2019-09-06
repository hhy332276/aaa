<template>
    <div class="about">
        <div class="container banner">
            <div class="nav-tit">
                <div class="nav-tit-center">
                    <p class="title">{{aboutData.about.title}}</p>
                    <!--                <p class="data">{{home.about.data}}</p>-->
                    <!--                <p class="explain">{{home.about.explain}}</p>-->
                </div>

            </div>
        </div>
        <div class="center safe-distance">
            <p class="header-one">{{aboutData.about.subject}}</p>
            <p class="introduce">{{aboutData.about.introduce}}</p>
            <p class="introducea">{{aboutData.about.introducea}}</p>
            <p class="introduceb">{{aboutData.about.introduceb}}</p>
        </div>
        <div class="more safe-distance">
            <p class="header-one">{{aboutData.about.more}}</p>
            <div class="card">
                <div class="forum" v-if="aboutData.about.translate== '1'">
                    <p class="forum-title">{{aboutData.about.forum}}</p>
                    <p class="forum-ex">{{aboutData.about.forumex}}</p>
                    <a href="https://bbs.huaweicloud.com/forum/forum-726-1.html" target="_blank">
                        <button class="button">{{aboutData.about.forumbutt}}</button>
                    </a>

                </div>
                <div class="news">
                    <p class="news-title">{{aboutData.about.news}}</p>
                    <p class="news-ex">{{aboutData.about.newsex}}</p>
                    <router-link to="/documentation">
                        <button class="button">{{aboutData.about.newsbutt}}</button>
                    </router-link>

                </div>
                <div class="video">
                    <p class="video-title">{{aboutData.about.video}}</p>
                    <p class="video-ex">{{aboutData.about.videoex}}</p>
                    <router-link to="/Institute">
                        <button class="button">{{aboutData.about.videobutt}}</button>
                    </router-link>

                </div>
            </div>
        </div>
        <Contact class="contact"></Contact>
    </div>

</template>
<script>
    import homeData from "../static_data/home";
    import Contact from "../components/Contact";
    import {eventBus,eventBusActions} from "../event_bus";
    export default {
        name: 'home',
        data() {
            return {
                aboutJson: homeData,
                language:'',
            }
        },
        components: {
            Contact
        },
        computed:{
            aboutData(){
                if(this.aboutJson[this.$i18n.locale]){
                    return this.aboutJson[this.$i18n.locale];
                }

                //return Chinese page if the specific language isn't available
                return this.aboutJson["zh"];
            }
        },
        // created() {
        //     this.language = sessionStorage.getItem('lang') ? sessionStorage.getItem('lang'):this.$i18n.locale;
        //     eventBus.$on(eventBusActions.LANGUAGE_CHANGED,(e)=>{
        //         if(e === 'en'){
        //             this.$router.push('/about')
        //             // this.$router.replace("/about");
        //         }
        //     });
        // },
    }
</script>
<style lang="scss" scoped>
    @import "../assets/css/mixins";
    @import "../assets/css/partials";

    body {
        width: 100%;
        background: #eef0f4;
    }

    .about {
        width: 100%;
        .banner {
            height: 330px;
            background: url("/imgs/about_banner.png") no-repeat 50% 50%;
            background-size: cover;
            position: relative;
            color: $white-color;
            .nav-tit {
                @include absoluteYCenter;
                width: 100%;
                left: 0;
                .nav-tit-center{
                    max-width: 1326px;
                    margin: 0 auto;
                    padding: 0 20px;
                    .title {
                        font-size: 40px;
                    }

                    .data, .explain {
                        font-size: 14px;
                    }

                    .data {
                        margin-top: 20px;
                    }

                    .explain {
                        margin-top: 20px;
                    }
                }

            }

        }

        .center {
            max-width: 1366px;
            margin: 0 auto;
            color: #262728;
            padding-top: 70px;

            .subject {
                text-align: center;
                font-size: 28px;
                margin-top: 70px;
                font-weight: bold;
            }

            .introduce, .introducea, .introduceb {
                width: 100%;
                padding-top: 50px;
            }

            .introducea, .introduceb {
                padding-top: 35px;
            }
        }

        .more {
            width: 100%;
            height: 490px;
            background: #eef0f4;
            margin-top: 60px;
            padding-top: 70px;

            .header-one {
                text-align: center;
            }

            .more-title {
                font-size: 28px;
                color: #262728;
                text-align: center;
                position: relative;
                top: 70px;
                font-weight: bold;
            }
        }

        .card {
            max-width: 1366px;
            margin: 0 auto;
            display: flex;
            margin-top: 50px;
            justify-content: center;

            .forum {
                width: 32.35%;
                height: 258px;
                background: url("/imgs/about_pic01.png") no-repeat;
                background-size: cover;
                position: relative;

                .forum-title {
                    font-size: 28px;
                    color: #262728;
                    margin-top: 35px;
                    padding: 0 4.7% 0 4.7%;
                }

                .forum-ex {
                    width: 100%;
                    font-size: 14px;
                    color: #393a3c;
                    margin-top: 30px;
                    padding: 0 4.7% 0 4.7%;
                }

                .button {
                    background: #3d88ff;
                    border: 0px;
                    border-radius: 2px;
                    font-size: 14px;
                    color: $white-color;
                    margin-left: 4.7%;
                    position: absolute;
                    bottom: 45px;
                    @include secondButtonStyle;
                }
            }

            .news {
                width: 32.35%;
                height: 258px;
                margin-left: 1.19%;
                background: url("/imgs/about_pic02.png") no-repeat 50% 50%;
                background-size: cover;
                position: relative;

                .news-title {
                    font-size: 28px;
                    color: #262728;
                    margin-top: 35px;
                    padding: 0 4.524% 0 4.524%;
                }

                .news-ex {
                    width: 100%;
                    font-size: 14px;
                    color: #393a3c;
                    margin-top: 30px;
                    padding: 0 4.524% 0 4.524%;
                }

                .button {
                    background: #3d88ff;
                    border: 0px;
                    border-radius: 2px;
                    font-size: 14px;
                    color: $white-color;
                    margin-left: 4.524%;
                    position: absolute;
                    bottom: 45px;
                    @include secondButtonStyle;
                }
            }

            .video {
                width: 32.35%;
                height: 258px;
                margin-left: 1.19%;
                background: url("/imgs/about_pic03.png") no-repeat 50% 50%;
                background-size: cover;
                position: relative;

                .video-title {
                    font-size: 28px;
                    color: #262728;
                    margin-top: 35px;
                    padding: 0 4.524% 0 4.524%;
                }

                .video-ex {
                    width: 100%;
                    font-size: 14px;
                    color: #393a3c;
                    margin-top: 30px;
                    padding: 0 4.524% 0 4.524%;
                }

                .button {
                    background: #3d88ff;
                    border: 0px;
                    border-radius: 2px;
                    font-size: 14px;
                    color: $white-color;
                    margin-left: 4.524%;
                    position: absolute;
                    bottom: 45px;
                    @include secondButtonStyle;
                }
            }
        }

        .contact {
            background: $white-bg;
        }
    }

    .header-one {
        text-align: center;
    }
</style>
