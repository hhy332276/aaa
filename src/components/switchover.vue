<template>
    <div class="switchover">
        <div class="switchover-top">
            <div class="switchover-user-img">
                <img :src="usertext.icon" alt="">
            </div>
            <p class="switchover-nickname">
                {{user.nickname}}
            </p>
<!--            <div class="switchover-num-wrap">-->
<!--                <p class="switchover-attention">-->
<!--                    {{$t('following')}} ：{{user.attention}}-->
<!--                </p>-->
<!--                <p class="switchover-fansNum">-->
<!--                    {{$t('followers')}} ：{{user.fansNum}}-->
<!--                </p>-->
<!--            </div>-->
            <div class="user-button">
                <p>
                    {{$t('editorialMaterial')}}
                </p>
            </div>
        </div>
<!--        <ul class="switchover-list">-->
<!--            <li>-->
<!--                <router-link to="/" class="comments">-->
<!--                    <SVGIcon class="icon" width="16px" height="16px" icon="invitation"/>-->
<!--                    <div>{{$t('myPost')}}</div>-->
<!--                </router-link>-->
<!--            </li>-->
<!--            <li>-->
<!--                <router-link to="/" class="comments">-->
<!--                    <SVGIcon class="icon" width="16px" height="16px" icon="love"/>-->
<!--                    <div>{{$t('myCollection')}}</div>-->
<!--                </router-link>-->
<!--            </li>-->
<!--            <li>-->
<!--                <router-link to="/" class="comments">-->
<!--                    <SVGIcon class="icon" width="16px" height="16px" icon="attention"/>-->
<!--                    <div>{{$t('myAttention')}}</div>-->
<!--                </router-link>-->
<!--            </li>-->
<!--            <li>-->
<!--                <router-link to="/" class="comments">-->
<!--                    <SVGIcon class="icon" width="16px" height="16px" icon="comment-bubble"/>-->
<!--                    <div>{{$t('myMessage')}}</div>-->
<!--                </router-link>-->
<!--            </li>-->
<!--        </ul>-->
    </div>
</template>

<script>
    import SVGIcon from "../components/SVGIcon"
    import http from "../utils/axiosConfig";
    import {constants} from "../../public/static/index";
    export default {
        name:"switchover",
        props:{
            user:{
                required:true
            }
        },
        data(){
            return {
                usertext:{},
            }
        },
        components:{
            SVGIcon
        },
        created() {
            // var user = this.$cookies.get('user')
            // console.log(user);
            http.post("console/user/selectUserDetail",{"userId":this.user.userId}).then((res)=>{
                if(constants.responseCode.SUCCESS === res.code){
                    this.usertext = res.data;
                    console.log(this.usertext)
                }
            }).catch((err)=>{

            });
        },
    }
</script>

<style scoped lang="scss">
    @import "../assets/css/mixins";
    @import "../assets/css/partials";
    .switchover-top{
        color: $black-text-three;
        border-bottom: 1px solid #e6e6e6;
        >p{
            text-align: center;
        }
        .switchover-user-img{
            width: 90px;
            height: 90px;
            border-radius: 50%;
            margin: 30px auto 20px;
            overflow: hidden;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .switchover-nickname{
            margin-bottom: 15px;
            font-size: 20px;

        }
        .switchover-num-wrap{
            margin-bottom: 16px;
            >p{
                font-size: 14px;
                display: inline-block;
                width: 50%;
            }
            .switchover-attention{
                text-align: right;
                padding-right: 10px;
                position: relative;
                &:after{
                    content:"";
                    width: 1px;
                    height: 16px;
                    position: absolute;
                    background: #cccccc;
                    top: 9%;
                    right: 0;

                }
            }
            .switchover-fansNum{
                text-align: left;
                padding-left: 10px;
            }
        }
        .user-button{
            margin-bottom: 30px;
            >p{
                text-align: center;
                font-size: 14px;
                color: $color-primary;
            }
        }
    }
    .switchover-list{
        li{
            >a{
                padding-right: 10px;
                >div{
                    margin-left: 10px;
                }
            }
            text-align: center;
            height: 50px;
            line-height: 50px;
            .comments{
                display: inline-block;
                vertical-align: middle;
                div,
                a{
                    display: inline-block;
                    vertical-align: middle;
                    color: #666666;
                    font-size: 16px;
                }
            }
            .comments{
                .icon{
                    width: 24px;
                    height: 15px;
                    /*margin-right: 10px;*/
                }
            }
        }
    }
</style>
