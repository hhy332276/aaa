<template>
<!--    <div id="app" @mousewheel.ctrl.prevent @click="countClick">-->
    <div id="app" @mousewheel.ctrl.prevent>
        <!--This router-view links login and the rest of the pages since,
         the inner routes for all the other pages is in /views/MainRoute.vue which
         also includes the website top navigation-->
        <router-view/>

    </div>
</template>

<script>
    export default {
        name: "App",
        // data(){
        //     return{
        //         host:"",
        //         path:"",
        //     }
        // },
        // watch: {
        //     '$route' (to,from) {
        //         this.host = window.location.host;
        //         this.path = window.location.pathname+window.location.search
        //     }
        // },
        // methods:{
        //     countClick(){
        //         this.host = window.location.host;
        //         this.path = window.location.pathname+window.location.search
        //         clickHeatSite = this.host
        //         clickHeatGroup = this.path
        //         clickHeatServer = 'http://122.112.203.2:8081/click.php';
        //         initClickHeat();
        //     }
        // },
        // updated() {
        //     this.$nextTick(function(){
        //         this.countClick()
        //     })
        // }
    }
</script>

<style lang="scss">
    @import url("./assets/css/reset.css");
    @import url("assets/css/global.css");
    @import url("assets/css/index.css");
    @import "assets/css/mixins";
    @import "assets/css/partials";
    html,
    body{
        background: $white-color;
    }
    .container{
        max-width: $max-width;
        margin: 0 auto;
    }
    .hidden-scrollbar{
        &::-webkit-scrollbar {
            width: 6px;
            height: 6px;
            background-color: rgba(0,0,0,0);
        }

        /*定义滚动条轨道 内阴影+圆角*/
        &::-webkit-scrollbar-track {
            background-color: rgba(0,0,0,0);
        }

        /*make it transparent by default*/
        &::-webkit-scrollbar-thumb {
            border-radius: 5px;
            background-color: rgba(0,0,0,0);
        }
        &:hover{
            &::-webkit-scrollbar-thumb {
                background-color: #BBB;
            }
        }
    }

    .slim-scrollbar{
        &::-webkit-scrollbar {
            width: 6px;
            height: 6px;
            background-color: #fff;
        }

        /*定义滚动条轨道 内阴影+圆角*/
        &::-webkit-scrollbar-track {
            background-color: transparent;
        }

        /*make it transparent by default*/
        &::-webkit-scrollbar-thumb {
            border-radius: 5px;
            background-color: #DDD;
        }
        &:hover{
            &::-webkit-scrollbar-thumb {
                background-color: #BBB;
            }
        }
    }

    #app {
        user-select: none;
        font-family: 'Microsoft YaHei', Arial, sans-serif;
        font-size: 14px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: $black-text;
        min-width: $pc-width;               //needs a change
    }
    .website-wrapper{
        margin-top: $nav-bar-height;
        position: relative;
    }
    a {
        color: $black-text;
        &.router-link-exact-active {
            color: $link-hover;
        }
    }
    button,
    .button{
        font-family: 'Microsoft YaHei', 'Avenir', Helvetica, Arial, sans-serif;
        outline: none;
        border: 1px solid $color-primary;
        background: none;
        border-radius: 2px;
        font-size: 15px;
        height: 36px;
        padding: 0 45px;
        min-width: 120px;
        color: $color-primary;
        &:hover{
            cursor: pointer;
        }
        &.filled{
            @include secondButtonStyle;
            background: $color-primary;
            color: #fff;
        }
    }
    .button{
        line-height: 35px;
        display: inline-block;
    }
    h1,
    .header-one{
        font-size: 28px;
        font-weight: bolder;
        color: $black-text;
    }
    .hw-button{
        &:hover{
            color: $link-hover !important;
            border-color: $link-hover !important;
        }
    }
    .primary-button{
        background: $color-primary;
        color: $white-color;
    }
    input{
        border-radius: 4px;
        border: none;
    }
    .ellipsis{
        overflow: hidden;
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .highlight-content{
        span{
            color: $color-primary;
        }
    }
    .safe-distance{
        padding-left: 20px;
        padding-right: 20px;
    }
</style>
