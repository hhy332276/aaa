<template>
    <div class="school">
        <div class="back">
            <p class="title">{{UniversityCooperationData.title}}</p>
            <p class="subtitle">{{UniversityCooperationData.subtitle}}</p>
            <p class="subtitleone">{{UniversityCooperationData.subtitleone}}</p>
        </div>
        <div v-if="isTopShow" class="showTabs">
            <div class="tabs-buttons">
                <a href="#fertile" @click="switchTab(0)" :class="{'active-tab':activeTab === 0}">
                    {{UniversityCooperationData.firstTab}}
                    <span></span>
                </a>
                <a href="#theory" @click="switchTab(1)" :class="{'active-tab':activeTab === 1}">
                    {{UniversityCooperationData.secondTab}}
                    <span></span>
                </a>
                <a href="#test" @click="switchTab(2)" :class="{'active-tab':activeTab === 2}">
                    {{UniversityCooperationData.thirdTab}}
                    <span></span>
                </a>
                <a href="#computer" @click="switchTab(3)" :class="{'active-tab':activeTab === 3}">
                    {{UniversityCooperationData.fourthTab}}
                    <span></span>
                </a>
            </div>
        </div>
        <div id="searchBar" class="tabs">
            <div class="tabs-buttons">
                <a href="#fertile" @click="switchTab(0)" :class="{'active-tab':activeTab === 0}">
                    {{UniversityCooperationData.firstTab}}
                    <span></span>
                </a>
                <a href="#theory" @click="switchTab(1)" :class="{'active-tab':activeTab === 1}">
                    {{UniversityCooperationData.secondTab}}
                    <span></span>
                </a>
                <a href="#test" @click="switchTab(2)" :class="{'active-tab':activeTab === 2}">
                    {{UniversityCooperationData.thirdTab}}
                    <span></span>
                </a>
                <a href="#computer" @click="switchTab(3)" :class="{'active-tab':activeTab === 3}">
                    {{UniversityCooperationData.fourthTab}}
                    <span></span>
                </a>
            </div>
        </div>
        <div id="fertile" style='position:relative;top:-40px;height:0'></div>
        <div class="fertile">
            <P class="fertiletitle">{{UniversityCooperationData.fertile}}</P>
            <P class="fertilesub">{{UniversityCooperationData.fertilesub}}</P>
            <p class="fertilebtn">
                <button class="fertilebutton">{{UniversityCooperationData.fertilebutton}}</button>
                <a href="https://developer.huaweicloud.com/aiplan" target="_blank">
                    <button class="fertilebuttonone">{{UniversityCooperationData.notYet}}</button>
                </a>

            </p>
            <p class="youcan">{{UniversityCooperationData.youcan}}</p>
        </div>
        <div class="icon">
            <div>
                <img :src="UniversityCooperationData.firstCollegesIcon" alt="">
                <p>{{UniversityCooperationData.firstIcon}}</p>
            </div>
            <div>
                <img :src="UniversityCooperationData.secondCollegesIcon" alt="">
                <p>{{UniversityCooperationData.secondIcon}}</p>
            </div>
            <div>
                <img :src="UniversityCooperationData.thirdCollegesIcon" alt="">
                <p>{{UniversityCooperationData.thirdIcon}}</p>
            </div>
            <div>
                <img :src="UniversityCooperationData.fourthCollegesIcon" alt="">
                <p>{{UniversityCooperationData.fourthIcon}}</p>
            </div>
        </div>
        <div id="theory" style='position:relative;top:-100px;height:0'></div>
        <div class="theory">
            <div class="theorytitle">
                <p class="theorytitleone">{{UniversityCooperationData.theory}}</p>
                <p class="theorytitletwo">{{UniversityCooperationData.theorysub}}</p>
            </div>
            <div class="theorytable">
                <div class="table">
                    <table>
                        <tr class="tabletitle">
                            <td>{{UniversityCooperationData.firstTh}}</td>
                            <td>{{UniversityCooperationData.secondTh}}</td>
                        </tr>
                        <tr>
                            <td><a href="/documentation">{{UniversityCooperationData.theorytd}}</a></td>
                            <td>{{UniversityCooperationData.firsttheory}}<span>{{UniversityCooperationData.look}}</span>  </td>
                        </tr>
                        <tr>
                            <td><a href="/Institute">{{UniversityCooperationData.secondtheory}}</a></td>
                            <td>{{UniversityCooperationData.thirdtheory}}</td>
                        </tr>
                        <tr>
                            <td><a href="https://bbs.huaweicloud.com/forum/forum-726-1.html" target="_blank">{{UniversityCooperationData.sixththeory}}</a></td>
                            <td>{{UniversityCooperationData.sevenththeory}} <span>{{UniversityCooperationData.assist}}</span></td>
                        </tr>
                        <tr>
                            <td>{{UniversityCooperationData.eighththeory}} <span>{{UniversityCooperationData.mailcontact}}</span></td>
                            <td>{{UniversityCooperationData.ninththeory}} <span>{{UniversityCooperationData.curriculum}}</span> </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div id="test" style='position:relative;top:-100px;height:0'></div>
        <div class="test">
            <div class="theorytitle">
                <p class="theorytitleone">{{UniversityCooperationData.build}}</p>
                <p class="theorytitletwo">{{UniversityCooperationData.buildsub}}</p>
            </div>
            <div class="theorytable">
                <div class="table">
                    <table>
                        <tr class="tabletitle">
                            <td>{{UniversityCooperationData.firstTh}}</td>
                            <td>{{UniversityCooperationData.secondTh}}</td>
                        </tr>
                        <tr>
                            <td>{{UniversityCooperationData.firstbuild}}<span>{{UniversityCooperationData.less}}</span></td>
                            <td>{{UniversityCooperationData.secondbuild}} <span>{{UniversityCooperationData.computerRoom}}</span> {{UniversityCooperationData.secondbuilds}}</td>
                        </tr>
                        <tr>
                            <td>{{UniversityCooperationData.thirdbuild}}</td>
                            <td>{{UniversityCooperationData.fourthbuild}}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>{{UniversityCooperationData.fifthbuild}} <span>{{UniversityCooperationData.such}} </span> </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>{{UniversityCooperationData.sixthbuild}} <span>{{UniversityCooperationData.assist}}</span></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div id="computer" style='position:relative;top:-100px;height:0'></div>
        <div class="computer">
            <div class="theorytitle">
                <p class="theorytitleone">{{UniversityCooperationData.computer}}</p>
                <p class="theorytitletwo">{{UniversityCooperationData.computersub}}</p>
            </div>
            <div class="theorytable">
                <div class="table">
                    <table>
                        <tr class="tabletitle">
                            <td>{{UniversityCooperationData.firstTh}}</td>
                            <td>{{UniversityCooperationData.secondTh}}</td>
                        </tr>
                        <tr>
                            <td>{{UniversityCooperationData.firstcomputer}}</td>
                            <td>{{UniversityCooperationData.secondcomputer}}<span>{{UniversityCooperationData.eighthours}}</span>  </td>
                        </tr>
                        <tr>
                            <td>{{UniversityCooperationData.thirdcomputer}}<a href="">{{UniversityCooperationData.thirdcomputers}}</a></td>
                            <td>{{UniversityCooperationData.computertext}}</td>
                        </tr>
                        <tr>
                            <td>{{UniversityCooperationData.fourthcomputer}}</td>
                            <td>{{UniversityCooperationData.fifthcomputer}} </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>{{UniversityCooperationData.sixthcomputer}} <span>{{UniversityCooperationData.assist}}</span></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>{{UniversityCooperationData.seventhcomputer}} <span>{{UniversityCooperationData.interface}}</span> </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div class="achieve">
            <div class="theorytitle">
                <p class="theorytitleone">{{UniversityCooperationData.achievements}}</p>
                <p class="theorytitletwo">{{UniversityCooperationData.achievementsub}}</p>
                <p class="theorytitlethree">{{UniversityCooperationData.secondachievementsub}}</p>
