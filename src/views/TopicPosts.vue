<template>
    <div class="topic-post">
        <BreadCrumb :data="breadcrumb" :maxWidth="'1366px'"/>

        <div class="topic-wrapper">
            <div class="basic-info">
                <div class="avatar"></div>
                <div class="secondary-info">
                    <div class="description-wrapper">
                        <div class="title">{{topic.title}}</div>
                        <div class="description">
                            <div class="cont">
                                <div class="label">{{$t("topicIntro")}}</div>
                                <div class="info">机器学习服务介绍，服务公告，使用教程，问题求助，用户故事，优化建议收集机器学习服务介绍，</div>
                            </div>
                            <div class="cont">
                                <div class="label">{{$t("topicOwner")}}</div>
                                <div class="info">
                                    <div class="single-owner">
                                        <div class="profile-img"></div>
                                        <div class="name">小石头</div>
                                    </div>
                                    <div class="single-owner">
                                        <div class="profile-img"></div>
                                        <div class="name">风雨同舟</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="statistics">
                            <div class="data bordered">
                                <div class="label">{{$t('todayUpdates')}}</div>
                                <div class="info">99999</div>
                            </div>
                            <div class="data bordered">
                                <div class="label">{{$t('totalTopics')}}</div>
                                <div class="info">99999</div>
                            </div>
                            <div class="data bordered">
                                <div class="label">{{$t('totalPosts')}}</div>
                                <div class="info">99999</div>
                            </div>
                            <div class="data">
                                <div class="label">
                                    <span v-show="isLiked">
                                        <SVGIcon class="star-icon" :width="'28px'" :height="'28px'" icon="favorite-filled"/>
                                    </span>
                                    <span v-show="!isLiked">
                                        <SVGIcon class="star-icon" :width="'28px'" :height="'28px'" icon="favorite-blank"/>
                                    </span>
                                </div>
                                <div class="label">{{$t("favoriteThisPost")}}</div>
                            </div>
                            <div class="data">
                                <router-link class="button" to="/">{{$t("sendTopic")}}</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="tab-wrapper">
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
                    <SinglePost :post="post"  :key="index" v-for="(post,index) in oldPosts"/>
                </div>

                <!--hot-->

                <div v-show="activeTab === 1" class="tab-content">
                    <SinglePost v-if="post.isSticky" :post="post"  :key="index" v-for="(post,index) in oldPosts"/>
                </div>




                <!--recommended-->
                <div v-show="activeTab === 2" class="tab-content">
                    <SinglePost v-if="post.isPerfectRecommendation" :post="post"  :key="index" v-for="(post,index) in oldPosts"/>
                </div>



            </div>

            <!--pagination-->
            <div class="pagination-wrapper">
                <Pagination class="pagination"/>
            </div>

        </div>


    </div>
</template>

