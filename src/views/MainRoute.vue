<template>
    <div>
        <!--website navigation-->
        <div id="nav-bar" class="nav-bar">
            <div class="nav-wrapper">
                <router-link class="logo" to="/home">
                    <img src="/imgs/logo.png" alt="logo">
                </router-link>
                <div class="nav" >
                    <div  class="nav-option" >
                        <router-link to="/home" >
                            <div>{{$t("home")}}</div>
                        </router-link>
                    </div>

                    <div @mouseenter="showSelectOptions = true" @mouseleave="showSelectOptions = false"  class="developer-option">
                        <div :class="{developer:true,option_active:isDeveloperActive}" >
                            {{$t("developer")}}
                            <span v-show="!showSelectOptions">
                                <SVGIcon :width="'8px'" :height="'4px'" :class="{drop_icon:true,reverse_drop_down:showSelectOptions}" icon="drop-down"/>
                            </span>
                            <span v-show="showSelectOptions">
                                <SVGIcon :width="'8px'" :height="'4px'" :class="{drop_icon:true,reverse_drop_down:showSelectOptions}" icon="drop-up"/>
                            </span>
                        </div>

                        <div v-show="showSelectOptions"  class="select-options">
                            <router-link to="/documentation" :class="{each_option:true}">
                                <div>{{$t("documentation")}}</div>
                            </router-link>
                            <router-link to="/apps" :class="{each_option:true}" >
                                <div>{{$t("apps")}}</div>
                            </router-link>
                            <router-link to="/resources" :class="{each_option:true}" >
                                <div>{{$t("resources")}}</div>
                            </router-link>
                        </div>
                    </div>

                    <div  class="nav-option" >
                        <router-link to="/Institute">
                            <div :class="{college_active:isCollegeActive}">{{$t("Institute")}}</div>
                        </router-link>
                    </div>

                    <div class="nav-option" v-if="$t('translate') == 1">
                        <a target="_blank" href="https://bbs.huaweicloud.com/forum/forum-726-1.html" >
                            <div>{{$t("forum")}}</div>
                        </a>
                    </div>

                    <div  @mouseenter="showActivitySelectOptions = true" @mouseleave="showActivitySelectOptions = false" class="developer-option">
                        <div :class="{developer:true,option_active:isActivityActive}"  >
                            {{$t("activity")}}
                            <span v-show="!showActivitySelectOptions">
                                <SVGIcon :width="'8px'" :height="'4px'" :class="{drop_icon:true,reverse_drop_down:showActivitySelectOptions}" icon="drop-down"/>
                            </span>
                            <span v-show="showActivitySelectOptions">
                                <SVGIcon :width="'8px'" :height="'4px'" :class="{drop_icon:true,reverse_drop_down:showActivitySelectOptions}" icon="drop-up"/>
                            </span>
                        </div>
                        <div v-show="showActivitySelectOptions"  class="select-options" :style="[activeLanguage=='zh'? heightFullStyle:heightLessStyle]">
                            <router-link to="/activity" :class="{each_option:true}" v-if="$t('translate') == 1">
                                <div>{{$t("activity")}}</div>
                            </router-link>
                            <router-link to="/news" :class="{each_option:true}">
                                <div>{{$t("news")}}</div>
                            </router-link>
                        </div>
                    </div>

                    <div class="nav-option" >
                        <router-link to="/about">
                            <div>{{$t("about")}}</div>
                        </router-link>
                    </div>
                </div>

                <div class="options" v-if="true">
                    <div @mouseenter="showLanguageOptions = true" @mouseleave="showLanguageOptions = false" class="single-option">
                        <img src="/imgs/earth.png" alt="" class="earth">
                        {{ (activeLanguage == 'zh')? $t("chinese"):$t("english") }}
                        <SVGIcon :width="'8px'" :height="'4px'" :class="{reverse_drop_down:showLanguageOptions}" icon="drop-down"/>
                        <!--guest user options-->
                        <div v-show="showLanguageOptions" class="Language-options">
                            <div @click="switchLanguage('zh')" :class="{active:activeLanguage === 'en'}">{{$t("chinese")}}</div>
                            <div @click="switchLanguage('en')" :class="{active:activeLanguage === 'zh'}">{{$t("english")}}</div>
                        </div>

                    </div>

                    <div v-if="false" @mouseenter="showUserOptions = true" @mouseleave="showUserOptions = false" class="single-option" @click="huaweiCloudLogin">
                        {{isUserLoggedIn?$t('myAccount'):$t('login')}}
                        <SVGIcon  v-show="isUserLoggedIn" :width="'8px'" :height="'4px'" :class="{caret_icon:true,reverse_drop_down:showUserOptions}" icon="drop-down"/>
                        <SVGIcon  :width="'26px'" :height="'26px'" class="icon profile-icon" icon="profile"/>

                        <!--guest user options-->