<!--                <p class="achievement">{{school.Firstachievement}} <a>{{school.Secondachievement}}</a></p>-->
                <p class="achievementone">{{UniversityCooperationData.thirdachievement}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import school from "../static_data/school";
    import {eventBus,eventBusActions} from "../event_bus";
    export default {
        name: "universityCooperation",
        data(){
            return{
                activeTab:0,
                schoolJson:school,
                language:'',
                isTopShow:false
            }
        },
        methods: {
            switchTab(index) {
                // this.activeTab = index;
            },
            handleScroll(){
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                let navOffsetTop = document.querySelector('#searchBar').offsetTop;
                let fertileOffset = document.querySelector('#fertile').offsetTop;
                let theoryOffset = document.querySelector('#theory').offsetTop;
                let testOffset = document.querySelector('#test').offsetTop;
                let computerOffset = document.querySelector('#computer').offsetTop;
                if(scrollTop + 60 >= navOffsetTop){
                    this.isTopShow = true
                    if(scrollTop + 100 > computerOffset){
                        this.activeTab = 3
                    } else if(scrollTop + 100 > testOffset){
                        this.activeTab = 2
                    }else if(scrollTop + 100 > theoryOffset){
                        this.activeTab = 1
                    }else if(scrollTop + 100 > fertileOffset){
                        this.activeTab = 0
                    }else{
                        console.log("Waiting for perfect")
                    }
                }else {
                    this.isTopShow = false
                }
            },
        },
        // created(){
        //     this.language = sessionStorage.getItem('lang') ? sessionStorage.getItem('lang'):this.$i18n.locale;
        //     eventBus.$on(eventBusActions.LANGUAGE_CHANGED,(e)=>{
        //         if(e === 'en'){
        //             this.$router.push('/home');
        //             // this.$router.replace("/home");
        //         }
        //         //do something when the language is changed
        //     });
        // },
        computed:{
            UniversityCooperationData(){
                if(this.schoolJson.school[this.$i18n.locale]){
                    return this.schoolJson.school[this.$i18n.locale];
                }
                //return Chinese page if the specific language isn't available
                return this.schoolJson.school["zh"];
            }
        },
        mounted(){
            window.addEventListener('scroll', this.handleScroll)
        },
        destroyed(){
            // eventBus.$off(eventBusActions.LANGUAGE_CHANGED);
            window.removeEventListener('scroll', this.handleScroll)
        }

    }
</script>

<style scoped lang="scss">
    @import "../assets/css/mixins";
    @import "../assets/css/partials";

    .school{
        width: 100%;
        transition: .5s;
        .back{
            max-width: $max-width;
            height: 330px;
            background: url("/imgs/colleges_banner.jpg") no-repeat 100% 100%;
            text-align: center;
            margin: 0 auto;
            color: $white-color;
            padding-top: 50px;
            .title{
                font-size: 30px;
            }
            .subtitle{
                font-size: 14px;
                margin-top: 40px;
            }
            .subtitleone{
                font-size: 14px;
                line-height: 3;
            }
        }
        .tabs,.showTabs{
            height: 65px;
            /*box-shadow: 0px 0px 16px  rgba(0,0,0,0.1);*/
            margin: 0 auto;
            width: 100%;
            border-bottom: 1px solid #e6e6e6;
            .tabs-buttons{
                width: 80%;
                height: 65px;
                margin: 0 auto;
                text-align: center;
                >a{
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
                    &:nth-child(5){
                        margin-left: 50px;
                    }

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
        .showTabs{
            position: fixed;
            top: 55px;
            left: 0;
            width: 100%;
            background: $white-bg;
            z-index: 10;
        }
        .fertile{
            max-width: $max-width;
            margin: 0 auto;
            text-align: center;
            padding-top: 100px;
            .fertiletitle{
                font-size: 28px;
            }
            .fertilesub{
                font-size: 14px;
                color: $black-text-two;
                margin-top: 30px;
            }
            .fertilebtn{
                margin-top: 30px;
                .fertilebutton,.fertilebuttonone{
                    width: 180px;
                    height: 40px;
                    padding: 0;
                    font-size: 14px;
                    background: $color-primary;
                    color: $white-color;

                }
                .fertilebutton{
                    @include secondButtonStyle;
                }
                .fertilebuttonone{
                    background: $white-color;
                    color: $color-primary;
                    margin-left: 40px;
                    @include buttonStyle;

                }
            }
            .youcan{
                margin-top: 30px;
            }

        }
        .icon{
            max-width: 1366px;
            margin: 0 auto;
            display: flex;
            padding:40px 0px 60px;
            text-align: center;
            div{
                /*display: inline-block;*/
                width: 25%;
                text-align: center;
                /*&:nth-child(2),*/
                /*&:nth-child(3),*/
                /*&:nth-child(4){*/
                /*    margin-left: 13%;*/
                /*}*/
                p{
                    margin-top: 20px;
                    font-size: 14px;
                    color: $black-text-two;
                }
            }
        }
        .theory{
            width: 100%;
            background: $gray-site-bg-color;
            text-align: center;
            padding:40px 0px 60px 0px;
            .theorytitle{
                max-width: 1005px;
                margin: 0 auto;
                padding-bottom: 40px;
                .theorytitleone{
                    font-size: 28px;
                }
                .theorytitletwo{
                    margin-top: 20px;
                    font-size: 14px;
                    color: $black-text-two;
                    line-height: 2;
                }
            }
            .theorytable{
                max-width: 1180px;
                margin: 0 auto;
                text-align: left;
                display: flex;
                .table{
                    width: 100%;
                    table{
                        width: 100%;
                        font-size: 14px;
                        tr{
                            border: 1px solid #d2d2d2;
                            height: 60px;
                            background: $white-bg;
                            td{
                                max-width: 410px;
                                padding-left: 50px;
                                span{
                                    color: #999999;
                                }
                            }
                            a{
                                color: $color-primary;
                            }
                        }
                        .tabletitle{
                            background: #e5e8e9;
                            font-size: 22px;
                            color: $black-text-two;
                        }

                    }
                }

            }
        }
        .test{
            width: 100%;
            background: $white-color;
            text-align: center;
            padding:40px 0px 60px 0px;
            .theorytitle{
                max-width: 1005px;
                margin: 0 auto;
                padding-bottom: 40px;
                .theorytitleone{
                    font-size: 28px;
                }
                .theorytitletwo{
                    margin-top: 20px;
                    font-size: 14px;
                    color: $black-text-two;
                    line-height: 2;
                }
            }
            .theorytable{
                max-width: 1180px;
                margin: 0 auto;
                text-align: left;
                display: flex;
                .table{
                    width: 100%;
                    table{
                        width: 100%;
                        font-size: 14px;
                        tr{
                            border: 1px solid #d2d2d2;
                            height: 60px;
                            background: $white-bg;
                            td{
                                padding-left: 50px;
                                max-width: 410px;
                                span{
                                    color: #999999;
                                }
                            }
                            a{
                                color: $color-primary;
                            }
                        }
                        .tabletitle{
                            background: #e5e8e9;
                            font-size: 22px;
                            color: $black-text-two;
                        }

                    }
                }

            }
        }
        .computer{
            width: 100%;
            background: $gray-site-bg-color;
            text-align: center;
            padding:40px 0px 60px 0px;
            .theorytitle{
                max-width: 1005px;
                margin: 0 auto;
                padding-bottom: 40px;
                .theorytitleone{
                    font-size: 28px;
                }
                .theorytitletwo{
                    margin-top: 20px;
                    font-size: 14px;
                    color: $black-text-two;
                    line-height: 2;
                }
            }
            .theorytable{
                max-width: 1180px;
                margin: 0 auto;
                text-align: left;
                display: flex;
                .table{
                    width: 100%;
                    table{
                        width: 100%;
                        font-size: 14px;
                        tr{
                            border: 1px solid #d2d2d2;
                            height: 60px;
                            background: $white-bg;
                            td{
                                max-width: 410px;
                                padding-left: 50px;
                                span{
                                    color: #999999;
                                }
                            }
                            a{
                                color: $color-primary;
                            }
                        }
                        .tabletitle{
                            background: #e5e8e9;
                            font-size: 22px;
                            color: $black-text-two;
                        }

                    }
                }

            }
        }
        .achieve{
            width: 100%;
            background: $white-color;
            text-align: center;
            padding:40px 0px 60px 0px;
            .theorytitle{
                max-width: 1005px;
                margin: 0 auto;
                padding-bottom: 40px;
                .theorytitleone{
                    font-size: 28px;
                }
                .theorytitletwo,.theorytitlethree{
                    margin-top: 20px;
                    font-size: 14px;
                    color: $black-text-two;
                    line-height: 2;
                    text-align: left;
                }
                .achievement{
                    text-align: left;
                    margin-top: 40px;
                    font-size: 14px;
                    color: $black-text-two;
                    line-height: 2;
                    a{
                        color: $color-primary;
                        margin-left: 50px;
                    }

                }
                .achievementone{
                    margin-top: 20px;
                    text-align: left;
                }
            }
            .img{
                max-width: 1180px;
                margin: 0 auto;
                text-align: center;
                display: flex;
                div{
                    &:nth-child(2),
                    &:nth-child(3),
                    &:nth-child(4){
                        margin-left: 1.694%;

                    }
                    p{
                        margin-top: 30px;
                        font-size: 18px;
                        color: $black-text-two;
                    }
                }
            }
        }

    }
    .showStyle{
        margin-bottom: 65px;
    }
</style>
