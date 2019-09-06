<template>
    <div class="contact">
        <p class="header">{{aboutData.about.call}}</p>
        <img :src="aboutData.about.xinImg" alt="">
        <p class="elm">{{aboutData.about.elm}}</p>
        <p class="have">{{aboutData.about.have}} <a :href="'mailto:'+aboutData.about.com">{{aboutData.about.com}}</a> {{aboutData.about.we}}</p>
<!--        <a class="send">{{home.about.send}}</a>-->
    </div>
</template>

<script>
    import homeData from "../static_data/home";
    export default {
        name: 'Contact',
        data() {
            return {
                aboutJson: homeData,
                language:'',
                p1:"/imgs/xin.png"
            }
        },
        computed:{
            aboutData(){
                if(this.aboutJson[this.$i18n.locale]){
                    return this.aboutJson[this.$i18n.locale];
                }
                //return Chinese page if the specific language isn't available
                return this.aboutJson["zh"];
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/css/mixins";
    @import "../assets/css/partials";
    .contact {
        width: 100%;
        padding-top: 70px;
        padding-bottom: 100px;
        text-align: center;
        background: $gray-site-bg-color;
        .header{
            font-size: 30px;
        }
        img{
            margin-top: 50px;
        }
        .elm{
            font-size: 24px;
            margin-top: 30px;
        }
        .have{
            font-size: 18px;
            margin-top: 30px;
            a{
                color: $color-primary;
            }

        }
        .send{
            font-size: 18px;
            color: $color-primary;
            line-height: 3;
        }
    }

</style>