<!--                        <div v-if="!isUserLoggedIn" v-show="showUserOptions" class="guest-options">-->
<!--                            <div @click="huaweiCloudLogin">{{$t('huaweiCloudLogin')}}</div>-->
<!--&lt;!&ndash;                            <div>{{$t('ICTLogin')}}</div>&ndash;&gt;-->
<!--                        </div>-->
                        <!--logged in user options-->
                        <div v-if="isUserLoggedIn" v-show="showUserOptions" class="user-options">
<!--                            <router-link to="/basicInformation" @click.stop>-->
<!--                                <div>{{$t('myData')}}</div>-->
<!--                            </router-link>-->
                            <div @click.stop="basicInformation">{{$t('myData')}}</div>
<!--                            <div>{{$t('myForum')}}</div>-->
                            <div @click.stop="logout">{{$t('logout')}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!--the website content goes in here-->
        <router-view v-if="scope" class="website-wrapper"/>



        <!--Website footer-->
        <div id="footer" class="footer">
            <div class="footer-bottom">
                <div class="container">
                    <div class="left" v-html="$t('copyRight')">
                    </div>
                    <div class="right">
                        <a :href="$t('contactUsLink')" target="_blank"><span>{{$t("contactUs")}}</span></a>
                        <a :href="$t('legalStatementLink')" target="_blank"><span>{{$t("legalStatement")}}</span></a>
<!--                        <span>{{$t("privacyPolicy")}}</span>-->
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import SVGIcon from "../components/SVGIcon";
    import {eventBus,eventBusActions} from "../event_bus";
    import {settings,user} from "../../public/static";
    import {envVariables} from "../../public/static/index";
    import http from "../utils/axiosConfig";
    export default {
        name: "MainRoute",
        components:{
            SVGIcon
        },
        data(){
            return {
                scope:true,
                isUserLoggedIn:false,
                showUserOptions:false,
                showLanguageOptions: false,
                showSelectOptions:false,
                showActivitySelectOptions:false,
                activeLanguage: "zh",
                url:"",
                heightFullStyle:{
                    height:"100px"
                },
                heightLessStyle:{
                    height:"50px"
                },
                college_active:"college_active"

           }
        },
        created(){
            var user = this.$cookies.get('user')
            sessionStorage.setItem ('token',this.$cookies.get('token'))
            // console.log(token);
            if(user){
                this.isUserLoggedIn = true
            }else{
                this.isUserLoggedIn = false
            }
        },
        // beforeDestroy() {
        //      eventBus.$off(eventBusActions.LANGUAGE_CHANGED)
        // },
        methods:{
           async switchLanguage(lang){

                if(lang==="en"){
                    this.$i18n.locale = lang;
                    document.title = "Ascend Developer Community - HUAWEI";
                    if(this.$route.path.indexOf("/activity")!==-1){
                        this.$router.push('/home');
                    }else if(this.$route.path.indexOf("/applicationCourses")!==-1){
                        this.$router.push('/Institute');
                    }else if(this.$route.path.indexOf("/Course")!==-1){
                        this.$router.push('/Institute');
                    }
                }else{
                    this.$i18n.locale = 'zh';
                    document.title = "Ascend开发者社区 - 华为";
                }
                this.activeLanguage = lang;
                sessionStorage.setItem('lang',lang);
                this.scope=false
                await this.$nextTick()
               this.scope=true
                eventBus.$emit(eventBusActions.LANGUAGE_CHANGED,lang);
            },
            huaweiCloudLogin(){
                let current = window.location.pathname;
                if(!this.isUserLoggedIn){
                    this.url = envVariables.BASE_URL + "testLogin?redirect=" + current;
                    window.location.href = this.url;
                }else{
                }
            },
            logout(){
                this.$cookies.remove('user');
                this.$cookies.remove('token');
                this.$cookies.set("user",'',-1, '/');
                this.$cookies.set("token",'',-1, '/');
                this.isUserLoggedIn = false;
                if(this.$cookies.get('user')){
                    try {
                        JSON.stringify(this.$cookies.get('user'))
                    }catch (e) {
                    }
                }
                this.$router.push('/home');
            },
            basicInformation(){
                this.$router.push('/basicInformation')
            }
        },
        mounted(){
            if (sessionStorage.getItem('lang')) {
                this.activeLanguage = sessionStorage.getItem('lang')
                this.$i18n.locale = sessionStorage.getItem('lang')
            }
        },
        updated() {
            this.$nextTick(function(){
                this.activeLanguage = sessionStorage.getItem('lang')? sessionStorage.getItem('lang'):this.$i18n.locale
            })
        },
        computed:{
            isDeveloperActive(){
                try {
                    if(this.$route.path.indexOf("/documentation")!==-1){
                        return true
                    }else if(this.$route.path.indexOf("/apps")!==-1){
                        return true
                    }else if(this.$route.path.indexOf("/resources")!==-1){
                        return true
                    }else{
                        return false
                    }
                }
                catch (error) {
                    console.log(error)
                }
            },
            isActivityActive(){
                try {
                    if(this.$route.path.indexOf("/activity")!==-1){
                        return true
                    }else if(this.$route.path.indexOf("/news")!==-1){
                        return true
                    }else{
                        return false
                    }
                }
                catch (error) {
                    console.log(error)
                }
            },
            isCollegeActive(){
                try {
                    if(this.$route.path.indexOf("/Course")!==-1){
                        return true
                    }else if(this.$route.path.indexOf("/Institute")!==-1){
                        return true
                    }else{
                        return false
                    }
                }
                catch (error) {
                    console.log(error)
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/css/mixins";
    @import "../assets/css/partials";
    .nav-bar {
        user-select: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: $nav-bar-height;
        box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
        z-index: 999;
        background: $nav-bar-color;
        .nav-wrapper{
            position: relative;
            max-width: $max-width;
            min-width: $pc-width;
            height: $nav-bar-height;
        }
        .logo{
            @include absoluteYCenter;
            max-width: 113px;
            left: 3.57%;
            img{
                width: 100%;
            }
        }
        .nav{
            @include absoluteYCenter;
            left: 16.76%;
            min-width: 1024px;
            .nav-option{
                display:inline-block;
                width:135px;
                text-align: center;
                a{
                    display: inline-block;
                    margin: 0 1%;
                    //width: 13%;
                    text-align: center;
                    color: $nav-text-color;
                    div{
                        height: $nav-bar-height - 4; //reduce 4 since gonna use 4px of border-bottom
                        line-height: $nav-bar-height - 4; //reduce 4 since gonna use 4px of border-bottom
                        border-bottom: 4px solid rgba(0,0,0,0);
                        padding: 0 10px;
                    }
                    &:hover,
                    &.router-link-exact-active,
                    &.router-link-active{
                        div{
                            color: $white-color;
                            border-bottom: 4px solid $color-primary;
                        }
                    }
                }
            }
            .developer-option {
                display:inline-block;
                width:140px;
                text-align:center;
                position:relative;
                cursor: pointer;
                color:#7d8a93;
                height: $nav-bar-height ; //reduce 4 since gonna use 4px of border-bottom
                line-height: $nav-bar-height ; //reduce 4 since gonna use 4px of border-bottom
                .developer {
                    margin:auto;
                    display: inline-block;
                    cursor: pointer;
                    top:0;
                    left:0;
                    bottom:0;
                    right:0;
                    padding: 0 10px;
                    height: $nav-bar-height ; //reduce 4 since gonna use 4px of border-bottom
                    line-height: $nav-bar-height ; //reduce 4 since gonna use 4px of border-bottom
                    &:hover,
                    &.router-link-exact-active,
                    &.router-link-active{
                        color: $white-color;
                        border-bottom: 4px solid $color-primary;
                    }
                }
                .drop_icon{
                    display: inline-block;
                    vertical-align: middle;
                    width: 12px;
                    height: 12px;
                    position: relative;
                }
                .select-options{
                    position: absolute;
                    background: #232c38;
                    z-index: 999;
                    width: 100%;
                    line-height: normal;
                    left: 0;
                    top: 55px;
                    height: 150px;
                    .each_option {
                        width: 100%;
                        height: 50px;
                        line-height: 50px;
                        display: block;
                        //width: 13%;
                        text-align: center;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        color: $nav-text-color;
                        &:hover,
                        &.router-link-exact-active,
                        &.router-link-active{
                            div{
                                color: $white-color;
                            }
                        }
                    }
                }
            }
            @include media($tablet-width){
                a{
                    div{
                        box-sizing: content-box;
                    }
                }
            }
            @include media(1100px){
                a{
                    div{
                        box-sizing: content-box;
                    }
                }
            }
            @include media($pc-width){
                left: 17.76%;
                min-width: 1024px;
            }
        }
        .reverse_drop_down{
            transition: 0.3s;
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
        }
        .option_active {
            color: $white-color;
            border-bottom: 4px solid $color-primary;
        }
        .college_active{
            color: $white-color;
            border-bottom: 4px solid $color-primary !important;
        }
        .active {
            opacity:0.4;
            filter:alpha(opacity=40); /* 针对 IE8 以及更早的版本 */
        }
        .options{
            position: absolute;
            right: 3.57%;
            height: 55px;
            color: $nav-text-color;
            .single-option{
                display: inline-block;
                vertical-align: middle;
                padding-left: 35px;
                padding-right: 20px;
                cursor: pointer;
                height: 55px;
                line-height: 55px;
                position: relative;
                min-width: 140px;
                .earth{
                    @include absoluteYCenter;
                    right: 80%;
                    width: 16px;
                }
                .active {
                    opacity:0.4;
                    filter:alpha(opacity=40); /* 针对 IE8 以及更早的版本 */
                }
                &:first-child{
                    min-width: 100px;
                    &:after{
                        content: "";
                        display: block;
                        @include absoluteYCenter;
                        // width: 1px;
                        height: 20px;
                        background: rgba(255,255,255,0.15);
                        top: 50%;
                        right: 0;
                    }
                }
                &:hover{
                    background: $active-nav-bg;
                    cursor: pointer;
                }
                div{
                    display: inline-block;
                    vertical-align: middle;
                    width: 12px;
                    height: 12px;
                }
                .icon{
                    width: 24px;
                    height: 24px;
                }
                .caret_icon{
                    margin-left: 2px;
                    margin-right: 8px;
                }
                &:last-child{
                    border-right: 0;
                    margin-right: 0;
                }
                .guest-options,
                .user-options{
                    position: absolute;
                    background: $active-nav-bg;
                    z-index: 9;
                    width: 100%;
                    line-height: normal;
                    left: 0;
                    top: 55px;
                    /*height: 80px;*/
                    div{
                        width: 100%;
                        color: $white-color;
                        height: 40px;
                        line-height: 40px;
                        padding-left: 10px;
                         white-space: nowrap;
                         text-overflow: ellipsis;
                         overflow: hidden;
                    }
                }
                .Language-options {
                    position: absolute;
                    background: $active-nav-bg;
                    z-index: 9;
                    width: 100%;
                    line-height: normal;
                    left: 0;
                    top: 55px;
                    height: 90px;
                    padding-left: 15px;
                    div{
                        width: 100%;
                        color: $white-color;
                        height: 40px;
                        line-height: 40px;
                        padding-left: 20px;
                        &:hover{
                            opacity:1;
                            filter:alpha(opacity=100); /* 针对 IE8 以及更早的版本 */
                        }
                    }
                }
                .guest-options{
                    height: 45px;
                }
                .user-options{
                    height: 80px;
                }
            }
            .icon{
                width: 24px;
                height: 24px;
                margin-right: 15px;
                cursor: pointer;
                @include absoluteYCenter;
                right: 0;
                &:hover{
                    cursor: pointer;
                }
            }
        }
    }
    .footer{
        position: relative;
        z-index: 10;
        height: 115px;
        .footer-top{
            background-color: #f0f0f0;
            padding: 60px 15px;
            .single-row{
                width: 16.6%;
                display: inline-block;
                vertical-align: top;

                .menu-title {
                    margin-bottom: 20px;
                    color: $black-text;

                    span {
                        display: inline-block;
                        vertical-align: middle;
                        padding-right: 15px;
                    }

                    .caret {
                        display: inline-block;
                        vertical-align: middle;
                        width: 13px;
                        height: 13px;
                    }
                }

                .options {
                    a {
                        display: block;
                        margin-bottom: 20px;
                        color: $secondary-text;

                        &:last-child {
                            margin-bottom: 0;
                        }
                    }
                }
            }
        }

        .footer-bottom {
            /*max-width: 1680px;*/
            font-size: 14px;
            background-color: #232c38;
            padding: 0px 5%;
            color: #fff;
            height: 100%;
            line-height: 115px;
            margin: 0 auto;


        }

        .left {
            width: 60%;
            display: inline-block;
            vertical-align: middle;
            color: #9195a1;
            border-top: 1px solid #464646;
            height: 50px;
            line-height: 50px;


        }

        .right {
            width: 40%;
            display: inline-block;
            vertical-align: middle;
            text-align: right;
            border-top: 1px solid #464646;
            height: 50px;
            line-height: 50px;

            a {
                border-right: 1px solid #fff;
                padding-right: 10px;
                margin-right: 10px;
                cursor: pointer;
                color: #ffffff;

                &:nth-child(2) {
                    border-right: 0px;
                }

                span {
                    border-right: 1px solid #fff;
                    padding-right: 10px;
                    margin-right: 10px;
                    cursor: pointer;

                    &:last-child {
                        border-right: none;
                        padding-right: 0;
                        margin-right: 0;
                    }
                }
            }


        }
    }
</style>
