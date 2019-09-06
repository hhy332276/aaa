<template>
    <div class="material-wrap">
        <div class="container">
            <div class="material-content">
                <h2 class="material-title">{{$t('perfectionMaterial')}}</h2>
                <div class="material-head clear">
                    <p class="left material-text">{{$t('headPortrait')}}：</p>
                    <div class="head-img left">
                        <img :src="imgUrl" alt="">
                    </div>
                    <div class="head-text right">
                        <div class="information-text" @click="userAuto('userauto')">
                            {{$t('uploadImg')}}
                        </div>
                    </div>
                </div>
                <div class="material-username">
                    <p class="material-text">{{$t('nickname')}}： </p>
                    <div class="material-input">
                        <input type="text" v-model="nickName" placeholder="     请输入用户昵称" name="nickName">
                    </div>
                </div>
                <div class="material-emil">
                    <p class="material-text">{{$t('eMail')}}： </p>
                    <div class="material-input">
                        <input type="text" placeholder="     请输入邮箱" v-model="Email" name="Email" @input="inputEmail">
                    </div>
                    <p v-show="emailTips!==''">*{{emailTips}}</p>
                    <div class="material-star">
                        *
                    </div>
                </div>
                <div class="material-verificationCode">
                    <p class="material-text">{{$t('verificationCode')}}:</p>
                    <div class="material-input">
                        <input type="text" name="emailVerificationCode" placeholder="     请输入邮箱验证码" v-model="emailVerificationCode" @input="inputCode">
                        <button class="code-button" :disabled="emailCodeDisabled" @click="sendEmailCode">{{emailBtnText}}</button>
                        <p v-show="codeTips!==''">*{{codeTips}}</p>
                    </div>
                    <div class="material-star">
                        *
                    </div>
                </div>
                <div class="material-button">
                    <button @click="saveAndNext">{{$t('save')}}</button>
                </div>
                <div class="bottom-hint clear">
                    <div class="bottom-left left">
                        <input id="checkbox" type="checkbox"/>
                        <el-checkbox v-model="checked">{{$t('NoLongerRemind')}}</el-checkbox>
<!--                        <label for="checkbox">-->
<!--                            <span></span>-->
<!--                            <span>{{$t('NoLongerRemind')}}</span>-->
<!--                        </label>-->
                    </div>
                    <router-link to="/home" class="bottom-right right">
                        {{$t('jumpOver')}}
                    </router-link>
                </div>
            </div>
        </div>
        <ReplaceYourPortrait :onChangeNum="closeWindows" :num="a"  v-if="isUserImg" @newImgUrl="childByValue"></ReplaceYourPortrait>
        <!--        <div class="wxsmallcode-page publicCon">-->
        <!--            <div class="copyBox">-->
        <!--                sysAppId：<span>{{sysAppIds}}</span>-->
        <!--                <el-button class="ml10" type="text" size="medium"-->
        <!--                           v-clipboard:copy="sysAppIds"-->
        <!--                           v-clipboard:success="onCopy"-->
        <!--                           v-clipboard:error="onError">点击复制</el-button>-->
        <!--            </div>-->
        <!--        </div>-->
    </div>
</template>

