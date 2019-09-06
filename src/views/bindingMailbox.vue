<template>
    <div class="mailbox-wrap">
        <div class="container">
            <div class="mailbox-content">
                <h1>{{$t('bindingMailbox')}}</h1>
                <div class="content">
                    <p><span>原注册邮箱</span><span></span></p>
                    <p><span>新注册邮箱</span><input v-model="input" placeholder="请输入邮箱" class="el-input"></input></p>
                    <p><span>邮箱验证码</span><input v-model="input" placeholder="请输入邮箱验证码" class="code-input"></input><button class="code-button" @click="Obtain()">获取验证码</button></p>
                    <button class="complete">完成</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components:{
        },
        data(){
            return {
                input: ''
            }
        },
        methods:{
            Obtain(){
                http.post("user/sendEmailCode",{"lang":this.docParams.language,
                    "email":this.docParams.productId}).then((res)=>{
                    if(constants.responseCode.SUCCESS === res.code){
                        this.versions = res.data;
                    }
                }).catch((err)=>{

                });
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/css/mixins";
    @import "../assets/css/partials";

    .mailbox-wrap{
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
            .mailbox-content{
                text-align: center;
                padding-top: 84px;
                h1{
                    font-size: 28px;
                }
                .content{
                    max-width: 510px;
                    margin: 0 auto;
                    text-align: left;
                    color: #393a3c;
                    p{
                        margin-top: 30px;
                        .el-input,.code-input{
                            width: 80.392%;
                            height: 36px;
                            border: 1px solid #999999;
                            margin-left: 5.882%;
                            border-radius: 2px;
                            padding-left: 10px;
                        }
                        .code-input{
                            width: 49.01%;
                        }
                        .code-button{
                            width: 29.411%;
                            height: 36px;
                            padding: 0;
                            display: inline-block;
                            border-radius: 2px;
                            margin-left: 1.96%;
                            border: 1px solid #999999;
                            color: #393a3c;
                        }
                    }
                    .complete{
                        width:100%;
                        height: 40px;
                        background: #3D88FF;
                        color: #fff;
                        margin-top: 30px;
                    }

                }
            }
        }
    }

</style>
