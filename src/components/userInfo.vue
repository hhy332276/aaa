<template>
    <div class="individual-resume" :style="{'width':maxWidth}">
        <div class="individual-resume-img">
            <img :src="user.img" alt>
        </div>
        <p class="individual-username">{{user.name}}</p>
        <p class="individual-grade">{{$t('level')}}：{{user.grade}}</p>
        <div class="individual-resume-bottom">
            <div class="individual-resume-title">
                <div v-for="item in indivdualTitle">
                    <p>{{item.num}}</p>
                    <p>{{item.title}}</p>
                </div>
            </div>
            <div class="individual-resume-buttom">
                <div class="individual-attention">+{{$t('following')}}</div>
                <div class="individual-send-messege">{{$t('sendMessage')}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            user:{
                required:true
            },
            indivdualTitle:{
                required: true,
                type: Array
            },
            maxWidth:{
                required:true
            }
        },
        name: "BreadCrumb"
    }
</script>

<style scoped lang="scss">
    @import "../assets/css/mixins";
    @import "../assets/css/partials";
    /*摘出来的 用户 */
    .individual-resume {
        max-width: 230px;
        float: left;
        .individual-resume-img {
            width: 90px;
            height: 90px;
            border-radius: 50%;
            margin: 30px auto 0;
            img {
                width: 100%;
                height: 100%;
            }
        }
        > p {
            color: #393a3c;
            text-align: center;
        }
        .individual-username {
            font-size: 14px;
            margin: 15px 0;
        }
        .individual-grade {
            font-size: 12px;
            margin-bottom: 15px;
        }
        .individual-resume-bottom {
            padding: 0 13.044%;
            .individual-resume-title {
                overflow: hidden;
                > div {
                    float: left;
                    width: 33%;
                    > p:first-child {
                        font-size: 18px;
                        color: $color-primary;
                        margin-bottom: 15px;
                    }
                    > p {
                        font-size: 14px;
                        color: #999999;
                    }
                }
                > div:nth-child(1) {
                    > p {
                        text-align: left;
                    }
                }
                > div:nth-child(2) {
                    > p {
                        text-align: center;
                    }
                }
                > div:nth-child(3) {
                    > p {
                        text-align: right;
                    }
                }
            }
            .individual-resume-buttom {
                overflow: hidden;
                margin-top: 30px;
                > div {
                    width: 47.123%;
                    height: 28px;
                    line-height: 28px;
                    border-radius: 2px;
                    padding: 0px;
                    text-align: center;
                }
                .individual-attention {
                    float: left;
                    background: $color-primary;
                    color: $white-bg;
                }
                .individual-send-messege {
                    float: right;
                    border: 1px solid $color-primary;
                    color: $color-primary;
                }
            }
        }
    }
</style>
