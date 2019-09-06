<template>
    <div class="spinner-wrapper">
        <div class="spinner">
            <div class="center"></div>
        </div>
        <div class="loading-text">{{$t('loading')}}</div>
    </div>
</template>

<script>
    export default {
        name: "Loading"
    }
</script>

<style scoped lang="scss">
    .spinner-wrapper{
        width: 148px;
        height: 48px;
        line-height: 48px;
        box-shadow: 0 0 16px 0 #cecece;
        margin-top: 40px;
        text-align: center;
        background: #ffffff;
    }
    .spinner{
        max-width: 110px;
        max-height: 110px;
        padding: 5px;
        background: linear-gradient(180deg,#3d88ff,#ffffff);
        border-radius: 50%;
        display: inline-block;
        vertical-align: middle;
        animation: myRotation 1000ms linear 0ms infinite forwards;
        .center{
            width: 20px;
            height: 20px;
            background: white;
            border-radius: 50%;
        }
    }
    .loading-text{
        display: inline-block;
        vertical-align: middle;
        margin-left: 10px;
    }
    @keyframes myRotation {
        0% {
            transform: rotate3d(0,0,1,0deg);
        }
        100% {
            transform: rotate3d(0,0,1,360deg);
        }
    }
</style>