<script>
    import http from "../utils/axiosConfig";
    import {constants} from "../../public/static/index";
    import ReplaceYourPortrait from  "../components/ReplaceYourPortrait"
    export default {
        name: "perfectionMaterial",
        components: {
            ReplaceYourPortrait
        },
        data() {
            return {
                imgUrl: "/imgs/people.jpg",
                ckeckVal: true,
                sysAppIds: 'xxxxxxxxxxxsx',
                time:0,
                emailBtnText:"获取邮箱验证码",
                emailCodeDisabled:false,
                emailTips:"",
                codeTips:"",
                Email:"",
                nickName:"",
                emailVerificationCode:"",
                checked: false,
                isUserImg:false,
                a:5,
            }
        },
        watch:{
            checked:function (val) {
                this.checked = val;
                sessionStorage.setItem("checked",this.checked)
            }
        },
        created(){
            var user = this.$cookies.get('user');
            if(user == null){
                this.$router.push('/home');
            }
            let userCheck = user.flag;
            let check = sessionStorage.getItem("checked");
            console.log(userCheck);
            console.log(check);
            if(userCheck=="1"){
                this.$router.push("/home")
            }else{
                if(check == null){
                    this.checked = false
                }else {
                    this.checked = check;
                }
                if(this.checked){
                    this.$router.push("/home")
                }
            }
            console.log(this.checked);
        },
        methods: {
            childByValue(usertext){
                this.imgUrl = usertext
            },
            userAuto(parameter){
                switch(parameter) {
                    case 'userauto':
                        this.isUserImg =!this.isUserImg;
                        break;
                    default:
                        默认代码块
                }
            },
            closeWindows( userbo){
                this.isUserImg = false;
            },
            // 实现邮箱验证码的倒计时功能
            codeTimer() {
                if (this.time > 1) {
                    this.time--;
                    this.emailBtnText=this.time+"s后重新获取";
                    setTimeout(this.codeTimer, 1000);
                } else{
                    this.time=0;
                    this.emailBtnText="获取邮箱验证码";
                    this.emailCodeDisabled=false;
                }
            },
            inputEmail(){
                if(this.Email!==''){
                    this.emailTips = ""
                }
            },
            inputCode(){
                if(this.emailVerificationCode !==''){
                    this.codeTips = ""
                }
            },
            // 邮箱验证
            sendEmailCode(){
                if(this.time!==0){
                    console.log("error! 60秒内不可重复获取邮箱验证码")
                }else{
                    let regEmail= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
                    if(this.Email===''){
                        console.log("error! 邮箱未输入");
                        this.emailTips = "邮箱未输入"
                    }else if(!regEmail.test(this.Email)){
                        console.log("error! 邮箱格式不正确");
                        this.emailTips = "邮箱格式不正确"
                    }else{
                        console.log(this.Email);
                        http.post("console/user/sendEmailCode",{"email":this.Email}).then((res)=>{
                            if(constants.responseCode.SUCCESS === res.code){
                                this.time=60;
                                this.emailCodeDisabled=true;
                                this.codeTimer();
                                this.codeTips = "";
                            }else{
                                console.log("获取验证码失败")
                            }
                        }).catch(()=>{
                            console.log("获取验证码失败")
                        })
                    }
                }
            },
            // 验证验证码格式是否正确
            checkCode(code){
                let rule = /^\+?[1-9][0-9]*$/;
                if(code===""){
                    console.log("error! 未输入验证码");
                    this.codeTips = "未输入验证码";
                    return false
                }else if(code.length!==7){
                    console.log("error! 验证码长度错误");
                    this.codeTips = "验证码长度错误";
                    return false
                }else if(!rule.test(code)){
                    console.log("error! 验证码格式错误");
                    this.codeTips = "验证码格式错误";
                    return false
                }else{
                    return true
                }
            },
            // 验证邮箱验证码
            saveAndNext(){
                var user = this.$cookies.get('user');
                if(user.flag=="0"){
                    var orignal_url = this.$cookies.get("redirectUrl");
                }
                console.log(user);
                let email_code = this.emailVerificationCode;
                let check_email_code = this.checkCode(email_code);
                if(check_email_code){
                    http.post("console/user/checkEmailCode",{"email":this.Email,"emailCode":this.emailVerificationCode}).then((res)=>{
                        if(constants.responseCode.SUCCESS === res.code){
                            setTimeout(()=>{
                                http.post("console/user/updateUser",{"nickname":this.nickName,"email":this.Email,"userId":user.userId,"icon":this.imgUrl}).then((res)=>{
                                    if(constants.responseCode.SUCCESS === res.code){
                                        if(orignal_url.indexOf("ResourceDownload")!==-1){
                                            this.$router.push(orignal_url)
                                        }else{
                                            this.$router.push('/basicInformation')
                                        }
                                    }else{
                                        console.log("error! 保存用户资料失败")
                                    }
                                }).catch(()=>{
                                    console.log("error! 保存用户资料失败")
                                })
                            }, 1000)
                        }else{
                            console.log("error! 验证验证码失败");
                            this.codeTips = "验证码输入错误";
                        }
                    }).catch(()=>{
                        console.log("error! 验证验证码失败")
                    })
                }else{
                    console.log("error! 邮箱验证码错误")
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/css/mixins";
    @import "../assets/css/partials";

    .material-wrap {
        width: 100vw;
        height: calc(100vh - 115px);
        background: $gray-site-bg-color;
        padding-top: 65px;
        min-height: 530px;

        .container {
            max-width: 1366px;
            margin: 0 auto;
            background: #FFFFFF;
            width: 100%;
            height: 100%;

            .material-content {
                max-width: 510px;
                margin: 0 auto;
                padding-top: 40px;

                .material-title {
                    margin-bottom: 45px;
                    font-size: 28px;
                    color: $black-text-three;
                    text-align: center;
                    font-weight: 500;
                }

                > div {
                    div, p {
                        display: inline-block;
                    }

                    > p {
                        font-size: 14px;
                        color: #666666;
                    }

                    .material-input {
                        width: 83%;
                        margin-left: 30px;

                        input {
                            height: 36px;
                            width: 100%;
                            border: 1px solid #e5e5e5;
                        }
                    }
                }

                .material-head {
                    height: 50px;
                    width: 100%;
                    margin-bottom: 30px;

                    p {
                        line-height: 50px;
                    }

                    .head-text {
                        line-height: 50px;
                        color: $color-primary;
                        cursor: pointer;
                    }

                    .head-img {
                        display: inline-block;
                        width: 50px;
                        height: 50px;
                        margin-left: 30px;
                        border-radius: 50%;
                        overflow: hidden;
                        border: 1px solid #b8b8b8;
                        text-align: center;

                        /*img {*/
                        /*    display: inline-block;*/
                        /*    margin-top: 10px;*/
                        /*    width: 50%;*/
                        /*    height: 50%;*/
                        /*}*/
                    }
                }

                .material-username {
                    margin-bottom: 30px;
                    .material-text{
                        width: 10%;
                    }
                }

                .material-emil {
                    margin-bottom: 40px;
                    position: relative;
                    .material-text{
                        width: 10%;
                    }
                    .material-star {
                        position: absolute;
                        top: 6px;
                        left: -16px;
                        color: red;
                        font-size: 20px;
                    }
                }

                .material-verificationCode {
                    margin-bottom: 40px;
                    position: relative;
                    .material-text{
                        width: 10%;
                    }
                    .material-star {
                        position: absolute;
                        top: 0;
                        left: -16px;
                        color: red;
                        font-size: 20px;
                    }
                    .material-input{
                        position: absolute;
                        width: 50%;
                        .code-button {
                            width: 15%;
                            position: absolute;
                            padding: 0;
                            margin-left: 50px;
                        }
                    }

                }

                .material-button {
                    width: 100%;
                    height: 40px;

                    button {
                        width: 100%;
                        height: 100%;
                        border: none;
                        background: $color-primary;
                        color: $white-color;
                        border-radius: 3px;
                    }
                }

                .bottom-hint {
                    margin-top: 20px;

                    .bottom-left {
                        span {
                            color: #666666;
                            font-size: 14px;
                        }

                        input {
                            display: none;
                        }

                        label span {
                            display: inline-block;
                        }

                        label span:first-child {
                            width: 10px;
                            height: 10px;
                            background-color: #000;
                        }

                        /*input:checked + label > span:first-child {*/
                        /*    background-color: red;*/
                        /*}*/
                    }

                    .bottom-right {
                        cursor: pointer;
                        color: $color-primary;
                        font-size: 14px;
                    }
                }
            }
        }
    }

    .left {
        float: left;
    }

    .right {
        float: right;
    }

    .clear {
        overflow: hidden;
    }

</style>
