<template>
    <div class="list-item">
        <div class="post-info">
            <div class="title-wrapper">
                <img v-if="post.isTop" src="/imgs/ding.png" class="icon"/>
                <router-link  to="/forum/postDetails" class="title">{{post.title}}</router-link>
                <!--1:精华帖 2:推荐帖 3:普通帖-->
                <img v-if="post.forumType.indexOf(1) >= 0" src="/imgs/jing.png" class="icon"/>
                <img v-if="post.forumType.indexOf(2) >= 0" src="/imgs/tui.png" class="icon"/>
            </div>
            <div class="primary-info">
                <div class="name">{{post.nickname}}</div>
                <div class="time">{{post.createTime}}</div>
                <router-link :to="'/forum/topic/'+post.forumSectionId" class="tag">{{post.forumSectionName}}</router-link>

                <div class="secondary-info">
                    <div class="views">
                        <SVGIcon class="icon" width="24px" height="15px" icon="eye"/>
                        <div>{{post.viewCount}}</div>
                    </div>
                    <router-link to="/" class="comments">
                        <SVGIcon class="icon" width="23px" height="19px" icon="comment-bubble"/>
                        <div>{{post.replyCount}}</div>
                    </router-link>
                </div>
            </div>
        </div>
        <!--avatar-->
        <div class="avatar" :style="{'background-image':'url('+post.icon+')'}"></div>
    </div>
</template>

<script>
    import SVGIcon from "./SVGIcon";
    export default {
        name: "SinglePost",
        components:{
            SVGIcon
        },
        props:{
            post:{
                required: true,
                type: Object
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/css/mixins";
    @import "../assets/css/partials";
    .list-item{
        border-bottom: 1px solid #e6e6e6;
        position: relative;
        &:last-child{
            border-bottom-color: rgba(0,0,0,0);
        }
        .avatar{
            position: absolute;
            top: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-size: cover;
            background-repeat: no-repeat;
            left: 20px;
        }
        .post-info{
            padding-left: 90px;
            width: 100%;
            padding-top: 25px;
            padding-bottom: 25px;
            .title-wrapper{
                img{
                    display: inline-block;
                    vertical-align: middle;
                    margin-right: 10px;
                }
                .title{
                    display: inline-block;
                    vertical-align: middle;
                    margin-right: 10px;
                    color: $black-text-two;
                    max-height: 44px;
                    overflow: hidden;
                }
            }
            .primary-info{
                margin-top: 20px;
                position: relative;
                .name{
                    color: $color-primary;
                    margin-right: 5px;
                    display: inline-block;
                    vertical-align: middle;
                }
            }
            .time{
                display: inline-block;
                vertical-align: middle;
                color: $black-text-two;
            }
            .tag{
                display: inline-block;
                vertical-align: middle;
                margin-left: 50px;
                text-align: center;
                font-size: 14px;
                color: #7b7e87 !important;
                background: #f0f1f6;
                padding: 6px 14px;
                border-radius: 2px;
            }
            .secondary-info{
                @include absoluteYCenter;
                right: 20px;
                .views,
                .comments{
                    display: inline-block;
                    vertical-align: middle;
                    div,
                    a{
                        display: inline-block;
                        vertical-align: middle;
                        color: #999999;
                    }
                }
                .views{
                    margin-right: 30px;
                    .icon{
                        width: 24px;
                        height: 15px;
                        margin-right: 10px;
                    }
                }
                .comments{
                    cursor: pointer;
                    .icon{
                        width: 23px;
                        height: 19px;
                        margin-right: 10px;
                        .bubble{
                            path{
                                fill: #999999 !important;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
