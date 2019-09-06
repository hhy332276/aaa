<template>
    <div class="outline-margin">
        <div class="modifyEmail">
            <span class="modify-email-title">修改邮箱</span>

            <div class="modify-email-content">
                <div class="modify-email" v-show="step===1">
                    <div class="email-message">
                        <span class="original-email">原注册邮箱</span>
                        <span class="new-email">新注册邮箱</span>
                        <span class="input-email-code">邮箱验证码</span>
                    </div>
                    <div class="email-authentication">
                        <span>{{email|dealEmail}}</span>
                        <div class="emailInput">
                            <input name="newEmail" type="text" placeholder="     请输入邮箱" v-model="newEmail" @input="inputEmail">
                            <p v-show="emailTips!==''">*{{emailTips}}</p>
                        </div>
                        <div class="email-code">
                            <input name="emailVerificationCode" type="text" placeholder="     请输入邮箱验证码" v-model="emailVerificationCode" @input="inputCode">
                            <button type="button" :disabled="emailCodeDisabled" @click="sendEmailCode" class="btns">{{emailBtnText}}</button>
                            <p v-show="codeTips!==''">*{{codeTips}}</p>
                        </div>
                    </div>
                    <button type="button" @click="checkedAndNext" class="btns next-btn">下一步</button>
                </div>

                <div class="modify-completed" v-show="step===2">
                    <div class="complete-sign">
                        <img src="/imgs/success.png" alt="completed logo">
                    </div>
                    <div class="complete-message">
                        <span>恭喜修改注册邮箱成功 ！</span>
                        <div class="message-title">
                            <span>账号名：</span>
                            <span>绑定邮箱：</span>
                        </div>
                        <div class="message-content">
                            <span>{{accountName}}</span>
                            <span>{{newEmail|dealNewEmail}}</span>
                        </div>
                        <span class="count-down">
                            {{closeWebText}}
                        </span>
                    </div>
                    <button type="button" :disabled="completeDisabled" @click="this.$router.push('/basicInformation')" class="btns next-btn">完成</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import http from "../utils/axiosConfig";
    import {constants} from "../../public/static/index";
    export default {
        name: "modifyEmail",
        data(){
            return {
                time:0,
                step:1,
                accountName:"",
                email:"",
                emailBtnText:"获取邮箱验证码",
                closeWebText:"5秒后自动关闭",
                emailCodeDisabled:false,
                completeDisabled:true,
                newEmail:"",
                emailVerificationCode:"",
                emailTips:"",
                codeTips:"",
                userInformation:''
            }
        },
        filters:{
            dealEmail: function (value) {
                if(!value){
                    console.log("error! 用户未绑定邮箱，邮箱为空");
                    return ""
                }else{
                    value = value.toString();
                    return value.substr(0,3)+"****"+value.substr(7);
                }
            },
            dealNewEmail: function (value) {
                if(!value){
                    return ""
                }else{
                    value = value.toString();
                    return value.substr(0,3)+"****"+value.substr(7);
                }
            }
        },
        created() {
            var users = this.$cookies.get('user')
            if(users == null){
                this.$router.push('/home');
            }
            console.log(this.$route.params.email);
            console.log(this.$route.params.nickname);
            this.email = this.$route.params.email;
            this.accountName = this.$route.params.nickname
        },
        methods:{
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
            // 实现倒计时关闭网页功能
            webTimer() {
                if (this.time > 1) {
                    this.time--;
                    this.closeWebText=this.time+"秒后自动关闭";
                    setTimeout(this.webTimer, 1000);
                } else{
                    this.time=0;
                    this.closeWebText="";
                    this.$router.push('/basicInformation')
                }
            },
            inputEmail(){
                if(this.newEmail!==''){
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
                    if(this.newEmail===''){
                        console.log("error! 邮箱未输入");
                        this.emailTips = "邮箱未输入"
                    }else if(!regEmail.test(this.newEmail)){
                        console.log("error! 邮箱格式不正确");
                        this.emailTips = "邮箱格式不正确"
                    }else if(this.newEmail===this.email){
                        console.log("error! 新注册的邮箱不应该和原邮箱相同");
                        this.emailTips = "新注册的邮箱不应该和原邮箱相同"
                    }else{
                        http.post("console/user/sendEmailCode",{"email":this.newEmail}).then((res)=>{
                            if(constants.responseCode.SUCCESS === res.code){
                                this.time=60;
                                this.emailCodeDisabled=true;
                                this.codeTimer();
                                this.codeTips = ""
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
                    this.codeTips = "验证码输入错误";
                    return false
                }else if(!rule.test(code)){
                    console.log("error! 验证码格式错误");
                    this.codeTips = "验证码输入错误";
                    return false
                }else{
                    return true
                }
            },
            // 验证邮箱验证码
            checkedAndNext(){
                let email_code = this.emailVerificationCode;
                let check_email_code = this.checkCode(email_code);
                if(check_email_code){
                    http.post("console/user/checkEmailCode",{"email":this.newEmail,"emailCode":this.emailVerificationCode}).then((res)=>{
                        if(constants.responseCode.SUCCESS === res.code){
                            setTimeout(()=>{
                                http.post("console/user/updateEmail",{"email":this.newEmail}).then((res)=>{
                                    if(constants.responseCode.SUCCESS === res.code){
                                        this.step = 2;
                                        this.time=5;
                                        this.webTimer();
                                    }else {
                                        this.$message.error('修改邮箱失败');
                                    }
                                }).catch(()=>{
                                    console.log("error! 修改邮箱失败")
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
        },
        computed:{

        },
        mounted(){

        },

    }
</script>

<style lang="scss" scoped>
    @import "../assets/css/mixins";
    @import "../assets/css/partials";
    .outline-margin {
        width:100%;
        height: 100%;
        background: #eef0f4;
        position:relative;
        .modifyEmail{
            width:85%;
            height:769px;
            margin:10px auto 0;
            background: #ffffff;
            padding-top:84px;
            text-align: center;
            .modify-email-title {
                font-size: 28px;
                color: #393a3c;
            }

            .modify-email-content {
                .modify-email {
                    margin:84px auto 0;
                    button{
                        display: block;
                        margin:auto;
                    }
                    .email-message{
                        display:inline-block;
                        .original-email {
                            display: block;
                            font-size: 14px;
                            color: #393a3c;
                            margin-bottom: 30px;
                            height:36px;
                            line-height: 36px;
                        }
                        .new-email {
                            display: block;
                            font-size: 14px;
                            color: #393a3c;
                            margin-bottom: 30px;
                            height:36px;
                            line-height: 36px;
                        }
                        .input-email-code{
                            display: block;
                            font-size: 14px;
                            color: #393a3c;
                            height:36px;
                            line-height: 36px;
                        }
                    }
                    .email-authentication{
                        display: inline-block;
                        margin-left:30px;
                        span{
                            display: block;
                            margin-bottom: 30px;
                            text-align: left;
                            font-size: 14px;
                            color: #393a3c;
                            height:36px;
                            line-height: 36px;
                        }
                        .emailInput{
                            display: block;
                            input {
                                display: inline-block;
                                margin-bottom: 30px;
                                border:1px solid #e5e5e5;
                                border-radius: 2px;
                                height:36px;
                                width:410px;
                            }
                            p{
                                position: absolute;
                                line-height: 36px;
                                display: inline-block;
                                margin-left:5px;
                                font-size:14px;
                                color:#FF0000
                            }
                        }
                        .email-code {
                            display: block;
                            width:410px;
                            input {
                                display: inline-block;
                                height:36px;
                                border:1px solid #e5e5e5;
                                border-radius: 2px;
                                width:200px;
                            }
                            button {
                                margin-left:10px;
                                display: inline-block;
                                font-size: 14px;
                                color: #393a3c;
                                border:1px solid #393a3c;
                                width:200px;
                            }
                            p{
                                position: absolute;
                                line-height: 36px;
                                display: inline-block;
                                margin-left:5px;
                                font-size:14px;
                                color:#FF0000
                            }
                        }
                    }
                    .next-btn {
                        margin:30px auto;
                        width:510px;
                        height:40px;
                        background: #3d88ff;
                        font-size:14px;
                        color:#ffffff;
                        border-radius: 2px;
                    }
                }
                .modify-completed {
                    margin:84px auto 0;
                    .complete-sign {
                        margin:auto;
                        display: block;
                        width:50px;
                        height:50px;
                        border-radius:25px;
                        overflow: hidden;
                    }
                    .complete-message {
                        display: block;
                        margin:30px auto 0;
                        span{
                            display: block;
                            font-size: 24px;
                            color: #393a3c;
                            margin-bottom: 30px;
                        }
                        .message-title{
                            display: inline-block;
                            span{
                                display: block;
                                text-align: left;
                                font-size: 14px;
                                color: #393a3c;
                            }
                        }
                        .message-content{
                            display: inline-block;
                            margin-left:30px;
                            span{
                                display: block;
                                text-align: left;
                                font-size: 14px;
                                color: #393a3c;
                            }
                        }
                        .count-down{
                            display: block;
                            font-size: 14px;
                            color:#999999;
                        }
                    }
                    .next-btn{
                        margin:0 auto;
                        width:400px;
                        height:40px;
                        background: #3d88ff;
                        font-size:14px;
                        color:#ffffff;
                        border-radius: 2px;
                    }
                }
            }
        }
    }


</style>
