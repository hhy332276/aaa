<template>
    <div class="home">
        <div class='container'>
            <Swiper ref="swiper" :hasPagination="false" :config="properties" class="container">
                <!--MUST use the class swiper-slide-->
                <div :key="index" v-for="(slide,index) in homeData.slideshow" class="swiper-slide">
                    <router-link :to="slide.url" v-if="slide.url!== ''" class="home-img">
                        <img :src="slide.imgUrl" alt="" :key="index">
                        <div class="home-title">
                            <p class="title">{{slide.title}}</p>
                            <p class="sub-title" v-if="slide.type == 1">{{slide.subTitle}}</p>
                            <p v-html="slide.subTitleOne" class="subTitleOne"></p>
                            <p v-html="slide.productButton" class="productButton"></p>
                        </div>
                    </router-link>
                    <!-- <div @click="reportClickEvent(slide.imgUrl)" v-else class="home-img"> -->
                    <div v-else class="home-img">
                        <img :src="slide.imgUrl" alt="" :key="index">
                        <div class="home-title">
                            <p class="title">{{slide.title}}</p>
                            <p class="sub-title" v-if="slide.type == 1">{{slide.subTitle}}</p>
                            <p v-html="slide.subTitleOne" class="subTitleOne"></p>
                            <p v-html="slide.productButton" class="productButton"></p>
                        </div>
                    </div>

                </div>
            </Swiper>
            <div class="integrate safe-distance">
                <div><img :src="homeData.home.integrateUrl" alt=""></div>
                <div class="search-contaner">
                    <div class="high">
                        <div>
                            <img :src="homeData.home.fillImgUrl" alt="">
                        </div>
                        <div class="safe-text">
                            <p>{{homeData.home.high}}</p>
                            <p class="integrate-text">{{homeData.home.help}}</p>
                        </div>

                    </div>
                    <div class="life">
                        <div><img :src="homeData.home.secondFillImgUrl" alt=""></div>
                        <div class="safe-text">
                            <p>{{homeData.home.life}}</p>
                            <p class="integrate-text">{{homeData.home.built}}</p>
                        </div>
                    </div>
                    <div class="widely">
                        <div><img :src="homeData.home.thirdFillImgUrl" alt=""></div>
                        <div class="safe-text">
                            <p>{{homeData.home.widely}}</p>
                            <p class="integrate-text">{{homeData.home.structure}}</p>
                        </div>
                    </div>
                </div>
                <div class="eclipse">
                    <div class="eclipse-text">
                        <p class="integrate-title-one">{{homeData.home.integrateTitleSub}}</p>
                        <p class="integrate-title">{{homeData.home.integrateTitle}}</p>
                        <p class="integrate-text">{{homeData.home.integrateText}}</p>
                    </div>
                    <div class="eclipse-button">
                        <router-link to="/softIntroduction">
                            <button>{{$t('checkMoreDetails')}}</button>
                        </router-link>

                    </div>
                </div>

            </div>
            <div class="atlas">
                <div class="tabs">
                    <div class="tabs-buttons">
                        <div @click="switchTab(0)" :class="{'active-tab':activeTab === 0}">
                            {{homeData.home.tabOne}}
                            <span></span>
                        </div>
                        <div @click="switchTab(1)" :class="{'active-tab':activeTab === 1}">
                            {{homeData.home.tabTwo}}
                            <span></span>
                        </div>
                        <div @click="switchTab(2)" :class="{'active-tab':activeTab === 2}">
                            {{homeData.home.tabThree}}
                            <span></span>
                        </div>
                        <div @click="switchTab(3)" :class="{'active-tab':activeTab === 3}">
                            {{homeData.home.tabFour}}
                            <span></span>
                        </div>
                    </div>
                </div>
                <div class="model-grid container" v-show="activeTab === index" v-for="(sellProduct,index) in homeData.home.sellProductList" :key="index">
                    <div class="model-img">
                        <img :src=sellProduct.sellProductImg alt="">
                    </div>
                    <div class="model-wrap">
                        <div class="model-padding">
                            <div class="model-wrap-conter">
                                <p class="model-title">
                                    {{sellProduct.sellProductTitle}}
                                </p>
                                <p class="model-text">
                                    {{sellProduct.sellProductContent}}
                                </p>
                                <div class="model-button">
                                    <a :href=sellProduct.sellProductDetail target="_blank" v-if="sellProduct.sellProductDetail !=''">
                                        <button>{{$t('viewDetails')}}</button>
                                    </a>
                                    <a :href=sellProduct.sellProductStart v-if="sellProduct.sellProductStart !=''">
                                        <button>{{$t('quickGetStart')}}</button>
                                    </a>
                                    <a :href=sellProduct.sellProductPurchase target="_blank" v-if="sellProduct.sellProductPurchase!=''">
                                        <button>{{$t('purchase')}}</button>
                                    </a>
                                    <a :href=sellProduct.sellProductDocumentation v-if="sellProduct.sellProductDocumentation!=''">
                                        <button>{{$t('documentation')}}</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="colleges safe-distance" v-if="this.$i18n.locale ==='zh'">
                    <p>{{$t('Institute')}}</p>
                    <div class="videos-grid">
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
                    <router-link to="/Institute">
                        <button>{{$t('moreVideo')}}</button>
                    </router-link>
                </div>
                <div class="code-sample safe-distance">
                    <p>{{$t('apps')}}</p>
                    <div class="grids">
