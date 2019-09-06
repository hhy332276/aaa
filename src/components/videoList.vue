<template>
    <div class="video-list">
        <div class="videos-grid" v-if="isPopout">
            <div :key="index" v-for="(video,index) in collegesData" @click="viewMedia(index)" class="single-video">
                <div :to="'/Institute/individualCourses/' + index">
                    <div class="thumbnail-container">
                        <div class="thumbnail">
                            <img :src="video.imgUrl" alt="">
                            <div class="colleges-icon-wrap">
                                <SVGIcon class="colleges-icon" height="78px" icon="play" width="78px"></SVGIcon>
                            </div>
                        </div>
                        <div class="views">
                            <div class="video-title">{{video.title}}</div>
                        </div>
                    </div>
                    <div class="description">
                        <p :title="video.description" class="videos-descript-text">
                            {{video.description}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="videos-grid" v-if="isAtlas">
            <div :key="index" v-for="(video,index) in collegesData" class="single-video">
                <router-link :to="'/Course/' + index">
                    <div class="thumbnail-container">
                        <div class="thumbnail">
                            <img :src="video.imgUrl" alt="">
                            <div class="colleges-icon-wrap">
                                <SVGIcon class="colleges-icon" height="78px" icon="play" width="78px"></SVGIcon>
                            </div>
                        </div>
                        <div class="views">
                            <div class="video-title">{{video.title}}</div>
                        </div>
                    </div>
                    <div class="description">
                        <p :title="video.description" class="videos-descript-text">
                            {{video.description}}
                        </p>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="videos-grid" v-if="isOnline">
            <div :key="index" v-for="(video,index) in collegesData" class="single-video">
                <router-link :to="'/Institute/individualCourses/' + index">
                    <div class="thumbnail-container">
                        <div class="thumbnail">
                            <img :src="video.imgUrl" alt="">
                            <div class="colleges-icon-wrap">
                                <SVGIcon class="colleges-icon" height="78px" icon="play" width="78px"></SVGIcon>
                            </div>
                        </div>
                        <div class="views">
                            <div class="video-title">{{video.title}}</div>
                        </div>
                    </div>
                    <div class="description">
                        <p :title="video.description" class="videos-descript-text">
                            {{video.description}}
                        </p>
                    </div>
                </router-link>
            </div>
        </div>
        <!--Media player-->
        <div class="overlay" v-if="shouldShowMedia">
            <MediaPlayer :onCloseMedia="closeMediaPlayer" :data="allVideo" :autoplay="true"/>
        </div>
    </div>
</template>

<script>
    import SVGIcon from "../components/SVGIcon";
    import MediaPlayer from "../components/MediaPlayer";
    export default {
        props:{
            collegesData:{
                required:true
            },
            isPopout:{
                required:false
            },
            isAtlas:{
                required:false
            },
            isOnline:{
                required:false
            }
        },
        name: "videoList",
        components:{
            SVGIcon,
            MediaPlayer
        },
        data(){
            return {
                shouldShowMedia:false,
                mediaItemIndex:0,
            }
        },
        methods:{
            viewMedia(index){
                this.mediaItemIndex = index;
                console.log("index>>>>",index);
                this.shouldShowMedia = true;
            },
            closeMediaPlayer(){
                this.shouldShowMedia = false;
            },
        },
        computed: {
            allVideo(){
                console.log(this.mediaItemIndex);
                console.log(this.collegesData);
                return this.collegesData[this.mediaItemIndex]
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/css/mixins";
    @import "../assets/css/partials";
    /*摘出来的 video列表 */
    .video-list{
        .videos-grid{
            margin: 0 auto;
            max-width: 1480px;
            .single-video{
                margin-bottom: 25px;
                display: inline-block;
                vertical-align: top;
                width: 23.986%;
                margin-right: 1.352%;
                cursor: pointer;
                &:nth-child(4n){
                    margin-right: 0;
                }
                .thumbnail-container{
                    width: 100%;
                    .thumbnail{
                        width: 100%;
                        position: relative;
                        img{
                            width: 100%;
                        }
                        .colleges-icon-wrap{
                            position: absolute;
                            top: 50%;
                            left: 0;
                            width: 100%;
                            transform: translateY(-50%);
                            .colleges-icon{
                                margin: 0 auto;
                                width: 78px;
                                height: 78px;
                            }
                        }
                    }
                    .views{
                        color: $white-color;
                        height: 44px;
                        line-height: 44px;
                        .video-title{
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow:ellipsis;
                            padding: 0 14px;
                        }
                    }
                }
                .description{
                    padding: 15px 14px;
                    color: #39383c;
                    height: 74px;
                    .videos-descript-text{
                        line-height: 22px;
                        height: 44px;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        /*设置成弹性盒子 */
                        display: -webkit-box;
                        /*显示的个数 */
                        -webkit-line-clamp: 2;
                        /* 属性规定框的子元素应该被水平或垂直排列。 */
                        -webkit-box-orient: vertical;
                    }
                }
                &:nth-child(4n-3){
                    .views{
                        background: linear-gradient(90deg, #3593ff, #5172e5);
                    }
                }
                &:nth-child(4n-2){
                    .views{
                        background: linear-gradient(90deg, #4964e7, #42b1ea);
                    }
                }
                &:nth-child(4n-1){
                    .views{
                        background: linear-gradient(90deg, #2bcadc, #35a0ff);
                    }
                }
                &:nth-child(4n){
                    .views{
                        background: linear-gradient(90deg, #516be5, #3593ff);
                    }
                }
            }
        }
        .overlay{
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
            .images-slides{
                @include absoluteCenter;
                width: 90%;
                max-width: 1180px;
            }
        }
    }

</style>