<script>
    import BreadCrumb from "../components/BreadCrumb";
    import SVGIcon from "../components/SVGIcon";
    import SinglePost from "../components/SinglePost";
    import Pagination from "../components/paging";
    export default {
        name: "Post",
        components:{
            BreadCrumb,
            SVGIcon,
            SinglePost,
            Pagination
        },
        data(){
            return {
                isLiked:false,
                activeTab:0,
                topic:{
                    title:"Atlas 200 DK",
                },
                breadcrumb:[
                    {
                        "titleKey":"forum",
                        "link":"/forum"
                    },
                    {
                        "title":"Atlas 200 DK",
                    }
                ],
                oldPosts:[
                    {
                        createTime: "2019-06-05 14:59:11",
                        forumId: 2,
                        forumSectionId: 2,
                        forumSectionName: "Atlas 300",
                        forumType: "1",
                        icon: "http://122.112.148.247/file/test.jpg",
                        isTop: true,
                        lastCommentTime: "2019-06-05 14:59:11",
                        nickname: "hhd",
                        replyCount: 7,
                        title: "我要发帖zilalalalala",
                        viewCount: 0
                    },
                    {
                        createTime: "2019-06-05 14:59:11",
                        forumId: 2,
                        forumSectionId: 2,
                        forumSectionName: "Atlas 300",
                        forumType: "1",
                        icon: "http://122.112.148.247/file/test.jpg",
                        isTop: true,
                        lastCommentTime: "2019-06-05 14:59:11",
                        nickname: "hhd",
                        replyCount: 7,
                        title: "我要发帖zilalalalala",
                        viewCount: 0
                    },
                    {
                        createTime: "2019-06-05 14:59:11",
                        forumId: 2,
                        forumSectionId: 2,
                        forumSectionName: "Atlas 300",
                        forumType: "1",
                        icon: "http://122.112.148.247/file/test.jpg",
                        isTop: true,
                        lastCommentTime: "2019-06-05 14:59:11",
                        nickname: "hhd",
                        replyCount: 7,
                        title: "我要发帖zilalalalala",
                        viewCount: 0
                    },
                    {
                        createTime: "2019-06-05 14:59:11",
                        forumId: 2,
                        forumSectionId: 2,
                        forumSectionName: "Atlas 300",
                        forumType: "1",
                        icon: "http://122.112.148.247/file/test.jpg",
                        isTop: true,
                        lastCommentTime: "2019-06-05 14:59:11",
                        nickname: "hhd",
                        replyCount: 7,
                        title: "我要发帖zilalalalala",
                        viewCount: 0
                    }

                ],
            }
        },
        methods:{
            switchTab(index){
                this.activeTab = index;
            }
        },
        created(){
            //dynamically add the topic name on the breadcrumb
            if(this.$route.params.topicName){
                if(this.breadcrumb.length > 1){
                    //this.breadcrumb[1].title = this.$route.params.topicName;
                    //this.topic.title = this.$route.params.topicName;
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/css/mixins";
    @import "../assets/css/partials";
    .topic-post{
        background: $gray-site-bg-color;
        .topic-wrapper{
            max-width: 1366px;
            margin: 0 auto;
            padding-top: 75px;
            padding-bottom: 20px;
            .basic-info{
                background: $white-bg;
                padding: 35px 20px 50px 20px;
                position: relative;
                .avatar{
                    position: absolute;
                    left: 20px;
                    width: 100px;
                    height: 100px;
                    background-image: url("/imgs/at.png");
                    background-repeat: no-repeat;
                    background-size: 100%;
                }
                .secondary-info{
                    padding-left: 120px;
                    .title{
                        font-size: 18px;
                        color: $black-text-two;
                        font-weight: bold;
                    }
                    .description-wrapper{
                        .description{
                            display: inline-block;
                            width: 42.5%;
                            vertical-align: top;
                            .cont{
                                position: relative;
                                margin-top: 5px;
                                .label{
                                    position: absolute;
                                    top: 0;
                                    width: 75px;
                                    text-align: right;
                                }
                                .info{
                                    display: inline-block;
                                    width: 100%;
                                    padding-left: 85px;
                                    padding-right: 20px;
                                    .single-owner{
                                        margin-right: 30px;
                                        display: inline-block;
                                        .profile-img{
                                            width: 22px;
                                            height: 22px;
                                            display: inline-block;
                                            vertical-align: middle;
                                            background-image: url("/imgs/head5.png");
                                            margin-right: 10px;
                                        }
                                        .name{
                                            display: inline-block;
                                            vertical-align: middle;
                                        }
                                    }
                                }
                            }
                        }
                        .statistics{
                            width: 57.5%;
                            display: inline-block;
                            vertical-align: top;
                            .data{
                                width: 20%;
                                display: inline-block;
                                vertical-align: middle;
                                text-align: center;
                                .label{
                                    font-size: 14px;
                                    color: #393a3c;
                                }
                                .info{
                                    font-size: 18px;
                                    color: $color-primary;
                                }
                                a{
                                    display: block;
                                    color: $white-color;
                                    background: $color-primary;
                                    padding: 0;

                                }
                            }
                            .bordered{
                                border-left: 1px solid #e6e6e6;
                                &:nth-child(3){
                                    border-right: 1px solid #e6e6e6;
                                }
                            }
                            .star-icon{
                                width: 28px;
                                height: 28px;
                                display: inline-block;
                                &:hover{
                                    cursor: pointer;
                                }
                            }
                        }
                    }
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
        .tab-wrapper{
            max-width: 1366px;
            margin: 0 auto;
            .pagination-wrapper{
                padding: 60px 0;
            }
        }
    }
</style>
