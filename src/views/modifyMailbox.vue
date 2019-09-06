<template>
    <div class="mailbox-wrap">
        <div class="container">
            <div class="mailbox-content">
                <h1>{{$t('bindingMailbox')}}</h1>
                <div class="content">
                    <div class="img">
                        <img src="/imgs/success.png" alt="">
                    </div>
                    <h2>修改注册邮箱成功！</h2>
                    <p>账号名：<span></span></p>
                    <p>绑定邮箱：<span></span></p>
                    <p class="countdown"> 秒后自动关闭</p>
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
                    max-width: 400px;
                    margin: 0 auto;
                    text-align: left;
                    color: #393a3c;
                    font-size: 14px;
                    .img{
                        text-align: center;
                        padding-top: 80px;
                    }
                    h2{
                        text-align: center;
                        font-size: 24px;
                        color: #393a3c;
                        padding-top: 30px;
                    }
                    p{
                        margin-top: 30px;
                    }
                    .countdown{
                        text-align: center;
                        color: #999999;
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
