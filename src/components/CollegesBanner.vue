<template>
    <div class="collegesBanner">
        <div class="back">
            <div class="back-top-content">
                <BreadCrumb :data="breadcrumb" :maxWidth="'1180px'" class="bread"/>
                <p class="back-title">{{collegeTitle}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import BreadCrumb from "./BreadCrumb";
    import colleges from "../static_data/colleges";
    export default {
        props:{
            int:{
                request:true
            }
        },
        name: "collegesBanner",
        components:{
            BreadCrumb
        },
        data(){
            return{
                allColleges:colleges.colleges,
                breadcrumb:[
                    {
                        "titleKey":"Institute",
                        "link":"/Institute"
                    },
                    {
                        title:"",
                    }
                ]
            }
        },
        created() {
            this.numindex()
        },
        methods:{
            numindex:function (){
                this.breadcrumb[1].title=this.breadcrumbTitle
            }
        },
        computed:{
            collegeTitle(){
                if(this.allColleges[this.$i18n.locale]){
                    return this.allColleges[this.$i18n.locale].videos[this.int].title;
                }
                //return Chinese page if the specific language isn't available
                return this.allColleges.zh.videos[this.int].title
            },
            breadcrumbTitle(){
                if(this.allColleges[this.$i18n.locale]){
                    return this.allColleges[this.$i18n.locale].videos[this.int].title
                }
                //return Chinese page if the specific language isn't available
                return  this.allColleges.zh.videos[this.int].title
            }
        },
        watch:{
            breadcrumbTitle:function (val) {
                this.breadcrumb[1].title = val;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/css/mixins";
    @import "../assets/css/partials";
    .back{
        max-width: $max-width;
        height: 180px;
        width: 100%;
        background: url("/imgs/IndividualCourses-banner.png") no-repeat;
        background-size: 100% 100%;
        text-align: center;
        margin: 0 auto;
        .back-top-content{
            max-width: 1180px;
            margin: 0 auto;
            .bread{
                width: 100%;
                line-height: 64px;
                text-align: left;
                font-size: 18px;
                border-bottom: 0px;
                background: rgba(0,0,0,0);
                position: static;
            }
            .back-title{
                font-size: 30px;
            }
            .back-text{
                font-size: 14px;
                margin-top: 25px;
            }
        }

    }
</style>
