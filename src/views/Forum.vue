<template>
    <div class="outter-wrapper">
        <button @click="selectFiles()">hello</button>
        <ImageUploader :filesChosen="onFilesChosen" :fileTooLarge="omMaxSizeReached" :imagesPreview="onImagePreview" :maxSize="120000" :isMultipleUpload=false :accept="'image/*'" ref="fileSelector"/>
        <button @click="uploadTheFile">upload image</button>
        <img :src="imgPreview" alt="">
        <div class="forum-container carousel-row">

<!--            <Swiper class="carousel left" ref="swiper" :hasPagination=true :config=carouselProperties >-->
<!--                &lt;!&ndash;MUST use the class swiper-slide&ndash;&gt;-->
<!--            <div class="swiper-slide" :key="index" v-for="(slide,index) in forumCarousel">-->
<!--                <div class="slide-img"></div>-->
<!--                <div class="slide-text">-->
<!--                    <div class="title">{{slide.title}}</div>-->
<!--                    <div class="info">{{slide.info}}</div>-->
<!--                </div>-->
<!--            </div>-->
<!--            </Swiper>-->

            <div class="right">
                <div class="profile-card">
                    <div class="content">
                        <div class="info-wrapper">
                            <div class="user-info">
                                <router-link to="/" class="avatar"></router-link>
                                <div class="greetings">Hi,Roy</div>
                                <div class="get-points">{{$t('getPoints')}}</div>
                            </div>
                            <div class="level-points">
                                <div class="level">
                                    <SVGIcon class="icon" width="19px" height="19px" icon="level"/>
                                    <div class="label">{{$t('level')}}</div>
                                    <div class="info" v-html="$t('levelNum',{level:10})"></div>
                                    <div class="border-right"></div>
                                </div>
                                <div class="points">
                                    <SVGIcon class="icon" width="19px" height="19px" icon="points"/>
                                    <div class="label">{{$t('points')}}</div>
                                    <div class="info">400</div>
                                </div>
                                <div class="border-bottom">
                                    <div></div>
                                </div>
                            </div>
                            <div class="activities-hints">
                                <router-link to="/" class="activity">
                                    <div class="number">30</div>
                                    <div class="text">{{$t('following')}}</div>
                                </router-link>
                                <router-link to="/" class="activity">
                                    <div class="number">30</div>
                                    <div class="text">{{$t('followers')}}</div>
                                </router-link>
                                <router-link to="/" class="activity">
                                    <div class="number">30</div>
                                    <div class="text">{{$t('sendPost')}}</div>
                                </router-link>
                            </div>
                            <button class="send-post">{{$t('IwantToSendAPost')}}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!--tabs and shortcuts-->
        <div class="forum-container list-wrapper">

            <div class="left">
                <div class="tabs">
                    <div class="tabs-buttons">
                        <div @click="switchTab(0)" :class="{'active-tab':activeTab === 0}">
                            {{$t('all')}}
                            <span></span>
                        </div>
                        <div @click="switchTab(1)" :class="{'active-tab':activeTab === 1}">
                            {{$t('hot')}}
                            <span></span>
                        </div>
                        <div @click="switchTab(2)" :class="{'active-tab':activeTab === 2}">
                            {{$t('recommendation')}}
                            <span></span>
                        </div>
                    </div>

                    <!--tabs content-->
                    <!--all-->
                    <div v-show="activeTab === 0" class="tab-content">
                        <SinglePost :post="post"  :key="post.forumId" v-for="post in allForumPosts.posts"/>
                    </div>

                    <!--hot-->

                    <div v-show="activeTab === 1" class="tab-content">
                        <SinglePost :post="post"  :key="post.forumId" v-for="post in hotPosts.posts"/>
                    </div>




                    <!--recommended-->
                    <div v-show="activeTab === 2" class="tab-content">
                        <SinglePost :post="post"  :key="post.forumId" v-for="post in recommendedPosts.posts"/>
                    </div>



                </div>

                <!--pagination-->
                <div v-show="activeTab === 0" class="pagination-wrapper">
                    <Pagination :option=pageSizes :count=allForumPosts.totalPages :row=allForumPosts.totalItems class="pagination"/>
                </div>

                <!--pagination-->
                <div v-show="activeTab === 1" class="pagination-wrapper">
                    <Pagination :option=pageSizes :count=hotPosts.totalPages :row=hotPosts.totalItems class="pagination"/>
                </div>

                <!--pagination-->
                <div v-show="activeTab === 2" class="pagination-wrapper">
                    <Pagination :option=pageSizes :count=recommendedPosts.totalPages :row=recommendedPosts.totalItems class="pagination"/>
                </div>

            </div>


            <div class="right">
                <div class="forum-topics side-box">
                    <div class="content">
                        <div class="title">
                            <span>{{$t('forumTopics')}}</span>
                        </div>
                        <div class="topics-list">
                            <router-link :to="'/forum/topic/'+topic.forumSectionId" :key="index" class="single-topic" v-for="(topic,index) in topics">
                                <div class="icon">
                                    <SVGIcon v-if="topic.forumSectionName === 'Atlas 200 DK'" class="doc-icon" width="16px" height="16px" icon="atlas200dk"/>
                                    <SVGIcon v-else-if="topic.forumSectionName === 'Atlas 200' || topic === 'Atlas 300' || topic === '后续补充'" class="doc-icon" width="16px" height="16px" icon="atlas200"/>
                                    <SVGIcon v-else-if="topic.forumSectionName === 'Atlas 500'" class="doc-icon" width="16px" height="16px" icon="atlas500"/>
                                    <SVGIcon v-else class="doc-icon" width="16px" height="16px" icon="atlas500"/>
                                </div>
                                <div class="topic-name">{{topic.forumSectionName}}</div>
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="side-box">
                    <div class="content">
                        <div class="title">
                            <span>{{$t('todayHotPosts')}}</span>
                        </div>
                        <ul class="posts-list">
                            <li :key="post.forumId" v-for="post in todayHotPosts.posts">
                                <router-link class="ellipsis" to="/forum/postDetails">{{post.title}}</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="contact-us">
                        {{$t('contactUsEmail',{email:"Ascend@huawei.com"})}}
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    // import Swiper from "../components/Swiper";
    import SVGIcon from "../components/SVGIcon";
    import Pagination from "../components/paging";
    import SinglePost from "../components/SinglePost";
    import http from "../utils/axiosConfig";
    import {constants} from "../../public/static";
    import ImageUploader from "../components/FileUploader"
    export default {
        name: "Forum",
        components:{
            // Swiper,
            SVGIcon,
            Pagination,
            SinglePost,
            ImageUploader
        },
        data(){
            return {
                imgPreview:"",
                activeTab:0,
                forumCarousel: [
                    {
                        title:"加入Ascend开发者计划",
                        info:"加入Ascend生态伙伴，一起打造开放、共赢、普惠的人工智能生态，快速获取商业成功"
                    },
                    {
                        title:"加入Ascend开发者计划",
                        info:"加入Ascend生态伙伴，一起打造开放、共赢、普惠的人工智能生态，快速获取商业成功"
                    },
                    {
                        title:"加入Ascend开发者计划",
                        info:"加入Ascend生态伙伴，一起打造开放、共赢、普惠的人工智能生态，快速获取商业成功"
                    }
                ],
                carouselProperties:{
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false,
                    },
                    init:false,
                    slidesPerView: 1,
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }
                },
                topics:[],
                pageSizes:[10,20,30,40,50,60],
                todayHotPosts:{
                    pageSize:10,
                    currentPage:1,
                    posts:[]
                },
                allForumPosts:{
                    currentPage:1,
                    pageSize:10,
                    totalPages:1,
                    totalItems:1,
                    posts:[]
                },
                recommendedPosts:{
                    currentPage:1,
                    pageSize:10,
                    totalPages:1,
                    totalItems:1,
                    posts:[]
                },
                hotPosts:{
                    currentPage:1,
                    pageSize:10,
                    totalPages:1,
                    totalItems:1,
                    posts:[]
                },
            }
        },
        methods:{
            uploadTheFile(){
                this.$refs.fileSelector.startUpload();
            },
            onFilesChosen(){

            },
            omMaxSizeReached(data){
                console.log(data);
            },
            onImagePreview(bitmaps){
                if(!bitmaps || bitmaps.length === 0){
                    return;
                }
                this.imgPreview = bitmaps[0];
                console.log(bitmaps)
            },
            selectFiles(){
                this.$refs.fileSelector.selectFiles();
            },
            switchTab(index){
                this.activeTab = index;
            },
            fetchAnotherPage(pageNumber){
                switch (activeTab) {
                    case 0:
                        //All
                        this.allForumPosts.currentPage = pageNumber;
                        this.getAllForumPosts();
                        break;
                    case 1:
                        //hot
                        this.hotPosts.currentPage = pageNumber;
                        this.getHotForumPosts();
                        break;
                    case 2:
                        //recommended
                        this.recommendedPosts.currentPage = pageNumber;
                        this.getRecommendedForumPosts();
                        break;
                }
            },
            getAllForumPosts(){
                http.post("queryForums",{
                    "currentPage":this.allForumPosts.currentPage,
                    "pageSize":this.allForumPosts.pageSize,
                }).then((res)=>{
                    if(constants.responseCode.SUCCESS === res.code){
                        this.allForumPosts.totalPages = res.data.totalPage;
                        this.allForumPosts.totalItems = res.data.total;
                        this.allForumPosts.posts = res.data.items;
                    }
                }).catch(()=>{

                })
            },
            getHotForumPosts(){
                http.post("queryForums",{
                    "currentPage":this.hotPosts.currentPage,
                    "pageSize":this.hotPosts.pageSize,
                }).then((res)=>{
                    if(constants.responseCode.SUCCESS === res.code){
                        this.hotPosts.totalPages = res.data.totalPage;
                        this.hotPosts.totalItems = res.data.total;
                        this.hotPosts.posts = res.data.items;
                    }
                }).catch(()=>{

                })
            },
            getRecommendedForumPosts(){
                http.post("queryForums",{
                    "currentPage":this.recommendedPosts.currentPage,
                    "pageSize":this.recommendedPosts.pageSize,
                    "forumType":"1,2",
                }).then((res)=>{
                    if(constants.responseCode.SUCCESS === res.code){
                        this.recommendedPosts.totalPages = res.data.totalPage;
                        this.recommendedPosts.totalItems = res.data.total;
                        this.recommendedPosts.posts = res.data.items;
                    }
                }).catch(()=>{

                })
            },
            getForumTopics(){
                http.post("queryForumSection").then((res)=>{
                    if(constants.responseCode.SUCCESS === res.code){
                        this.topics = res.data;
                    }
                }).catch(()=>{

                })
            },
            getTodayHotTopics(){
                http.post("queryForums",{
                    "currentPage":this.todayHotPosts.currentPage,
                    "pageSize":this.todayHotPosts.pageSize,
                }).then((res)=>{
                    if(constants.responseCode.SUCCESS === res.code){
                        this.todayHotPosts.posts = res.data.items;
                    }
                }).catch(()=>{

                })
            }
        },
        created(){
            //init swiper
            if(this.$refs.swiper){
                this.$refs.swiper.init();
            }

            this.getAllForumPosts();

            this.getHotForumPosts();

            this.getRecommendedForumPosts();

            this.getForumTopics();

            this.getTodayHotTopics();

        },
    }
