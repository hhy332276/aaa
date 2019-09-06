<template>
    <div class="not-found">
        <div class="message">
            <img src="/imgs/404.png" alt="">
            <div class="text">{{$t('urlNotFound')}}</div>
        </div>
        <!--<img src="/imgs/404.png" alt="">-->
    </div>
</template>

<script>
    export default {
        name: "NotFound"
    }
</script>

<style scoped lang="scss">
    @import "../assets/css/mixins";
    @import "../assets/css/partials";
    .not-found{
        /*55px is the height of the top navigation and 115px is the height of the footer*/
        height: calc(100vh - 55px - 115px);
        background: $website-bg;
        position: relative;
        text-align: center;
        .message{
            @include absoluteCenter;
            width: 100%;
            max-width: 1680px;
            img{
                max-width: 23.8%;
                max-height: 100%;
            }
            .text{
                margin-top: 50px;
                color: $black-text-two;
                font-size: 22px;
            }
        }

    }
</style>
