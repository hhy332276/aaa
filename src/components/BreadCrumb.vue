<template>
    <!--
    Example
    breadcrumb:[{"titleKey":"documentation","link":"/documentation"},{"titleKey":"documentationDescription"}],
    NOTE:use {"title":"my custom title","link":"/documentation"} if you want to use your own title
    -->
    <div id="breadcrumb-container" class="breadcrumb-container">
        <ul :style="{'max-width':maxWidth}" class="breadcrumb">
            <li :key="index" v-for="(info,index) in data">
<!--                <router-link v-if="info.link" :to="info.link">{{info.title?info.title:$t(info.titleKey)}}<span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span></router-link>-->
                <a :href="info.link" v-if="info.link">{{info.title?info.title:$t(info.titleKey)}}<span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span></a>
                <span class="current-position" v-else>{{info.title?info.title:$t(info.titleKey)}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:{
            maxWidth:{
                required:true
            },
            data:{
                required: true,
                type: Array
            }
        },
        name: "BreadCrumb"
    }
</script>

<style scoped lang="scss">
    @import "../assets/css/mixins";
    @import "../assets/css/partials";
    .breadcrumb-container{
        position: fixed;
        background: $white-bg;
        width: 100%;
        left: 0;
        right: 0;
        top: 55px;
        z-index: 8;
        line-height: 64px;
        border-bottom: 1px solid #cecece;
    }
    .breadcrumb{
        height: 64px;
        line-height: 64px;
        padding-left: 15px;
        margin: 0 auto;
        li{
            display: inline-block;
            a{
                color: $color-primary;
            }
            .current-position{
                color: #27313a;
            }
        }
    }
</style>
