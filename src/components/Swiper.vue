<template>
    <!-- Swiper -->
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <slot/>
        </div>
        <!-- Add Pagination -->
        <div v-if="hasPagination" class="swiper-pagination"></div>
        <!-- Add Arrows -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
</template>

<script>
    import Swiper from "swiper";
    /*DO NOT DELETE this CSS import,Swiper needs it*/
    import css from "../assets/css/swiper.min.css";
    export default {
        props:{
            config:{
                type: Object,
                required: true
            },
            hasPagination:{
                type: Boolean,
                required: true
            }
        },
        name: "Swiper",
        data(){
            return {
                slides:[],
                mySwiper:{}
            }
        },
        methods:{
            init(){
                this.mySwiper.update();
                this.mySwiper.init();
            }
        },
        mounted() {
            this.mySwiper = new Swiper('.swiper-container',{...this.config});
        }
    }
</script>

<style scoped>
    .swiper-container {
        width: 100%;
    }
    .cc{
        width: 100px;
    }
    .swiper-button-next, .swiper-container-rtl .swiper-button-prev{
        background: url("/imgs/right.png");
        width: 80px;
        height: 80px;
        background-repeat: no-repeat;
    }
    .swiper-button-prev, .swiper-container-rtl .swiper-button-next {
        background: url("/imgs/left.png");
        width: 80px;
        height: 80px;
        background-repeat: no-repeat;
    }
    .swiper-button-next, .swiper-button-prev{
        margin-top: -40px;
    }
</style>
