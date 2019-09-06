<template>
    <div class="curriculum" v-if="this.index !==2">
        <div class="collegesBanner">
            <div class="back">
                <div class="back-top-content">
                    <BreadCrumb :data="breadcrumb" :maxWidth="'1180px'" class="bread"/>
                    <p class="back-title">{{collegesData.title}}</p>
                </div>
            </div>
        </div>
        <div class="abstract safe-distance">
            <h3 class="abstitle">{{collegesData.details.textTitle}}</h3>
            <h4 class="summary">{{collegesData.details.topText}}</h4>
            <ul v-if="collegesData.details.topList">
                <li class="abstext" v-for="list in collegesData.details.topList">{{list}}</li>
            </ul>
            <h4 class="knowledge">{{collegesData.details.bottomText}}</h4>
            <ul v-if="collegesData.details.bottomList.length !== 0" class="abstext-wrap">
                <li class="abstext" v-for="list in collegesData.details.bottomList">
                    {{list}}
                </li>
            </ul>
        </div>
        <div class="video">
            <div class="video-center">
                <div class="video-img">
                    <MediaPlayer class="individual-video" :data="collegesData" :autoplay="true"/>
                </div>
            </div>
        </div>
    </div>

    <div class="course" v-else>
        <div class="container">
            <div class="course_content" style='min-height:484px'>
                <div class='navigation'>
                    <router-link to="/Institute"><span>{{$t('Institute')}}</span></router-link>
                    > <span style='color:#606266'>{{$t('titleFrom')}}</span>
                </div>
                <template>
                    <el-tabs v-model="activeName">
                        <el-tab-pane :label="$t('courseTitle')" name="first">
                            <div class="abstract safe-distance">
                                <h2 class="abstitle">{{$t('abstract')}}</h2>
                                <p class="summary">{{$t('abstractCon_1')}}</p>
                                <p class="knowledge">{{$t('abstractCon_2')}}</p>
                                <ul class="abstext-wrap">
                                    <li class="abstext">
                                        {{$t('abstractCon_3')}}
                                    </li>
                                    <li class="abstext">
                                        {{$t('abstractCon_4')}}
                                    </li>
                                </ul>
                            </div>
                            <div class="course-wrapper">
                                <div class="left-part">
                                    <h2 class="abstitle" style='margin-bottom:10px;padding-left:10px;'>
                                        {{$t('outline')}}</h2>
                                    <el-tree :data="data" node-key="id" ref='tree' :props="defaultProps" :key="treeKey"
                                             current-node-key :highlight-current="true"
                                             @node-click="handleNodeClick"></el-tree>
                                </div>
                                <div class="right-part">
                                    <div class="video">
                                        <div class="video-center">
                                            <div class="video-img" style='min-height:450px'>
                                                <MediaPlayer class="individual-video" v-if="hackReset"
                                                             :data="videosData" :close="true" :autoplay="false"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="margin-bottom: 10px;"><span v-show="videosData.docUrl!==''">本教程相关文档：</span><a :href="videosData.docUrl" :class="[videosData.docUrl==''? noneDocUrlStyle:hasDocUrlStyle]" target="_blank">{{videosData.docText}}</a></div>
                                    <div>
                                        <el-button plain :disabled="this.int==0" @click="pre">上一个</el-button>
                                        <el-button plain :disabled="this.int==26" @click="next">下一个</el-button>
                                    </div>
                                </div>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
    import http from "../utils/axiosConfig";
    import colleges from "../static_data/colleges";
    import MediaPlayer from "../components/MediaPlayer";
    import CollegesBanner from "../components/CollegesBanner";
    import BreadCrumb from "../components/BreadCrumb";

    export default {
        name: "resource",
        components: {
            MediaPlayer,
            CollegesBanner,
            BreadCrumb,
        },
        data() {
            return {
                int: 0,
                videosData: '',
                allColleges: colleges,
                activeName: 'first',
                data: this.$t('treeData'),
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                hackReset: true,
                treeKey: '',
                index: 0,
                breadcrumb: [
                    {
                        "titleKey": "Institute",
                        "link": "/Institute"
                    },
                    {
                        title: "",
                    }
                ],
                docTitle:"",
                docUrl:"",
                hasDocUrlStyle:"has_doc_url_style",
                noneDocUrlStyle:"none_doc_url_style"
            };
        },
        created() {
            if (this.$i18n.locale == 'zh') {
                this.lang = 'zh'
            }
            if (this.$i18n.locale == 'en') {
                this.lang = 'en'
            }

            this.videosData = this.allColleges.colleges[this.lang].learningVideos[this.int];
            this.videosDataLength = this.allColleges.colleges[this.lang].learningVideos.length
            this.videosDataArr = this.allColleges.colleges[this.lang].learningVideos
            if (isNaN(parseInt(this.$route.params.index))) {
                this.index = 0;
            } else {
                if (parseInt(this.$route.params.index) > colleges.colleges.zh.learningVideosMsg.length) {
                    this.index = colleges.colleges.zh.learningVideosMsg.length - 1;
                } else {
                    this.index = parseInt(this.$route.params.index)
                }
            }
            this.numindex()
        },
        mounted() {
            if(this.index===2){
                this.$nextTick(function () {
                    this.$data.data.forEach(row => {
                        if (row.id == 0) {
                            this.$refs.tree.setCurrentKey(row.id);
                            this.$refs.tree.store.nodesMap[row.id].expanded = true;
                        }
                    })
                })
            }

        },
        computed: {
            collegesData() {
                try {
                    if (this.allColleges.colleges[this.$i18n.locale]) {
                        return this.allColleges.colleges[this.$i18n.locale].learningVideosMsg[this.index];
                    }
                    //return Chinese page if the specific language isn't available
                    console.log(this.allColleges.colleges["zh"].learningVideosMsg[this.index])
                    return this.allColleges.colleges["zh"].learningVideosMsg[this.index];
                } catch (e) {
                    console.log("computed", e)
                }
            }
        },
        methods: {
            numindex: function () {
                this.breadcrumb[1].title = this.collegesData.title
            },
            handleNodeClick(data) {
                var arr = this.allColleges.colleges[this.lang].learningVideos
                arr.forEach((element, index) => {
                    if (element.id === data.id) {
                        this.hackReset = false
                        this.int = element.id
                        this.videosData = element;
                        this.$nextTick(() => {
                            this.hackReset = true
                        })
                    }
                });
            },
            pre() {
                if (this.int >= 0) {
                    this.hackReset = false
                    this.int--
                    for (let i = 0; i < this.$data.data.length; i++) {
                        var row = this.$data.data
                        if (row[i].id == this.int) {
                            if (row[i].children) {
                                this.int -= 1
                                var videos = this.allColleges.colleges[this.lang].learningVideos
                                this.$refs.tree.setCurrentKey(row[i].id - 1);
                                if (row[i - 1].id == 0) {
                                    this.videosData = videos[0]
                                    this.$nextTick(() => {
                                        this.hackReset = true
                                    })
                                    return false
                                }
                                if (row[(i - 1)].children) {
                                    var pre = row[i].id - (row[(i - 1)].children.length + 1)
                                    this.$refs.tree.store.nodesMap[pre].expanded = true;
                                }
                                //视频播放顺寻
                                videos.forEach(ele => {
                                    if (ele.id == (row[i].id - 1)) {
                                        this.videosData = ele
                                    }
                                })
                                this.$nextTick(() => {
                                    this.hackReset = true
                                })
                                return false
                            } else {
                                var videos = this.allColleges.colleges[this.lang].learningVideos
                                this.$refs.tree.setCurrentKey(row[i].id);
                                if (row[i].id == 0) {
                                    this.videosData = videos[0]
                                    this.$nextTick(() => {
                                        this.hackReset = true
                                    })
                                    return false
                                }
                                if (row[(i)].children) {
                                    var pre = row[i + 1].id - (row[(i)].children.length + 1)
                                    this.$refs.tree.store.nodesMap[pre].expanded = true;
                                }
                                //视频播放顺寻
                                videos.forEach(ele => {
                                    if (ele.id == (row[i].id)) {
                                        this.videosData = ele
                                    }
                                })
                                this.$nextTick(() => {
                                    this.hackReset = true
                                })
                                return false
                            }
                        } else {
                            if (row[i].children) {
                                for (let j = 0; j < row[i].children.length; j++) {
                                    if (row[i].children[j].id == this.int) {
                                        var id = row[i].children[j].id
                                        this.$refs.tree.setCurrentKey(id);
                                        //视频播放顺寻
                                        var videos = this.allColleges.colleges[this.lang].learningVideos
                                        videos.forEach(ele => {
                                            if (ele.id == (row[i].children[j].id)) {
                                                this.videosData = ele
                                            }
                                        })
                                        this.$nextTick(() => {
                                            this.hackReset = true
                                        })
                                        return false
                                    }
                                }
                            }
                        }
                    }
                }
            },
            next() {
                if (this.int <= 26) {
                    this.hackReset = false
                    this.int++
                    for (let i = 0; i < this.$data.data.length; i++) {
                        var row = this.$data.data
                        if (row[i].id == this.int) {
                            if (row[i].children) {
                                this.int += 1
                                this.$refs.tree.setCurrentKey(row[i].id + 1);
                                this.$refs.tree.store.nodesMap[row[i].id].expanded = true;
                                //视频播放顺寻
                                var videos = this.allColleges.colleges[this.lang].learningVideos
                                videos.forEach(ele => {
                                    if (ele.id == (row[i].id + 1)) {
                                        this.videosData = ele
                                    }
                                })
                                this.$nextTick(() => {
                                    this.hackReset = true
                                })
                                return false
                            } else {
                                this.$refs.tree.setCurrentKey(row[i].id);
                                this.$refs.tree.store.nodesMap[row[i].id].expanded = true;
                                //视频播放顺寻
                                var videos = this.allColleges.colleges[this.lang].learningVideos
                                videos.forEach(ele => {
                                    if (ele.id == (row[i].id)) {
                                        this.videosData = ele
                                    }
                                })
                                this.$nextTick(() => {
                                    this.hackReset = true
                                })
                                return false
                            }
                        } else {
                            if (row[i].children) {
                                for (let j = 0; j < row[i].children.length; j++) {
                                    if (row[i].children[j].id == this.int) {
                                        var id = row[i].children[j].id
                                        this.$refs.tree.setCurrentKey(id);
                                        //视频播放顺寻
                                        var videos = this.allColleges.colleges[this.lang].learningVideos
                                        videos.forEach(ele => {
                                            if (ele.id == (row[i].children[j].id)) {
                                                this.videosData = ele
                                            }
                                        })
                                        this.$nextTick(() => {
                                            this.hackReset = true
                                        })
                                        return false
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
</script>
<style lang="scss">
    @import "../assets/css/mixins";
    @import "../assets/css/partials";

    .curriculum {
        width: 100%;

        .back {
            max-width: $max-width;
            height: 180px;
            width: 100%;
            background: url("/imgs/IndividualCourses-banner.png") no-repeat;
            background-size: 100% 100%;
            text-align: center;
            margin: 0 auto;

            .back-top-content {
                max-width: 1180px;
                margin: 0 auto;

                .bread {
                    width: 100%;
                    line-height: 64px;
                    text-align: left;
                    font-size: 18px;
                    border-bottom: 0px;
                    background: rgba(0, 0, 0, 0);
                    position: static;
                }

                .back-title {
                    font-size: 30px;
                }

                .back-text {
                    font-size: 14px;
                    margin-top: 25px;
                }
            }

        }

        .abstract {
            max-width: 1180px;
            margin: 0 auto;
            padding: 60px 20px;

            .abstitle {
                font-size: 28px;
            }

            .summary {
                font-size: 18px;
                color: $black-text-two;
                margin-top: 25px;
            }

            ul {
                padding: 0 20px;
                margin: 0;

                li {
                    list-style: disc;
                }
            }

            .abstext {
                font-size: 14px;
                color: $black-text-three;
                margin-top: 10px;
            }

            .knowledge {
                font-size: 18px;
                margin-top: 35px;
            }
        }

        .video {
            width: 100%;
            background: $gray-site-bg-color;
            padding: 0 20px;

            .video-center {
                max-width: 1180px;
                padding: 60px 0;
                margin: 0 auto;

                .video-img {
                    width: 100%;

                    img {
                        width: 100%;
                    }

                    .individual-video {
                        width: 100%;

                        .close-btn {
                            display: none;
                        }
                    }
                }
            }

        }
    }

    .course {
        .el-tabs__item.is-active {
            color: #000000;
        }

        .navigation {
            padding: 15px 0 15px 0;
            margin: 10px 0 10px;
            border-bottom: 1px solid #EBEEF5;

            span {
                color: #3d88ff;
            }
        }

        .course_content {
            max-width: 1280px;
            margin: 0 auto;
        }

        h2.abstitle {
            font-size: 22px;
            color: #000000;
            font-weight: 500;
            margin-bottom: 20px;
        }

        .abstract {
            padding: 30px 30px;
            border: 1px solid #EBEEF5;
            color: #393a3c;
            font-size: 14px;
            line-height: 25px;
        }

        .el-tabs__item {
            padding: 0 30px;
            font-weight: 500;
            font-size: 18px;
            text-align: center;
            width: 90px;
        }

        .el-tabs__active-bar {
            width: 68px;
            height: 0;
        }

        .el-tabs__header {
            margin: 0;
        }

        ul {
            margin-top: 0;
        }

        ul.abstext-wrap {
            padding-left: 20px;
        }

        ul li {
            list-style: disc
        }

        .course-wrapper {
            display: flex;
            padding: 45px 0 50px;

            .left-part {
                width: 425px;
                max-height: 485px;
                margin-right: 45px;
                background: #f5f9ff;
                padding: 20px;
                overflow-y: auto;
                overflow-x: auto;

                .el-tree {
                    background: #f5f9ff;
                }

                .el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content {
                    color: #3d88ff;
                }
            }

            .right-part {
                width: 1000px;
                .has_doc_url_style{
                    color: $color-primary !important;
                }
                .none_doc_url_style{
                    cursor: default;
                    pointer-events:none;
                    color: #000000;
                }
            }
        }
    }
</style>