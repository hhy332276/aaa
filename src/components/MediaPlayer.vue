<template>
    <div  oncontextmenu = "return false">
        <div class="video-player" v-if="data && data.videoUrl !== ''" @click.stop="stopParent">
            <video preload="auto" controlslist="nodownload" :autoplay="autoplay==false?false:true" controls>
                <source :src="data.videoUrl" type="video/mp4">
                {{$t('videoNotSupported')}}
            </video>
            <div @click="closeMedia" class="close-btn" v-if="!close"><SVGIcon class="close-icon" :width="'40px'" :height="'40px'" icon="close-media"/></div>
        </div>


        <div @click.stop="stopParent" class="images-slides" v-else>
            <img v-show="activeImgIndex === index" :key="index" v-for="(imgUrl,index) in data.ppt" :src="imgUrl" alt="">

            <!--buttons-->
            <div @click="closeMedia" class="close-btn"><SVGIcon class="close-icon" :width="'40px'" :height="'40px'" icon="close-media"/></div>
            <div @click="prevSlide" class="previous-btn"><SVGIcon class="prev-icon" :width="'80px'" :height="'80px'" icon="left-media"/></div>
            <div @click="nextSlide" class="next-btn"><SVGIcon class="next-icon" :width="'80px'" :height="'80px'" icon="right-media"/></div>

        </div>
    </div>
</template>

<script>
    import SVGIcon from "./SVGIcon";
    export default {
        name: "MediaPlayer",
        components:{
            SVGIcon
        },
        props:{
            data:{
                type: Object,
                required: true
            },
            onCloseMedia:{
                type: Function,
                required: false
            },
            close:{
                type:Boolean
            },
            autoplay:{
                type:Boolean
            }
        },
        data(){
            return {
                activeImgIndex: 0
            }
        },
        methods:{
            stopParent(){},
            prevSlide(){
                if(this.activeImgIndex === 0){
                    this.activeImgIndex = this.data.ppt.length - 1;
                    return;
                }
                this.activeImgIndex--;
            },
            nextSlide(){
                if(this.activeImgIndex === this.data.ppt.length - 1){
                    this.activeImgIndex = 0;
                    return;
                }
                this.activeImgIndex++;
            },
            closeMedia(){
                if(typeof this.onCloseMedia === "function"){
                    this.onCloseMedia();
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/css/mixins";
    @import "../assets/css/partials";
    .video-player{
        width: 100%;
        video{
            width: 100%;
        }
        @include media($tablet-width){
            width: 100%;
        }
    }
    .images-slides{
        width: 100%;
        position: relative;
        @include media($tablet-width){
            width: 100%;
        }
        img{
            width: 100%;
        }
    }
    .close-btn{
        position: absolute;
        top: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        cursor: pointer;
        z-index: 3;
        .close-icon{
            width: 40px;
            height: 40px;
        }
    }
    .previous-btn{
        @include absoluteYCenter;
        width: 80px;
        height: 80px;
        cursor: pointer;
        z-index: 3;
        left: 0;
        .prev-icon{
            width: 80px;
            height: 80px;
        }
    }
    .next-btn{
        @include absoluteYCenter;
        width: 80px;
        height: 80px;
        cursor: pointer;
        z-index: 3;
        right: 0;
        .next-icon{
            width: 80px;
            height: 80px;
        }
    }

</style>
