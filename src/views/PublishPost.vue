<template>
    <div class="publish">
        <BreadCrumb :data="breadcrumb" :maxWidth="'1366px'"/>
    </div>
</template>

<script>
    import BreadCrumb from '../components/BreadCrumb'
    export default {
        name: "PublishPost",
        data(){
            return{
                topic:{
                    title:"",
                },
                breadcrumbbreadcrumb:[
                    {
                        "titleKey":"forum",
                        "link":"/forum"
                    },
                    {
                        "title":"",
                    }
                ]
            }
        },
        components:{
            BreadCrumb,
        },
        created(){
            //dynamically add the topic name on the breadcrumb
            if(this.$route.params.topicName){
                if(this.breadcrumb.length > 1){
                    this.breadcrumb[1].title = this.$route.params.topicName;
                    this.topic.title = this.$route.params.topicName;
                }
            }
            console.log()
        }
    }
</script>

<style scoped>

</style>
