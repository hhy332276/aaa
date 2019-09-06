<template>
    <div @click="hideDropDown">
        <div class="container">
            <div class="banner">
                <div class="search-hot-search-container mini-container">
                    <div class="search-position">
                        <div class="search-container">
                            <input @keyup.enter="search" v-model="searchTerms.keywords" class="search-input" :placeholder="$t('searchPlaceholder')" type="text">
                            <div class="search-icon" @click="search">
                                <SVGIcon width="24px" height="24px" icon="search"/>
                            </div>
                        </div>
                        <div class="hot-list">
                            <div>{{$t("hotSearch")}}</div>
                            <ul>
                                <li @click="searchByHotSearch(term.keyWords)" :key="index" v-for="(term,index) in hotSearch">{{term.keyWords}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mini-container">

            <div class="left">
                <Select ref="products_dropdown" :onOptionSelected=onProductSelected :value=productValue :options=productsOptions class="select"/>

                <div v-show="searchResult.length > 0">
                    <div class="total-results highlight-content" v-html="$t('resultsFound',{totalResults:searchTerms.totalItems,keywords:searchTerms.staticKeywords})"></div>

                    <!--search results-->
                    <div class="results-list-wrapper">
                        <div class="list-item" :key="index" v-for="(result,index) in searchResult">
                            <router-link target="_blank" class="title highlight-content" v-html="result.title"
                                         :to="'/documentation/details/'+result.lang+'/'+result.version+'/'+result.productId+'/'+result.uri">

                            </router-link>
                            <div class="breadcrumb">
                               {{$t('comingFrom')}}
                                <router-link target="_blank" to="/documentation">
                                    {{$t('documentation')}}<span>&gt;&gt;</span>
                                </router-link>
                                <router-link target="_blank" :to="'/documentation/details/'+result.lang+'/'+result.version+
                                             '/'+result.productId+'/'+result.uri">{{result.productName}}<span>&gt;&gt;</span>
                                </router-link>
                                <router-link target="_blank" :to="'/documentation/details/'+result.lang+'/'+result.version+
                                             '/'+result.productId+'/'+result.uri">{{result.version}}<span>&gt;&gt;</span>
                                </router-link>
                                <router-link target="_blank" :key="index" v-for="(location,index) in result.hierarchy"
                                             :to="'/documentation/details/'+result.lang+'/'+result.version+
                                             '/'+result.productId+'/'+location.uri">{{location.title}}<span
                                        v-if="index !== result.hierarchy.length - 1">&gt;&gt;</span>
                                </router-link>

                            </div>
                            <div class="intro highlight-content" v-html="result.contentText"></div>
                        </div>
                    </div>

                    <!--pagination-->
                    <Pagination ref="paginationPlugin" :onPageSizeChange="useAnotherPageSize" :onPageChange="getAnotherPage" :option=pageSizes :count=searchTerms.totalPages
                                :row=searchTerms.totalItems class="pagination"/>

                </div>

                <div class="no-results-wrapper" v-if="searchResult.length === 0 && !isSearching">
                    <div class="no-results">
                        <img src="/imgs/doc_no_results.png" alt="">
                        <div class="message">{{$t("noResults")}}</div>
                    </div>
                </div>


            </div>

            <div class="right">
                <div class="title">{{$t('recommendedInfo')}}</div>
                <ul class="about-list">
                    <li><router-link to="/softIntroduction">{{$t('mindSporeIntro')}}</router-link></li>
                    <li><router-link to="/documentation/details/zh/1.3.0.0/f4f39edd90e011e9a97afa163e714aa5/overview">{{$t('atlas200DK')}}</router-link></li>
                    <li><router-link :to="{path:'/Institute/atlas_learning'}">{{$t('easyPlay')}}</router-link></li>
                    <li><a target="_blank" href="https://bbs.huaweicloud.com/forum/forum-726-1.html">{{$t('faq')}}</a></li>
                </ul>
            </div>

        </div>

    </div>
</template>


<script>
    import http from "../utils/axiosConfig";
    import docs from "../static_data/documentation";
    import SVGIcon from "../components/SVGIcon";
    import Select from "../components/Select";
    import Pagination from "../components/paging";
    import {constants,settings} from "../../public/static";
    import {eventBus,eventBusActions} from "../event_bus";
    export default {
        components:{
            SVGIcon,
            Select,
            Pagination
        },
        data(){
            return {
                toggleDropDown:false,
                productValue:"全部产品",
                productsOptions:["全部产品"],
                rawProductsOptions:[{"name":"全部产品"}],
                documentations: docs,
                pageSizes:[10,20,30,40,50],
                searchTerms:{
                    keywords:"",
                    staticKeywords:"",
                    productId:"",
                    lang:"",
                    docId:"",
                    pageNum:1,
                    pageSize:10,
                    totalItems:1,
                    totalPages:1,
                },
                searchResult:[],
                hotSearch:[],
                isSearching:false
            }
        },
        methods:{
            searchByHotSearch(keywords){
                this.searchTerms.docId = "";
                this.searchTerms.pageNum = 1;
                //reset the page number to 1;
                if(this.$refs.paginationPlugin){
                    this.$refs.paginationPlugin.initPage(this.searchTerms.pageNum,this.searchTerms.pageSize);
                }
                this.searchTerms.keywords = keywords;


                this.sendSearchRequest();
                this.searchTerms.staticKeywords = this.searchTerms.keywords;

            },
            useAnotherPageSize(pageSize){
                this.searchTerms.pageSize = pageSize;

                this.sendSearchRequest();
            },
            getAnotherPage(pageNum){
                this.searchTerms.pageNum = pageNum;

                this.sendSearchRequest();
            },
            hideDropDown(){
                if(!this.$refs.products_dropdown){
                    return;
                }
                this.$refs.products_dropdown.closeDropDown();
            },
            onProductSelected(val,index){
                //clear the doc id just incase the user was trying to search a specific document earlier on
                this.searchTerms.docId = "";
                this.searchTerms.pageNum = 1;
                //reset the page number to 1;
                if(this.$refs.paginationPlugin){
                    this.$refs.paginationPlugin.initPage(this.searchTerms.pageNum,this.searchTerms.pageSize);
                }

                this.toggleDropDown = false;
                this.productValue = val;
                if(index === 0){
                    //the user selected all products
                    this.searchTerms.productId="";

                }else{
                    this.searchTerms.productId = this.rawProductsOptions[index].productId;

                }

                this.sendSearchRequest();

            },
            search(){
                if(this.searchTerms.keywords.trim() === ""){
                    return;
                }

                this.sendSearchRequest();
                this.searchTerms.staticKeywords = this.searchTerms.keywords;
            },
            sendSearchRequest(){
                this.isSearching = true;
                http.post("/product/queryDocContentBySearch",{
                    productId:this.searchTerms.productId,
                    keyWords:this.searchTerms.keywords,
                    lang:this.searchTerms.lang,
                    docId:this.searchTerms.docId,
                    pageNum:this.searchTerms.pageNum,
                    pageSize:this.searchTerms.pageSize
                }).then((res)=>{
                    this.isSearching = false;
                    if(constants.responseCode.SUCCESS === res.code){
                        this.searchResult = res.data.data;
                        this.searchTerms.totalItems = res.data.total;
                        this.searchTerms.pageNum = res.data.pageNum;
                        this.searchTerms.pageSize = res.data.pageSize;
                        this.searchTerms.totalPages = res.data.pages;
                        if(this.searchTerms.productId.trim() === ""){
                            this.$router.push(`/documentation/search/${this.searchTerms.lang}/${encodeURIComponent(this.searchTerms.keywords)}/${this.searchTerms.pageNum}/${this.searchTerms.pageSize}`);
                        }else{
                            if(this.searchTerms.docId.trim() === ""){
                                this.$router.push(`/documentation/search/${this.searchTerms.lang}/${encodeURIComponent(this.searchTerms.keywords)}/${this.searchTerms.pageNum}/${this.searchTerms.pageSize}/${this.searchTerms.productId}`);
                            }else{
                                this.$router.push(`/documentation/search/${this.searchTerms.lang}/${encodeURIComponent(this.searchTerms.keywords)}/${this.searchTerms.pageNum}/${this.searchTerms.pageSize}/${this.searchTerms.productId}/${this.searchTerms.docId}`);
                            }
                        }

                        if(this.$refs.paginationPlugin){
                            setTimeout(()=>{
                                this.$refs.paginationPlugin.initPage(this.searchTerms.pageNum,this.searchTerms.pageSize);
                            },1000);
                        }

                    }
                }).catch((err)=>{
                    this.isSearching = false;
                })
            },
            getProducts(){
                http.post("/product/queryProductListByLang",{
                    lang:this.searchTerms.lang

                }).then((res)=>{
                    if(constants.responseCode.SUCCESS === res.code){
                        for(let i=0;i<res.data.length;i++){
                            this.rawProductsOptions.push(res.data[i]);
                            this.productsOptions.push(res.data[i].name);
                            if(this.searchTerms.productId === res.data[i].productId){
                                this.productValue = res.data[i].name;
                            }
                        }
                    }
                }).catch((err)=>{

                })
            },
            getHotSearch(){
                http.post("/product/queryHotSearchList",{
                    lang:this.searchTerms.lang
                }).then((res)=>{
                    if(constants.responseCode.SUCCESS === res.code){
                        this.hotSearch = res.data;
                    }
                }).catch((err)=>{

                })
            },
            changeAllProductShow(language){
                if(language==="en"){
                    this.productValue="All Products";
                    this.productsOptions[0]="All Products";
                    this.rawProductsOptions[0].name="All Products";
                }else{
                    this.productValue="全部产品";
                    this.productsOptions[0]="全部产品";
                    this.rawProductsOptions[0].name="全部产品";
                }
            }
        },
        created() {
            this.searchTerms.lang = sessionStorage.getItem('lang') ? sessionStorage.getItem('lang'):this.$i18n.locale;
            if(this.$route.params.lang!==this.searchTerms.lang){
                this.$route.params.lang = this.searchTerms.lang;
                this.$route.params.docId="";
            }
            this.changeAllProductShow(this.searchTerms.lang);
            eventBus.$on(eventBusActions.LANGUAGE_CHANGED,(e)=>{
                this.searchTerms.lang = e;
                this.changeAllProductShow(this.searchTerms.lang);
                this.searchTerms.docId="";
                this.getProducts();
                this.sendSearchRequest();
                this.getHotSearch();
            });

            //check if the keywords are available to start searching immediately
            if(this.$route.params.keywords){
                this.searchTerms.keywords = this.$route.params.keywords;
                this.searchTerms.staticKeywords = this.$route.params.keywords;
            }

            if(this.$route.params.pageNum){
                this.searchTerms.pageNum = parseInt(this.$route.params.pageNum);
            }

            if(this.$route.params.pageSize){
                let pageSize = parseInt(this.$route.params.pageSize);
                if(this.pageSizes.indexOf(pageSize) > -1){
                    this.searchTerms.pageSize = pageSize;
                }else if(pageSize > this.pageSizes[this.pageSizes.length - 1]){
                    this.searchTerms.pageSize = this.pageSizes[this.pageSizes.length - 1];
                }else{
                    this.searchTerms.pageSize = this.pageSizes[0];
                }

            }

            if(this.$route.params.lang){
                this.searchTerms.lang = this.$route.params.lang;
            }

            if(this.$route.params.productId){
                this.searchTerms.productId = this.$route.params.productId;
            }

            if(this.$route.params.docId){
                this.searchTerms.docId = this.$route.params.docId;
            }

            //search the results in the database
            this.sendSearchRequest();

            this.getProducts();

            this.getHotSearch();
        },
        mounted(){


        },
        computed:{
            // this.searchTerms.lang = settings.getLanguage();
            // this.language = sessionStorage.getItem("lang");

        },
        beforeDestroy() {
          eventBus.$off(eventBusActions.LANGUAGE_CHANGED)
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/css/mixins";
    @import "../assets/css/partials";
    .mini-container{
        max-width: 1160px;
        .left{
            position: relative;
            padding-top: 30px;
            padding-left: 20px;
            width: 79.83%;
            vertical-align: top;
            display: inline-block;
            border-right: 1px solid #CCCCCC;
            padding-right: 6.78%;
            min-height: calc(100vh - 120px - 55px - 43px); //120px and 55px are top content,43px is the footer content
        }
        .right{
            width: 20.17%;
            vertical-align: top;
            display: inline-block;
            padding-left: 50px;
            padding-right: 20px;
        }
    }
    .banner{
        height: 120px;
        width: 100%;
        background-image: url("/imgs/doc_result_banner.jpg");
        background-size: cover;
        background-position: 50%,50%;
        background-repeat: no-repeat;
        position: relative;
        text-align: center;
        .search-hot-search-container{
            margin: 0 auto;
            width: 100%;
            position: relative;
            height: 120px;
            .search-position{
                @include absoluteYCenter;
                width: 100%;
            }
            .search-container{
                width: 74.58%;
                max-width: 880px;
                position: relative;
                padding-left: 20px;
                .search-input{
                    width: 100%;
                    display: block;
                    height: 40px;
                    padding: 0 45px 0 15px;
                    box-shadow: 0px 3px 1px rgba(206,206,206,0.3);
                }
                .search-icon{
                    @include absoluteYCenter;
                    right: 34px;
                    cursor: pointer;
                    z-index: 3;
                }
            }
            .hot-list{
                text-align: left;
                margin-top: 14px;
                color: #6F7479;
                font-size: 14px;
                padding-left: 20px;
                div{
                    display: inline-block;
                    vertical-align: middle;
                    margin-right: 22px;
                }
                ul{
                    display: inline-block;
                    vertical-align: middle;
                    li{
                        display: inline-block;
                        margin-right: 10px;
                        color: #6F7479;
                        &:hover{
                            color: $color-primary;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
    .select{
        margin-bottom: 20px;
        width: 220px;
    }
    .results-list-wrapper{
        max-width: 1180px;
        .list-item{
            padding: 15px 0;
            .title{
                font-size: 18px;
                margin-bottom: 5px;
                display: inline-block;
                color: #242728;
                &:hover{
                    color: $color-primary;
                }
            }
            .breadcrumb{
                margin-bottom: 5px;
                a{
                    color: #7c7c7c;
                    &:hover{
                        color: $color-primary;
                        span{
                            color: #7c7c7c;
                        }
                    }
                }
            }
            .intro{
                max-height: 45px;
                overflow: hidden;
            }
        }
    }
    .pagination{
        margin-top: 50px;
        margin-bottom: 60px;
    }
    .right{
        .title{
            color: #242728;
            font-size: 22px;
            margin-top: 29px;
            margin-bottom: 10px;
        }
        .about-list{
            li{
                font-size: 14px;
                color: #393a3c;
                padding: 8px 0;
                a{
                    &:hover{
                        color: $color-primary;
                    }
                }
            }
        }
    }
    .no-results-wrapper{
        .no-results{
            @include absoluteCenter;
            width: 100%;
            text-align: center;
            img{
                width: 25.53%;
            }
            .message{
                font-size: 22px;
                color: #242728;
                margin-top: 30px;
            }
        }
    }

</style>



