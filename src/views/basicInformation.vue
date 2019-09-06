<template>
    <div class="information-wrap">
        <div class="container">
<!--            <div class="information-left">-->
<!--                <Switchover :user="data.user"></Switchover>-->
<!--            </div>-->
            <div class="information-right">
                <h2 class="information-title">
                    {{$t('basicInformation')}}
                </h2>
                <div class="information-auto">
                    <p>{{$t('headPortrait')}}：</p>
                    <div class="information-content">
                        <div class="information-img">
                            <img :src="usertext.icon" alt="">
                        </div>
                    </div>
                    <div class="information-text" @click="userAuto('userauto')">
                        {{$t('uploadImg')}}
                    </div>
                </div>
                <div class="information-nickname">
                    <p>{{$t('nickname')}}：</p>
                    <div class="information-content">
                        <input v-if="isNickname" type="text" v-model="usertext.nickname">
                        <p v-else>{{usertext.nickname}}</p>
                    </div>
                    <div class="information-text" @click="userAuto('nickname')">
                        {{$t('update')}}
                    </div>
                </div>
                <div class="information-emil">
                    <p>{{$t('eMail')}}：</p>
                    <div class="information-content">
<!--                        <input v-if="isEmil" type="text" v-model="usertext.email">-->
                        <input v-model="usertext.email">
                    </div>
                    <div class="information-text"  @click="userAuto('emil')">
                        <router-link :to="'/ModifyEmail/' + this.usertext.nickname + '/' + this.usertext.email" class="information-text"
                        >{{$t('bindEmail')}}</router-link>
                    </div>
                </div>
                <div class="information-button">
                    <button @click="preservation()">
                        {{$t('saveSetting')}}
                    </button>
                </div>
            </div>
        </div>
        <ReplaceYourPortrait :onChangeNum="closeWindows" :num="a"  v-if="isUserImg" @newImgUrl="childByValue"></ReplaceYourPortrait>
    </div>
</template>

<script>
    import Switchover from "../components/switchover";
    import data from "../static_data/resource";
    import ReplaceYourPortrait from  "../components/ReplaceYourPortrait"
    import http from "../utils/axiosConfig";
    import {constants} from "../../public/static/index";
    export default {
        name:"basicInformation",
        components:{
            Switchover,
            ReplaceYourPortrait
        },
        data(){
            return {
                a:5,
                data:data,
                usertext:{},
                user:{
                    nickname:data.user.nickname,
                    userImg:data.user.userImg,
                    emil: data.user.emil == '' ? "未绑定邮箱" : data.user.emil
                },
                isUserImg:false,
                isNickname:false,
                isEmil:false,
                users:""
            }
        },
        created() {
            var users = this.$cookies.get('user')
            if(users == null){
                this.$router.push('/home');
            }
            console.log(users);
            http.post("console/user/selectUserDetail",{"userId":users.userId}).then((res)=>{
                if(constants.responseCode.SUCCESS === res.code){
                    this.usertext = res.data;
                    console.log(this.usertext)
                }
            }).catch((err)=>{

            });
        },
        methods:{
            childByValue(usertext){
                this.usertext.icon = usertext
            },
            updateNum(num){
                console.log("a:"+this.a)
                this.a = num;
            },
            userAuto(parameter){
                switch(parameter) {
                    case 'userauto':
                        this.isUserImg =!this.isUserImg;
                        break;
                    case 'nickname':
                        this.isNickname = !this.isNickname;
                        break;
                    case 'emil':
                        this.isEmil = !this.isEmil;
                        break;
                    default:
                        默认代码块

                }
            },
            closeWindows( userbo){
                this.isUserImg = false;
            },

            preservation(){
                var users = this.$cookies.get('user')
                console.log(this.usertext.nickname)
                http.post("console/user/updateUser",{"userId":users.userId,"nickname":this.usertext.nickname,"email":this.usertext.email,"icon":this.usertext.icon}).then((res)=>{
                    if(constants.responseCode.SUCCESS === res.code){
                        this.usertext = res.data;
                        this.$message({
                            message: ("修改成功"),
                            type: 'success'
                        });
                        // setTimeout(function(){window.location.reload();},2000)
                        for(var start = +new Date;+new Date - start<2000;){history.go(0)}

                    }else {
                        this.$message.error(res.msg);
                        // while(true)  if(new Date().getTime()-start > 2000) history.go(0);
                        for(var start = +new Date;+new Date - start<2000;){history.go(0)}
                    }
                }).catch((err)=>{

                });

            }


        },
        watch:{
            breadcrumbTitle:function (val) {
                this.breadcrumb[1].title = val;
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/css/mixins";
    @import "../assets/css/partials";
    .information-wrap{
        height: calc(100vh - 115px);
        padding-top: 65px;
        background: $gray-site-bg-color;
        min-height: 550px;
        .container{
            max-width: 1366px;
            margin: 0 auto;
            width:100%;
            height: 100%;
            overflow: hidden;
            >div{
                background: $white-bg;
            }
            .information-left{
                float: left;
                width: 21.962%;
                height: 100%;
            }
            .information-right{
                padding: 2.197%;
                /*float: right;*/
                /*width: 77.379%;*/
                height: 100%;
                .information-title{
                    font-size: 20px;
                    color: $black-text-three;
                    border-bottom: 1px solid #e6e6e6;
                    padding-bottom: 30px;
                    font-weight: 500;
                }
                >div{
                    margin-top: 30px;
                    p,div{
                        display: inline-block;
                    }
                    >p{
                        font-size: 14px;
                        color: #666666;
                    }
                    .information-content{
                        width: 300px;
                        margin: 0 30px;
                        input,p{
                            padding: 0 20px;
                            width: 100%;
                        }
                    }
                    .information-text{
                        color: $color-primary;
                        cursor: pointer;
                    }
                }
                .information-auto{
                    .information-content{
                        height: 50px;
                    }
                    >div,p{
                        line-height: 50px;
                    }
                    .information-img{
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        img{
                            width: 100%;
                            height: 100%;
                            border: 1px solid #cccccc;
                        }
                    }
                }
                .information-nickname{
                    .information-content{
                        height: 30px;
                        input,p{
                            border: 1px solid #e5e5e5;
                            height: 30px;
                            line-height: 30px;
                            border-radius: 2px;
                        }
                        p{
                            /*height: 28px;*/
                            line-height: 28px;
                        }
                    }
                    >div,p{
                        line-height: 30px;
                    }
                }
                .information-emil{
                    height: 30px;
                    .information-content{
                        p{
                            /*color: #f66f6a;*/
                        }
                        input{
                            border: 1px solid #e5e5e5;
                        }
                        p,input{
                            height: 30px;
                            line-height: 30px;
                            border-radius: 2px;
                        }
                    }
                    >div,p{
                        line-height: 30px;
                    }
                }
                .information-button{
                    margin-top: 100px;
                    button{
                        width: 120px;
                        height: 36px;
                        line-height: 36px;
                        border: none;
                        padding: 0;
                        color: $white-color;
                        background: $color-primary;
                    }
                }
            }
        }
    }
    .left{
        float: left;
    }
    .right{
        float: right;
    }
    .clear{
        overflow: hidden;
    }
</style>