<!--                        <router-link :to="'/apps/applicationDetails/' + applicationIndex(index)" :key="index"-->
                        <router-link :to="'/apps/applicationDetails/' + index" :key="index"
                                     v-for="(application,index) in homeData.application"
                                     class="single-grid">
                            <div v-if="index===0" class="thumbnail">
                                <div :style="{'backgroundImage':'url('+homeData.home.faceImgZh+')'}" class="background">
                                    <div class="top-icon">
                                        <span class="arrow-text"></span>
                                    </div>
                                </div>
                            </div>
                            <div v-if="index===1" class="thumbnail">
                                    <div :style="{'backgroundImage':'url('+homeData.home.faceIDImg+')'}"
                                         class="background">
                                        <div class="top-icon">
                                            <span class="arrow-text"></span>
                                        </div>
                                    </div>
                            </div>
                            <div v-if="index===2" class="thumbnail">
                                <div :style="{'backgroundImage':'url('+homeData.home.describeImg+')'}"
                                     class="background">
                                    <div class="top-icon">
                                        <span class="arrow-text"></span>
                                    </div>
                                </div>
                            </div>
                            <div v-if="index===3" class="thumbnail">
                                <div :style="{'backgroundImage':'url('+homeData.home.bodyImg+')'}" class="background">
                                    <div class="top-icon">
                                        <span class="arrow-text"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="text">
                                <div class="title">{{application.title}}</div>
                                <div class="hint">
                                    <span>{{application.describe}}</span>
                                </div>
                                <div class="introduce">
                                    <img src="/imgs/toux.png" alt="">
                                    <span class="introduce-text">{{application.author}}</span>
                                </div>
                                <!--                            <div class="text-img">-->
                                <!--                                <SVGIcon class="arrow" icon="img"/>-->
                                <!--                                <SVGIcon class="arrow" icon="camera"/>-->
                                <!--                                <SVGIcon class="arrow" icon="url"/>-->
                                <!--                            </div>-->
                                <div class="time">
                                    <span>{{application.time}}</span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <router-link to="/apps">
                        <button>{{$t('moreApp')}}</button>
                    </router-link>

                </div>
            </div>
            <div class="cooperation safe-distance" v-if="homeData.home.translate == 1">
                <div class="second">
                    <div class="enlargeOne">
                        <div class="contentOne">
                            <img :src="homeData.home.riseImg" alt="">
                        </div>
                        <div class="content-text-one">
                            <p>{{homeData.home.rise}}</p>
                        </div>
                    </div>
                </div>
                <div class="second">
                    <router-link to="/activity/universityCooperation" class="router">
                        <div class="enlarge">
                            <div class="content">
                                <img :src="homeData.home.collegesImg" alt="">
                            </div>
                            <div class="content-text">
                                <p>{{homeData.home.colleges}}</p>
                                <div class="appear">
                                    <p class="explain">{{homeData.home.collegesSub}}</p>
                                    <div class="content-svg">
                                        <SVGIcon class="next-icon" width="12px" height="24px" icon="nextIcon"/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="second">
                    <router-link to="/activity/details" class="router">
                        <div class="enlarge">
                            <div class="content">
                                <img :src="homeData.home.developerImg" alt="">
                            </div>
                            <div class="content-text">
                                <p>{{homeData.home.developer}}</p>
                                <div class="appear">
                                    <p class="explain">{{homeData.home.developerSub}}</p>
                                    <div class="content-svg">
                                        <SVGIcon class="next-icon" width="12px" height="24px" icon="nextIcon"/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="news safe-distance">
                <p>{{homeData.newsTitle}}</p>
                <div class="new-specific">
                    <div class="new-img" v-show="index===showIndex" v-for="(news,index) in homeData.home.newsList" :key="index">
                        <div :style="{'backgroundImage':'url('+news.newsImg+')'}" class="empty">
                        </div>
                        <div class="img-text">
                            <div>
                                <p class="new-time">{{news.newsTime}}</p>
                                <p class="new-title">{{news.newsTitle}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="new-text">
                        <div class="new-right" :key="index" v-for="(news,index) in homeData.home.newsList" @mouseover.prevent="changes(index)" @mouseout.prevent="nochang()">
                            <div class="new-time">
                                <p>{{news.date}}</p>
                                <p>{{news.yearMonth}}</p>
                            </div>
                            <div class="new-center">
                                <div class="new-center-specific">
                                    <p>{{news.newsTitle}}</p>
                                    <p>{{news.newsContent}}</p>
                                </div>
                                <p><a :href="news.newsLink"
                                      target="_blank">{{$t('readImmediately')}}</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <contact></contact>
    </div>

</template>

<script>
    // @ is an alias to /src

    import homeData from "../static_data/home";
    import Swiper from "../components/Swiper";
    import SVGIcon from "../components/SVGIcon";
    import contact from "../components/Contact";
    import {HWReport} from "../../public/static";
    // import axios from "axios";
    export default {
        name: 'home',
        data() {
            return {
                media: {},
                activeTab: 0,
                homeJson: homeData,
                language: '',
                showIndex:0,
                slidesNum: 1,
                properties: {
                    autoplay: 2500,
                    init: false,
                    slidesPerView: 1,
                    loop: homeData.zh.slideshow.length > 1,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    observeParents:true,
                    observer:true,
                    prevButton: '.swiper-button-prev',
                    nextButton: '.swiper-button-next',
                    onSlideChangeEnd: function (swiper) {
                        if (swiper.isEnd) {
                            swiper.nextButton.css('display', 'block');
                        } else {
                            swiper.nextButton.css('display', 'block');
                        }
                    }
                }
            }
        },
        created() {
            var user = this.$cookies.get('user')
            var token = this.$cookies.get('user')
        },
        mounted() {
            setTimeout(() => {
                if (this.$refs.swiper) {
                    this.$refs.swiper.init();
                }
            }, 500);
        },

        components: {
            Swiper,
            SVGIcon,
            contact,
        },
        computed: {
            codeSample() {
                //the homepage only shows 4 posts on code sample
                let news = [];
                let index = homeJson.zh.application.length > 4 ? 4 : homeJson.zh.codeSample.length;
                for (let i = 0; i < index; i++) {
                    news.push(homeJson.zh.codeSample[i]);
                }
                return news;
            },
            homeData() {
                if (this.homeJson[this.$i18n.locale]) {
                    return this.homeJson[this.$i18n.locale];
                }
                //return Chinese page if the specific language isn't available
                return this.homeJson["zh"];
            }
        },
        methods: {
            //事件打点
            // reportClickEvent(data){
            //     HWReport.reportEvent(`User clicked ${data}`);
            // },
            switchTab(index) {
                this.activeTab = index;
            },
            changes(index){
                this.showIndex = index;
            },
            nochang(){
                this.showIndex = 0;
            },
            applicationIndex(index){
                if(this.$i18n.locale=="en"){
                  return index+1
                }else{
                    return index
                }
            }
        },
        updated(){
            if(homeData.zh.slideshow.length>1){
                this.$refs.swiper.init();
            }
        }
    }
</script>


<style lang="scss">
    @import "../assets/css/mixins";
    @import "../assets/css/partials";

    @media screen and (min-width: 5000px) {
        body {
            .home .colleges a button, .home .integrate .eclipse .eclipse-button button, .home .code-sample button {
                display: inline !important;
                font-size: 12px;
                line-height: 0;
                transform: scale(.8) !important;
                padding: 30px 50px;
            }

            .search-contaner p {
                font-size: 12px;
                transform: scale(.8)
            }

            .new-center-specific p {
                font-size: 12px;
                transform: scale(.5) !important
            }

            .new-center {
                height: 100px
            }

            .new-text p {
                font-size: 12px;
                transform: scale(.7) !important
            }

            .home .integrate .search-contaner .high div, .home .integrate .search-contaner .life div {
                margin-left: 0;
            }
        }
    }

    .home {
        width: 100%;
        container: {
            max-width: 1920px;
            margin: 0 auto;
        }

        .swiper-slide {
            width: 100%;

            .home-img {
                position: relative;

                img {
                    width: 100%;
                }

                .home-title {
                    position: absolute;
                    color: $black-text-two;
                    top: 26.667%;
                    padding-left: 15.297%;
                    width: 32%;

                    .title {
                        font-size: 30px;
                    }

                    .sub-title {
                        font-size: 14px;
                        color: $black-text-three;
                        margin-top: 45px;
                    }

                    .subTitleOne {
                        color: #333333;
                        margin-top: 5px;
                    }

                    .productButton {
                        button {
                            @include secondButtonStyle;
                        }
                    }
                }
            }
        }


        .integrate {
            max-width: $max-width;
            position: relative;
            margin: 0 auto;

            img {
                width: 100%;
            }

            .search-contaner {
                width: 70%;
                margin: 0 auto;
                /*height: 154px;*/
                background: $white-color;
                position: absolute;
                z-index: 2;
                box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
                top: -100px;
                left: 15%;
                border-radius: 2px;
                display: flex;
                padding: 36px 0.57% 0 0.57%;

                .high, .life, .widely {
                    display: flex;
                    width: 33.3%;

                    div {
                        p {
                            width: 100%;
                            &:nth-child(1) {
                                font-size: 19px;
                                color: $black-text-two;
                                text-overflow: ellipsis;
                                /*white-space: nowrap;*/
                                overflow: hidden;
                                width: 100%;
                            }

                            @include media($tablet-width) {
                                &:nth-child(1) {
                                    font-size: 12px;
                                }
                            }
                            @include media($pc-width) {
                                &:nth-child(1) {
                                    font-size: 16px;
                                }
                            }
                            @include media($max-width) {
                                &:nth-child(1) {
                                    font-size: 19px;
                                }
                            }

                            &:nth-child(2) {
                                font-size: 14px;
                                color: $black-text-three;
                                margin-top: 5%;

                            }
                        }
                        .integrate-text{
                            height: 65px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            line-height: 20px;
                        }

                    }
                    .safe-text{
                        width: 80%;
                    }

                    @include media($tablet-width) {
                        div {
                            margin-left: 10%;
                        }

                    }
                    @include media($pc-width) {
                        div {
                            margin-left: 8%;
                        }

                    }
                    @include media($max-width) {
                        div {
                            margin-left: 5%;
                        }

                    }

                    img {
                        width: 47px;
                        height: 47px;
                        margin-top: 5px;
                        float: left;
                    }

                }

            }

            .eclipse {
                width: 45%;
                height: 685px;
                position: absolute;
                top: 0px;
                padding: 10% 0px 0px 14%;

                .eclipse-text {
                    width: 100%;

                    .integrate-title {
                        font-size: 18px;
                        line-height: 1.5;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }

                    .integrate-title-one {
                        font-size: 25px;
                        line-height: 1.5;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }

                    .integrate-text {
                        font-size: 14px;
                        color: $black-text-three;
                        margin-top: 25px;
                        text-align: left;
                        /*height: 75px;*/
                        overflow: hidden;
                        text-overflow: ellipsis;
                        line-height: 23px;
                    }
                }

                .eclipse-button {
                    button {
                        background: $color-primary;
                        color: $white-color;
                        padding: 3px 6px;
                        margin-top: 30px;
                        @include secondButtonStyle;
                    }
                }
            }
        }

        .atlas {
            width: 100%;
            margin: 0 auto;

            .tabs {
                width: 100%;
                height: 65px;
                text-align: center;
                margin: 0 auto;

                .tabs-buttons {
                    width: 80%;
                    height: 65px;
                    margin: 0 auto;

                    div {
                        position: relative;
                        display: inline-block;
                        line-height: 65px;
                        cursor: pointer;
                        color: $black-text-two;
                        font-size: 18px;
                        margin: 0 auto;

                        &:nth-child(2),
                        &:nth-child(3),
                        &:nth-child(4),
                        &:nth-child(5) {
                            margin-left: 50px;
                        }

                        @include media(1200px) {
                            font-size: 18px;
                            padding: 0 30px;
                        }

                        &.active-tab {
                            color: #000000;
                            font-weight: 600;

                            span {
                                border-bottom: 4px solid $color-primary;
                                height: 4px;
                                width: 100%;
                                bottom: 0;
                                left: 0;
                                position: absolute;
                            }
                        }
                    }
                }
            }

            .model-grid {
                max-width: 1176px;
                margin: 0 auto;
                font-size: 14px;
                display: flex;
                padding: 35px 20px 64px 20px;

                .model-img {
                    width: 43.921%;

                    img {
                        width: 100%;
                    }
                }

                .model-wrap {
                    width: 52.565%;
                    margin-left: 3.514%;

                    .model-padding {
                        position: relative;
                        width: 100%;
                        vertical-align: top;
                        padding-bottom: 35.455%;

                        .model-wrap-conter {
                            position: absolute;
                            /*width: 84.267%;*/
                            height: 200px;
                            left: 0;
                            top: 50%;
                            transform: translateY(-50%);

                            .model-title {
                                font-size: 30px;
                                color: $black-text-two;
                                width: 80%;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                            }

                            .model-text {
                                font-size: 14px;
                                color: $black-text-three;
                                /*line-height: 2;*/
                                width: 85%;
                                text-align: left;
                                /*height: 75px;*/
                                overflow: hidden;
                                text-overflow: ellipsis;
                                line-height: 22px;
                            }

                            .model-button {
                                margin-top: 4.71%;
                                height: 36px;
                                overflow: hidden;

                                a {
                                    &:nth-child(2),
                                    &:nth-child(3),
                                    &:nth-child(4) {
                                        margin-left: 0.833%;
                                    }

                                    button {
                                        width: 7.142%;
                                        height: 36px;
                                        padding: 0;
                                        @include buttonStyle;

                                    }
                                }

                            }
                        }
                    }

                }

            }
        }

        .colleges {
            text-align: center;

            p {
                font-size: 30px;
            }

            .videos-grid {
                margin: 0 auto;
                max-width: 1480px;
                margin-top: 50px;

                .single-video {
                    margin-bottom: 25px;
                    display: inline-block;
                    vertical-align: top;
                    width: 23.986%;
                    margin-right: 1.352%;
                    background: $gray-site-bg-color;
                    cursor: pointer;

                    &:nth-child(4n) {
                        margin-right: 0;
                    }

                    .thumbnail-container {
                        width: 100%;

                        .thumbnail {
                            padding-bottom: 56.338%;
                            background-repeat: no-repeat;
                            background-size: cover;
                            position: relative;

                            .play-icon {
                                @include absoluteCenter;
                            }

                            .play-icon {
                                margin-top: 5%;
                            }
                        }

                        .views {
                            color: $white-color;
                            @include clear-float;
                            height: 44px;
                            line-height: 44px;
                            padding-left: 20px;
                            text-align: left;

                            .video-title {
                                float: left;
                                width: 100%;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                            }

                            .video-views {
                                float: right;
                                margin-right: 20px;
                                text-align: left;

                                .hat-icon {
                                    display: inline-block;
                                    vertical-align: middle;
                                    margin-right: 15px;
                                }
                            }
                        }
                    }

                    .description {
                        padding: 0 20px;
                        color: #39383c;
                        height: 60px;
                        overflow: hidden;
                        margin: 15px 0;
                        text-align: left;
                        width: 100%;
                        /*white-space: nowrap;*/
                        text-overflow: ellipsis;
                    }

                    &:nth-child(4n-3) {
                        .views {
                            background: linear-gradient(90deg, #3593ff, #5172e5);
                        }
                    }

                    &:nth-child(4n-2) {
                        .views {
                            background: linear-gradient(90deg, #4964e7, #42b1ea);
                        }
                    }

                    &:nth-child(4n-1) {
                        .views {
                            background: linear-gradient(90deg, #2bcadc, #35a0ff);
                        }
                    }

                    &:nth-child(4n) {
                        .views {
                            background: linear-gradient(90deg, #516be5, #3593ff);
                        }
                    }
                }
            }

            button {
                background: $color-primary;
                color: $white-color;
                // width: 120px;
                // height: 35px;
                padding: 3px 6px;
                margin-top: 30px;
                @include secondButtonStyle;
            }
        }

        .code-sample {
            width: 100%;
            margin: 0 auto;
            padding-top: 70px;
            padding-bottom: 60px;
            text-align: center;
            background: $gray-site-bg-color;
            margin-top: 60px;

            p {
                text-align: center;
                font-size: 30px;
                padding-bottom: 50px;
            }

            .grids {
                max-width: 1366px;
                display: flex;
                flex-wrap: wrap;
                margin: 0 auto;
            }

            .single-grid {
                position: relative;
                width: 23.72%;
                vertical-align: top;
                margin-right: 1.69%;
                margin-top: 60px;
                cursor: pointer;
                background-color: #fff;
                border: 1px solid $border-color;
                transition: box-shadow 200ms ease-in;
                flex-grow: initial;
                @include shadow;

                &:nth-child(4n) {
                    margin-right: 0;
                }

                &:nth-child(1),
                &:nth-child(2),
                &:nth-child(3),
                &:nth-child(4) {
                    margin-top: 0;
                }

                .thumbnail {
                    width: 100%;

                    .background {
                        padding-bottom: 56.666%;
                        background-repeat: no-repeat;
                        background-size: cover;

                        .top-icon {
                            position: relative;

                            .arrow {
                                width: 14.2%;
                                height: 37px;
                                margin-left: 80%;
                                position: absolute;
                                top: 47%;
                            }

                            .arrow-text {
                                position: absolute;
                                font-size: 12px;
                                color: $white-color;
                                left: 82.5%;
                                top: 7px;
                            }
                        }

                    }
                }

                .text {
                    text-align: left;
                    width: 100%;
                    color: $black-text;
                    padding: 30px 20px 30px 20px;

                    .title {
                        margin-bottom: 10px;
                        font-size: 22px;
                    }

                    .hint {
                        position: relative;
                        font-size: 14px;
                        height: 100px;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        line-height: 25px;

                        span {
                            display: inline-block;
                        }

                        .arrow {
                            @include absoluteYCenter;
                            right: 0;
                            width: 30px;
                            height: 30px;
                        }
                    }

                    .introduce {
                        font-size: 14px;
                        color: #262728;
                        margin-top: 15px;

                        .introduce-text {
                            margin-left: 6px;
                        }
                    }

                    .text-img {
                        display: flex;
                        margin-top: 17px;

                        .arrow {
                            width: 15px;
                            height: 15px;
                            margin-left: 6px;
                        }
                    }

                    .time {
                        font-size: 14px;
                        color: #bfbfbf;
                        margin-top: 6px;
                    }
                }
            }

            button {
                background: $color-primary;
                color: $white-color;
                // width: 120px;
                // height: 35px;
                padding: 3px 6px;
                margin-top: 45px;
                @include secondButtonStyle;
            }
        }

        .cooperation {
            margin: 0 auto;
            max-width: 1480px;
            margin-top: 50px;
            display: flex;

            .second {
                width: 32.432%;
                color: #434343;
                font-size: 24px;
                text-align: center;

                .enlargeOne {
                    width: 100%;
                    position: relative;
                    font-size: 28px;

                    .contentOne {
                        width: 100%;

                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }

                    .content-text-one {
                        position: absolute;
                        width: 100%;
                        text-align: center;
                        @include absoluteCenter;
                    }
                }

                .enlarge {
                    width: 100%;
                    position: relative;
                    color: $white-color;
                    transition: top .5s;
                    //@include shadow;
                    .content {
                        width: 100%;

                        img {
                            width: 100%;
                        }
                    }

                    .content-text {
                        position: absolute;
                        width: 100%;
                        @include absoluteCenter;
                        text-align: center;

                        .appear {
                            display: none;
                            position: absolute;

                            .explain {
                                font-size: 16px;
                                padding: 5% 10px 0px 10px;
                            }

                            .content-svg {
                                transform: rotate(90deg);
                                margin-top: 10%;
                            }

                        }


                    }
                }

                .enlarge {
                    transition: transform .5s;
                    -moz-transition: transform .5s; /* Firefox 4 */
                    -webkit-transition: transform .5s; /* Safari 和 Chrome */
                    -o-transition: transform .5s; /* Opera */
                }

                .enlarge:hover {
                    transform: translate(0, -20px);
                }

                .enlarge:hover .appear {
                    display: block;
                    transition: .5s;
                }

                .enlarge:hover .content-text {
                    top: 100px;
                    transition: .5s;
                }

                &:nth-child(2),
                &:nth-child(3) {
                    margin-left: 20px;
                }
            }


        }

        .news {
            max-width: 1166px;
            margin: 0 auto;
            text-align: center;
            padding-top: 100px;
            padding-bottom: 80px;

            p {
                font-size: 30px;
            }

            .new-specific {
                width: 100%;
                margin-top: 50px;

                .new-img {
                    width: 53.6%;
                    position: relative;
                    display: inline-block;
                    vertical-align: top;

                    .empty {
                        padding-bottom: 57.92%;
                        background-repeat: no-repeat;
                        background-position: 100% 100%;
                    }

                    .img-text {
                        text-align: left;
                        position: absolute;
                        width: 100%;
                        bottom: 15px;
                        display: flex;
                        background: linear-gradient(90deg, #1754e1 0%, rgba(63, 63, 74, 0) 100%);
                        padding: 20px 0 20px 20px;

                        .new-time {
                            color: #ffbc00;
                            font-size: 14px;
                        }

                        .new-title {
                            color: $white-color;
                        }

                        @include media($phone-width) {
                            .new-title {
                                font-size: 14px;
                            }
                        }
                        @include media($tablet-width) {
                            .new-title {
                                font-size: 18px;
                            }
                        }
                        @include media($pc-width) {
                            .new-title {
                                font-size: 22px;
                            }
                        }

                        .arrow {
                            width: 8px;
                            height: 24px;
                            top: 40%;
                            right: 15%;
                            position: absolute;
                        }
                    }
                }

                .new-text {
                    width: 46.4%;
                    padding-left: 3%;
                    color: #262728;
                    display: inline-block;
                    vertical-align: top;

                    .new-right {
                        display: flex;

                        &:nth-child(2),
                        &:nth-child(3) {
                            margin-top: 5%;
                        }

                        .new-time {
                            min-width: 50px;
                            position: absolute;

                            p {
                                &:nth-child(1) {
                                    color: $color-primary;
                                    font-size: 40px;
                                }

                                &:nth-child(2) {
                                    color: #9f9f9f;
                                    font-size: 14px;
                                }
                            }
                        }

                        .new-center {
                            width: 100%;
                            padding-left: 75px;

                            p {
                                font-size: 14px;
                                text-align: left;
                            }

                            .new-center-specific {
                                p {
                                    &:nth-child(1) {
                                        font-size: 18px;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                        white-space: nowrap;
                                    }

                                    &:nth-child(2) {
                                        color: #393a3c;
                                        font-size: 14px;
                                        text-align: left;
                                        height: 50px;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                        line-height: 25px;
                                    }
                                }
                            }

                            a {
                                color: $color-primary;
                            }
                        }
                    }
                }


            }
        }

        .overlay {
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
            .images-slides {
                @include absoluteCenter;
                width: 90%;
                max-width: 1180px;
            }
        }
    }

</style>