</script>

<style lang="scss">
    @import "../assets/css/mixins";
    @import "../assets/css/partials";

    .outter-wrapper{
        background: $website-bg;
        padding-top: 20px;
        padding-bottom: 60px;
    }
    .forum-container{
        max-width: 1366px;
        margin: 0 auto;
        &.list-wrapper{
            margin-top: 20px;
        }
        .left{
            width: 73.206%;
            display: inline-block;
            vertical-align: top;
        }
        .right{
            width: 25.33%;
            display: inline-block;
            vertical-align: top;
            margin-left: 1.45%;
        }
        .carousel{
            position: relative;
            .swiper-slide{
                width: 100%;
                cursor: pointer;
                .slide-img{
                    background-image: url("/imgs/forum_banner.png");
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                    padding-bottom: 40%;
                }
                .slide-text{
                    @include absoluteCenter;
                    max-width: 840px;
                    width: 100%;
                    color: $white-color;
                    .title{
                        font-size: 30px;
                        margin-bottom: 30px;
                        padding-left: 30px;
                    }
                    .info{
                        font-size: 14px;
                        width: 40%;
                        padding-left: 30px;
                    }
                }
            }
            .swiper-pagination-bullet{
                background: $white-color;
                opacity: 1;
            }
            .swiper-pagination-bullet-active{
                background: $white-color;
                width: 40px;
                border-radius: 10px;
            }
        }
        .profile-card{
            width: 100%;
            .content{
                padding-bottom: 115.6%;
                background: $white-bg;
                position: relative;
                .info-wrapper{
                    @include absoluteYCenter;
                    width: 100%;
                    height: 85%;
                    @include media(1200px){
                        height: 80%;
                    }
                    @include media(1300px){
                        height: 72%;
                    }
                }
                .user-info{
                    position: absolute;
                    width: 100%;
                    height: 50px;
                    top: 0;
                    .avatar{
                        background-image: url("/imgs/head4.png");
                        background-repeat: no-repeat;
                        background-size: cover;
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        position: absolute;
                        left: 20px;
                        top: 0;
                        z-index: 9;
                    }
                    .greetings{
                        @include absoluteYCenter;
                        font-size: 18px;
                        color: $black-text-two;
                        font-weight: bold;
                        left: 80px;
                    }
                    .get-points{
                        @include absoluteYCenter;
                        color: $color-primary;
                        right: 20px;
                        background: #e9f1fe;
                        padding: 5px 10px;
                        border-radius: 20px;
                        font-size: 14px;
                    }
                }
                .level-points{
                    position: absolute;
                    width: 100%;
                    top: 22%;
                    height: 75px;
                    .icon{
                        width: 19px;
                        height: 19px;
                        display: inline-block;
                        vertical-align: middle;
                    }
                    .label{
                        display: inline-block;
                        vertical-align: middle;
                        font-size: 14px;
                        color: $black-text-two;
                        padding-left: 10px;
                    }
                    .info{
                        color: #999999;
                        margin-top: 10px;
                    }
                    .level{
                        position: relative;
                        width: 50%;
                        display: inline-block;
                        vertical-align: top;
                        text-align: center;
                        .border-right{
                            @include absoluteYCenter;
                            right: 0;
                            width: 1px;
                            height: 60%;
                            border: 1px solid #e6e6e6;
                        }
                    }
                    .points{
                        position: relative;
                        width: 50%;
                        display: inline-block;
                        vertical-align: top;
                        text-align: center;
                    }
                    .border-bottom{
                        position: absolute;
                        width: 100%;
                        bottom: 0;
                        padding: 0 30px;
                        div{
                            border-bottom: 1px solid #e6e6e6;
                        }
                    }
                }
                .activities-hints{
                    position: absolute;
                    width: 100%;
                    top: 53%;
                    height: 75px;
                    padding: 0 30px;
                    .activity{
                        display: inline-block;
                        vertical-align: top;
                        width: 33.33%;
                        text-align: center;
                        .number{
                            color: $color-primary;
                            font-size: 28px;
                        }
                        .text{
                            font-size: 14px;
                            color: $black-text-two;
                        }
                    }
                }
                .send-post{
                    @include absoluteXCenter;
                    background: $color-primary;
                    color: $white-color;
                    bottom: 0;
                    width: 72.25%;
                }

            }
        }
        .tabs{
            background: $white-bg;
            .tabs-buttons{
                height: 65px;
                border-bottom: 1px solid #e6e6e6;
                div{
                    position: relative;
                    padding: 0 25px;
                    display: inline-block;
                    line-height: 65px;
                    cursor: pointer;
                    color: $black-text-two;
                    font-size: 15px;
                    @include media(1200px){
                        font-size: 18px;
                        padding: 0 30px;
                    }
                    &.active-tab{
                        color: #000000;
                        span{
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
        .pagination-wrapper{
            margin-top: 60px;
            text-align: right;
            .pagination{
                width: auto;
                display: inline-block;
                .pre,
                .next{
                    background: $white-bg;
                }
            }
            .total-pages{
                display: inline-block;
                margin-right: 20px;
            }
            .items-per-page{
                display: inline-block;
                margin-left: 20px;
                select{
                    background: #fff;
                    border: 1px solid #E4E7ED;
                    padding: 5px 2px;
                    cursor: pointer;
                }
            }
        }
        .side-box{
            width: 100%;
            margin-bottom: 20px;
            .content{
                background: $white-bg;
                .title{
                    height: 64px;
                    line-height: 64px;
                    border-bottom: 1px solid #e6e6e6;
                    span{
                        border-left: 4px solid $color-primary;
                        padding: 4px 0 4px 20px;
                        color: $black-text-two;
                        font-size: 18px;
                    }
                }
            }
        }
        .topics-list{
            padding: 0 10px 30px 10px;
            @include media(1200px){
                padding: 0 20px 30px 20px;
            }
            .single-topic{
                display: inline-block;
                vertical-align: middle;
                width: 50%;
                margin-top: 30px;
                position: relative;
                .icon{
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    background: #f4f6fa;
                    position: relative;
                    display: inline-block;
                    vertical-align: middle;
                    margin-right: 10px;
                    .doc-icon{
                        @include absoluteCenter;
                        width: 16px;
                        height: 16px;
                        display: inline-block;
                    }
                }
                .topic-name{
                    @include absoluteYCenter;
                    left: 40px;
                    color: #393234;
                }
            }
        }
        .posts-list{
            padding: 0 20px 30px 20px;
            li{
                margin-top: 30px;
                list-style: disc;
                margin-left: 20px;
                a{
                    display: block;
                }
            }
        }
        .contact-us{
            margin-top: 30px;
            margin-left: 20px;
            color: #999999;
        }
    }



</style>
