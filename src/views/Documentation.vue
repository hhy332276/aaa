<template>
    <div :style="{'minHeight':docMinHeight+'px'}" class="doc-container">

<!--        <BreadCrumb id="breadcrumb" :data="breadcrumb" :maxWidth="'1476px'"/>-->

        <!--zoomed image dialog-->
            <div @click="dialog.show = false" v-show="dialog.show" class="dialog">
                <img :src="dialog.imgSrc" alt="">
            </div>
        <!--zoomed image dialog-->

        <div @click="showVersionSelector= false" class="doc-wrapper doc-text-nav" :class="[fullWidth<=1280? commonWidthStyle1:'']">
            <div class="doc-nav card">
                <div @click.stop="toggleVersionSelection" class="version-number">
                    {{$t('versionNumber',{versionNum:docParams.version})}}
                    <SVGIcon class="caret-icon" :width="'4px'" :height="'7px'" icon="caret-filled-right"/>
                </div>
                <!--versions selection-->
                <div ref="selector" :class="{'fade-in-content':showVersionSelector}" class="selector hidden-scrollbar card">
                    <router-link :to="jumpToDocumnet('/documentation/details/'+version.lang+'/'+version.version+'/'+version.productId)"
                                 @click.native="selectDocumentationVersion(version.version)"
                        :class="{'current-value':version.version === docParams.version}"
                        :key="version.id" v-for="version in versions">{{version.version}}</router-link>
                </div>

                <h1 class="ellipsis">{{navTree.productName}}</h1>
                <div class="search-container">
                    <input @keyup.enter="search" v-model="keywords" type="text">
                    <div class="search-icon" @click="search">
                        <SVGIcon class="icon" :width="'16px'" :height="'16px'" icon="search"/>
                    </div>
                </div>
                <hr style="height:1px;border:none;border-top:1px solid #ebebeb;width:100%;" />
                <div :style="{'bottom':navBottom+'px'}" class="scrollable-nav hidden-scrollbar" ref="tree">
<!--                <div class="scrollable-nav hidden-scrollbar">-->
                    <!--these static links will only show in Atlas 200 DK-->
                    <router-link v-if="navTree.productName === 'Atlas 200 DK'" :to=overviewData.overViewUrl @click.native="viewOverviewPage" class="static-option">{{$t('overviewGuidelines')}}</router-link>
                    <router-link v-if="navTree.productName === 'Atlas 200 DK'" :to=experienceData.ExperienceUrl  @click.native="viewExperiencePage" class="static-option">{{$t('experienceGuidelines')}}</router-link>
                    <NavigationTree :key="navChild.code" :onNavClicked="navigationClicked" v-for="(navChild,index) in navTree.subMenu"
                                    :is-open=true :depth=0 :parent=navChild />
                </div>
            </div>

            <!--documentationHtml content-->
            <!--it will be hidden if any of the showOverviewStaticPage or showExperienceStaticPage is true-->
            <div class="support-section support-content" id="support-content">
                <div v-if="!(showOverviewStaticPage || showExperienceStaticPage)" class="support-body" :class="[fullWidth<=1280? commonWidthStyle2:'']">
                    <div class="wrapper card">
                        <div id="support-body" class="support-main">
                            <!--<div class="share">分享</div>-->

                            <div v-if="headerNavPositions.length > 0 && !(showOverviewStaticPage || showExperienceStaticPage)&&fullWidth<=1280" style="position: static;left: auto;top: auto;background: #f4f6fa;width:auto;border:none;margin: 0px;" class="doc-header-nav card">
                                <h1>{{$t("readingNav")}}</h1>
                                <ul>
                                    <li :class="{'current-header':activeHeaderNavPositionIndex === index,'single-item':headerNavPositions.length === 1}" @click="scrollTo(header.id)" :key="index" v-for="(header,index) in headerNavPositions">
                                        {{header.title}}
                                    </li>
                                </ul>
                            </div>

                            <div class="document-breadcrumb">
                                <ul  class="breadcrumb">
                                    <li>
                                        <router-link to="/documentation">{{$t("documentation")}}<span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span></router-link>
                                    </li>
                                    <li>
                                        <router-link to="/documentation">{{navTree.productName}}<span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span></router-link>
                                    </li>
                                    <li>
                                        <span @click=breadClick(activeUrlList()[index]) v-for="(item,index) in activeList()" :disabled="index==activeList().length-1" :key="index" :class="[index==activeList().length-1? activeTitleStyle:commonTitleStyle]" >{{item}}<span v-if="index<activeList().length-1">&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span></span>
                                    </li>
                                </ul>
                            </div>

                            <div v-html="documentationHtml" class="help-content">
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="support-body is-intro">
                    <div class="wrapper card">
                        <div class="support-main static-content">
                            <!--overview-->
                            <div class="overview-wrapper" v-if="showOverviewStaticPage">
                                <div class="title">{{overviewData.intro.title}}</div>
                                <div class="overview-info-row">
                                    <div class="mini-title">{{overviewData.intro.subTitle}}</div>
                                    <div class="intro">
                                        <div class="col-mb-6 description">
                                            <div class="text">{{overviewData.intro.description}}</div>
                                            <div class="links">
                                                <!--<router-link to="/" class="button">{{$t('detailedDoc')}}</router-link>-->
                                                <router-link @click.native="viewExperiencePage" :to=overviewData.quickExperience class="button filled" style= 'padding: 0 20px;'>{{$t('quickExperience')}}</router-link>
                                            </div>
                                        </div>
                                        <div class="col-mb-6 intro-img">
                                            <img src="/imgs/overview_pic01.png" alt="">
                                        </div>
                                    </div>
                                </div>

                                <div class="overview-info-row app-dev">
                                    <div class="title">{{overviewData.appDev.title}}</div>
                                    <div class="steps">
                                        <a :href="step.url" class="single-step" :key="index" v-for="(step,index) in overviewData.appDev.steps">
                                            <img class="step-num" :src="step.stepNum" alt="">
                                            <img :src="step.icon" class="icon" alt="">
                                            <div class="text">{{step.name}}</div>
                                        </a>
                                    </div>
                                </div>

                                <div class="overview-info-row app-transplant">
                                    <div class="title">{{overviewData.appTransplant.title}}</div>
                                    <div>
                                        <div class="col-mb-6 banner">
                                            <img :src="overviewData.appTransplant.banner" alt="">
                                        </div>
                                        <div class="col-mb-6">
                                            <div class="text">{{overviewData.appTransplant.description}}</div>
                                            <router-link class="button filled" :to=overviewData.appTransplant.url>{{$t('detailedDoc')}}</router-link>
                                        </div>
                                    </div>
                                </div>

                                <div class="overview-info-row performance-tuning">
                                    <div class="title">{{overviewData.performanceTuning.title}}</div>
                                    <div>
                                        <div class="col-mb-6">
                                            <div class="text">{{overviewData.performanceTuning.description}}</div>
                                            <router-link class="button filled" :to=overviewData.performanceTuning.url>{{$t('detailedDoc')}}</router-link>
                                        </div>
                                        <div class="col-mb-6 banner">
                                            <img :src="overviewData.performanceTuning.banner" alt="">
                                        </div>
                                    </div>
                                </div>

                                <div class="overview-info-row api">
                                    <div class="title">{{overviewData.api.title}}</div>
                                    <div class="content">
                                        <div :key="index" v-for="(api,index) in overviewData.api.content" class="col-mb-6 single-api">
                                            <router-link :to=api.link class="link">{{api.title}}</router-link>
                                            <div class="introduction">{{api.intro}}</div>
                                        </div>
                                    </div>
                                </div>


                                <div class="overview-info-row api">
                                    <div class="title">{{overviewData.others.title}}</div>
                                    <div class="content">
                                        <div :key="index" v-for="(other,index) in overviewData.others.content" class="col-mb-6 single-api">
                                            <router-link :to=other.link class="link">{{other.title}}</router-link>
                                            <div class="introduction">{{other.intro}}</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="overview-info-row faq">
                                    <div class="title">{{overviewData.faq.title}}</div>
                                    <div class="content">
                                        <router-link :to=question.answerLink :key="index" v-for="(question,index) in overviewData.faq.questions" class="col-mb-6 single-question">
                                            [{{index + 1}}]{{question.intro}}
                                        </router-link>
                                    </div>
                                    <div class="btn-wrapper">
                                        <router-link  :to=overviewData.moreUrl class="button filled">{{$t("more")}}</router-link>
                                    </div>
                                </div>
                            </div>

                            <!--experience-->
                            <div class="experience-wrapper" v-if="showExperienceStaticPage">
                                <div class="info-row">
                                    <div class="title first-title">{{experienceData.intro.title}}</div>
                                    <div>{{experienceData.intro.top}}</div>
                                    <div class="banner"><img :src="experienceData.intro.imgUrl" alt=""></div>
                                    <div v-show="docParams.language=='zh'">{{experienceData.intro.middle}}<a class='link' target="_blank" href='https://bbs.huaweicloud.com/forum/thread-14127-1-1.html'> FAQ </a>{{experienceData.intro.middle_1}}<a class='link' target="_blank" href='https://bbs.huaweicloud.com/forum/forum-726-1.html'> LINK </a></div>
                                    <div v-show="docParams.language=='zh'" class="banner"><img :src="experienceData.intro.imgUrl_1" alt=""></div>
                                    <div>{{experienceData.intro.bottom}}</div>
                                </div>
                                <div class="info-row">
                                    <div class="title">{{experienceData.parts.title}}</div>
                                    <p :key="i" v-for="(item,i) in experienceData.parts.list" v-html="item"></p>
                                </div>
                                <div class="info-row">
                                    <div class="title">{{experienceData.devTools.title}}</div>
                                    <div class="list">
                                        <div class="single-item" :key="index" v-for="(info,index) in experienceData.devTools.info">
                                            <span class="label-num">{{index + 1}}</span>
                                            <div class="list-title">{{info.title}}</div>
                                            <li :key="i" v-for="(item,i) in info.list" v-html="item"></li>
                                        </div>
                                    </div>
                                </div>

                                <div class="info-row">
                                    <div class="title">{{experienceData.deploy.title}}</div>
                                    <div class="list">
                                        <div class="single-item" :key="index" v-for="(info,index) in experienceData.deploy.info">
                                            <span class="label-num">{{index + 1}}</span>
                                            <div class="list-title">{{info.title}}</div>
                                            <li :key="i" v-for="(item,i) in info.list" v-html="item"></li>
                                        </div>
                                    </div>
                                </div>

                                <div class="info-row">
                                    <div class="title">{{experienceData.connect.title}}</div>
                                    <p :key="i" v-for="(item,i) in experienceData.connect.list" v-html="item"></p>
                                    <div class="banner connect"><img :src="experienceData.connect.imgUrl" alt=""></div>
                                </div>

                                <div class="info-row">
                                    <div class="title">{{experienceData.configuration.title}}</div>
                                    <div>
                                        <p :key="i" v-for="(item,i) in experienceData.configuration.list" v-html="item"></p>
                                    </div>
                                    <div class="banner connect"><img :src="experienceData.configuration.imgUrl" alt=""></div>
                                </div>

                                <div class="info-row">
                                    <div class="title">{{experienceData.appDev.title}}</div>
                                    <div>
                                        <li :key="i" v-for="(item,i) in experienceData.appDev.list" v-html="item"></li>
                                    </div>
                                    <div class="banner connect"><img :src="experienceData.appDev.imgUrl" alt=""></div>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <!--right header nav-->
            <!--hide it when you show the static pages-->

            <div v-if="headerNavPositions.length > 0 && !(showOverviewStaticPage || showExperienceStaticPage)&&fullWidth>1280" :style="{'left':headerNavLeftOffset+'px'}" class="doc-header-nav card">
                <h1>{{$t("readingNav")}}</h1>
                <ul>
                    <li :class="{'current-header':activeHeaderNavPositionIndex === index,'single-item':headerNavPositions.length === 1}" @click="scrollTo(header.id)" :key="index" v-for="(header,index) in headerNavPositions">
                        {{header.title}}
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>


<script>
    import http from "../utils/axiosConfig";
    let VueScrollTo = require('vue-scrollto');
    import NavigationTree from "../components/NavigationTree";
    import SVGIcon from "../components/SVGIcon";
    import BreadCrumb from "../components/BreadCrumb";
    import {constants,settings} from "../../public/static/index";
    import {eventBus,eventBusActions} from "../event_bus";
    import doc from "../static_data/documentation";
    export default {
        components:{
            NavigationTree,
            SVGIcon,
            BreadCrumb
        },
        data(){
            return {
                documentationJson:doc,
                overviewStaticUrl:"overview",
                experienceStaticUrl:"experience",
                showOverviewStaticPage: false,
                showExperienceStaticPage: false,
                isFirstLoadedStaticPage:false,
                lang:"",
                dialog:{
                    imgSrc:"",
                    show:false
                },
                breadcrumb:[
                    {
                        "titleKey":"documentation",
                        "link":"/documentation"
                    },
                    {
                        "titleKey":"documentationDescription"
                    }
                ],
                navBottom:0,
                docMinHeight:0,
                scrollToOptions:{
                    container: 'body',
                    easing: 'ease-in',
                    offset: 500,
                    force: true,
                    cancelable: true,
                    onStart: false,
                    onDone: false,
                    onCancel: false,
                    x: false,
                    y: true
                },
                showVersionSelector:false,
                versions: [],
                navTree:[],
                documentationHtml:"",
                docParams:{
                    language:"",
                    version:"",
                    fileUri:"",
                    productId:"",
                    docId:""
                },
                headerNavLeftOffset:0,
                headerNavPositions:[],
                activeHeaderNavPositionIndex:0,
                canShowDocumentation:false,
                keywords:"",
                loading:false,
                fullWidth: document.documentElement.clientWidth,
                commonWidthStyle1:"common_width_style1",
                commonWidthStyle2:"common_width_style2",
                activeTitleStyle:"active_title_style",
                commonTitleStyle:"common_title_style",
            }
        },
        watch: {
            '$route' (to,from) {
                if(to.path!==from.path){
                    this.docParams.fileUri = to.path.split("/").slice(-1)[0]
                    this.docParams.language = this.$route.params.language
                    this.$i18n.locale = this.$route.params.language
                    sessionStorage.setItem("lang",this.$route.params.language)
                    this.getNavigationTree();
                }
                if(to.path && to.path.indexOf("/experience") > -1){
                    this.showOverviewStaticPage= false;
                    this.showExperienceStaticPage= true;
                    return;
                }

                if(to.path && to.path.indexOf("/overview") > -1){
                    this.showOverviewStaticPage= true;
                    this.showExperienceStaticPage= false;
                    return;
                }
                if(from.path && (from.path.indexOf("/overview") > -1) && to.path && (to.path.indexOf('/documentation') > -1)){
                    //user may be coming from the overview page to the documentation
                    this.showOverviewStaticPage= false;
                    this.showExperienceStaticPage= false;
                    this.docParams.language = this.$route.params.language;
                    this.docParams.version = this.$route.params.version;
                    this.docParams.fileUri = this.$route.params.fileUri;
                    this.docParams.productId = this.$route.params.productId;
                    this.loadPage();
                }
            }
        },
        computed:{
            overviewData(){
                if(this.documentationJson.static.overview[this.$route.params.version][this.$i18n.locale]){
                    return this.documentationJson.static.overview[this.$route.params.version][this.$i18n.locale];
                }
                //return Chinese page if the specific language isn't available
                return this.documentationJson.static.overview[this.$route.params.version]["zh"];
            },
            experienceData(){
                if(this.documentationJson.static.experience[this.$route.params.version][this.$i18n.locale]){
                    return this.documentationJson.static.experience[this.$route.params.version][this.$i18n.locale];
                }
                //return Chinese page if the specific language isn't available
                return this.documentationJson.static.experience[this.$route.params.version]["zh"];
            }
        },
        created() {
            this.fullWidth = document.documentElement.clientWidth;
            if(this.$route.params.language){
                if(sessionStorage.getItem('lang') ){
                    this.docParams.language = sessionStorage.getItem('lang')
                }else{
                    this.docParams.language = this.$route.params.language;
                    sessionStorage.setItem("lang",this.$route.params.language)
                    this.$i18n.locale=this.$route.params.language
                }
            }else{
                this.docParams.language = sessionStorage.getItem('lang')
            }
            this.docParams.version = this.$route.params.version;
            this.docParams.fileUri = this.$route.params.fileUri;
            this.docParams.productId = this.$route.params.productId;
            sessionStorage.setItem('docParams',JSON.stringify(this.docParams));
            this.getNavigationTree();
            this.getDocVersions();
            this.activeList();
            this.activeUrlList();
            var self = this;
            eventBus.$on(eventBusActions.LANGUAGE_CHANGED,(e)=>{
                // if(sessionStorage.getItem('docParams')){
                //     var docParams = JSON.parse(sessionStorage.getItem('docParams'));
                    self.docParams.language = e;
                    // self.docParams.version = docParams.version;
                    // self.docParams.fileUri = docParams.fileUri;
                    // self.docParams.productId = docParams.productId;
                    self.getNavigationTree();
                    self.getDocVersions();
                    this.activeList();
                    this.activeUrlList();
                    history.go(0)
                // }
            });
        },
        beforeDestroy() {
            eventBus.$off(eventBusActions.LANGUAGE_CHANGED);
        },
        mounted() {
            if(this.docParams.fileUri){
                switch (this.docParams.fileUri) {
                    case this.overviewStaticUrl:
                        this.showOverviewStaticPage = true;
                        this.showExperienceStaticPage = false;
                        /*this parameter will help us decide whether to reposition the header navigation or not*/
                        this.isFirstLoadedStaticPage = true;
                        break;
                    case this.experienceStaticUrl:
                        this.showOverviewStaticPage = false;
                        this.showExperienceStaticPage = true;
                        /*this parameter will help us decide whether to reposition the header navigation or not*/
                        this.isFirstLoadedStaticPage = true;
                        break;
                    default:
                        this.loadPage();
                        /*this parameter will help us decide whether to reposition the header navigation or not*/
                        this.isFirstLoadedStaticPage = false;
                        break;
                }
            }

            this.positionHeaderNavigation();
            this.calculateNavMaxHeight();
            window.addEventListener("resize",()=>{
                this.positionHeaderNavigation();
                this.getHeaderItemsAndPositions();
                this.calculateNavMaxHeight();
                this.adjustNavBottom();
            });

            window.addEventListener("scroll",()=>{
                this.fireScrollEvents();
            });
            window.onscroll = ()=>{
                this.fireScrollEvents();
            };
            this.fullWidth = document.documentElement.clientWidth;
            window.onresize = () => {
                return (() => {
                    this.fullWidth = document.documentElement.clientWidth;
                })();
            };
        },
        methods:{
            jumpToDocumnet(url){
                let docVersion = url.split("/")[4];
                let docProduct = url.split("/")[5];
                let docLang = this.$i18n.locale;
                if(docProduct==="f4f39edd90e011e9a97afa163e714aa5"){
                    if(docLang=="zh"){
                        if(docVersion=="1.1.1.0"){
                            return url+"/zh-cn_topic_0166729836.html"
                        }else{
                            return url+"/zh-cn_topic_0178961794.html"
                        }
                    }else{
                        if(docVersion=="1.1.1.0"){
                            return url+"/en-us_topic_0166729836.html"
                        }else{
                            return url+"/en-us_topic_0178961794.html"
                        }
                    }
                }else if(docProduct==="3552547e3e6e4e06b19269d8832a4ea4"){
                    if(docLang=="zh"){
                        return url+"/zh-cn_topic_0176420240.html"
                    }else{
                        return url+"/en-us_topic_0176420240.html"
                    }
                }else if(docProduct==="9ec14623b52d46e286dce11db5ada63c"){
                    if(docLang=="zh"){
                        return url+"/zh-cn_topic_0176420185.html"
                    }else{
                        return url+"/en-us_topic_0176420185.html"
                    }
                }else if(docProduct==="a71bd3a961d546b7881bb7f25417ad8e"){
                    if(docLang=="zh"){
                        return url+"/zh-cn_topic_0175394093.html"
                    }else{
                        return url+"/en-us_topic_0175394093.html"
                    }
                }
            },
            changeUrlByVersion(url){
                let urlList = url.split("/")
                let urlVersion = urlList[4]
                if(urlVersion!==this.docParams.version){
                    urlList.splice(4,1,this.docParams.version)
                }
                let endUrl = urlList.join("/")
                return endUrl
            },
            breadClick(url){
                this.docParams.fileUri = url.split("/").slice(-1)[0]
                this.getNavigationTree();
            },
            activeList(){
                let activeList=[];
                let activeTitle=sessionStorage.getItem("activeItem");
                for(let i=0;i<=7;i++){
                    let item = sessionStorage.getItem("activeItem"+i);
                    if(item){
                        let titleName = item.split(":")[0];
                        activeList.push(titleName);
                    }
                }
                if(activeTitle){
                    activeList.push(activeTitle.split(":")[0]);
                }
                return activeList
            },
            activeUrlList(){
                let activeUrlList=[];
                let baseUrl='/documentation/details/' + this.$route.params.language + '/' + this.$route.params.version +'/' + this.$route.params.productId + '/';
                let activeTitle=sessionStorage.getItem("activeItem");
                for(let i=0;i<=7;i++){
                    let item = sessionStorage.getItem("activeItem"+i);
                    if(item){
                        let titleUrl = item.split(":")[1];
                        let activeUrl =baseUrl + titleUrl;
                        activeUrlList.push(activeUrl)
                    }
                }
                if(activeTitle){
                    activeUrlList.push(baseUrl +activeTitle.split(":")[1]);
                }
                return activeUrlList
            },
            viewOverviewPage(){
                this.showOverviewStaticPage= true;
                this.showExperienceStaticPage= false;
            },
            viewExperiencePage(){
                this.showOverviewStaticPage= false;
                this.showExperienceStaticPage= true;
            },
            toggleVersionSelection(){
                this.showVersionSelector = !this.showVersionSelector;
                this.$refs.selector.focus();
            },
            scrollTo(headerId){
                //500 is the animation time in milliseconds
                VueScrollTo.scrollTo(`#${headerId}`, 500, this.scrollToOptions)
            },
            selectDocumentationVersion(versionNumber){
                this.showVersionSelector = false;
                history.go(0)
            },
            search(){
                if(this.keywords.trim() === ""){
                    return;
                }
                // let routeData = this.$router.resolve({path:`/documentation/search/${this.docParams.language}/${encodeURIComponent(this.keywords)}/1/10/${this.docParams.productId}/${this.navTree.id}`});
                this.$router.push({path:`/documentation/search/${this.docParams.language}/${encodeURIComponent(this.keywords)}/1/10/${this.docParams.productId}/${this.navTree.id}`});
                // window.open(routeData.href,"_self");
            },
            navigationClicked(clickedItem,shouldLoadContent){
                if(shouldLoadContent){
                    //hide the static pages, just incase the user was visiting the static pages
                    this.showOverviewStaticPage = false;
                    this.showExperienceStaticPage = false;
                    this.$router.push(clickedItem.uri);
                    this.docParams.fileUri = clickedItem.uri;
                    this.loadPage();
                }
                this.activeList()
                this.activeUrlList()
            },
            getHeaderItemsAndPositions(){
                if(!document.querySelector(".help-content")){
                    return;
                }
                let headerItems = document.querySelector(".help-content").getElementsByTagName("h4");
                this.headerNavPositions = [];
                /*get the header height and the breadcrumb height and subtract from the header item
                * offset top to get the exact top position below the header and teh breadcrumb*/
                let headerHeight = 55; //take this as a default height
                if(document.getElementById("nav-bar")){
                    headerHeight = document.getElementById("nav-bar").clientHeight;
                }
                // let breadCrumbHeight = 55;
                // if(document.getElementById("breadcrumb-container")){
                //     breadCrumbHeight = document.getElementById("breadcrumb-container").clientHeight;
                // }
                //this will reduce the given height from the scrollTo position
                // this.scrollToOptions.offset = -Math.abs(headerHeight + breadCrumbHeight);
                this.scrollToOptions.offset = -Math.abs(headerHeight);
                for(let i=0;i<headerItems.length;i++){
                    // let id = `header-${parseInt(headerItems[i].getBoundingClientRect().top - headerHeight - breadCrumbHeight)}`;
                    let id = `header-${parseInt(headerItems[i].getBoundingClientRect().top - headerHeight)}`;
                    headerItems[i].setAttribute("id",id);
                    this.headerNavPositions.push({
                        "title":headerItems[i].innerText,
                        // "top":headerItems[i].getBoundingClientRect().top - headerHeight - breadCrumbHeight,
                        "top":headerItems[i].getBoundingClientRect().top - headerHeight,
                        "id":id
                    });
                }
            },
            alterImgsTagAttributes(){
                if(!document.querySelector(".help-content")){
                    return;
                }
                let images = document.querySelector(".help-content").getElementsByTagName("img");
                //this will avoid seeing broken images icon when the first unchanged image sources fail to load the images
                if(images.length === 0){
                    this.canShowDocumentation = true;
                }
                for(let i=0;i<images.length;i++){
                    images[i].removeAttribute("title");
                    let originalSrc = images[i].getAttribute("src");

                    images[i].addEventListener("click",()=>{
                        this.dialog.imgSrc = originalSrc;
                        this.dialog.show = true;
                    });

                    if(i === images.length-1){
                        this.canShowDocumentation = true;
                    }
                }
            },
            addCopyAndThemeButtons(){
                let codesContainers = document.querySelector(".help-content").querySelectorAll(".screen");
                for(let i=0;i<codesContainers.length;i++){
                    let wrapper = document.createElement("div");
                    wrapper.setAttribute("class","code-wrapper");
                    wrapper.innerHTML = codesContainers[i].innerHTML;
                    codesContainers[i].innerHTML = "";


                    let copyBtn = document.createElement("div");
                    copyBtn.innerHTML=`&nbsp;${this.$t("copy")}`;
                    copyBtn.addEventListener("click",()=>{
                        let content = codesContainers[i].querySelector(".code-wrapper").innerHTML;
                        let textarea = document.createElement("textarea");
                        textarea.value = content;
                        textarea.style.opacity = 0;
                        textarea.style.width = 0;
                        document.body.appendChild(textarea);
                        textarea.select();
                        document.execCommand("copy");
                        document.body.removeChild(textarea);
                    });

                    let themeBtn = document.createElement("div");
                    themeBtn.innerHTML=`${this.$t("theme")}&nbsp;|`;
                    themeBtn.addEventListener("click",()=>{
                        codesContainers[i].classList.toggle("dark-theme");
                    });

                    let btnsWrapper = document.createElement("div");
                    btnsWrapper.setAttribute("class","btns-wrapper");
                    btnsWrapper.appendChild(themeBtn);
                    btnsWrapper.appendChild(copyBtn);

                    codesContainers[i].appendChild(wrapper);
                    codesContainers[i].appendChild(btnsWrapper);

                }
            },
            loadPage(){
                this.loading = true
                http.post("product/queryDocContentByProductDoc",{"lang":this.docParams.language,
                    "productId":this.docParams.productId,"version":this.docParams.version,
                "uri":this.docParams.fileUri})
                    .then((res)=>{
                        this.canShowDocumentation = false;
                        if(constants.responseCode.SUCCESS === res.code){
                            this.$router.replace({
                                path:'/documentation/details/' + this.docParams.language + '/' + this.docParams.version +'/' + this.docParams.productId + '/' + this.docParams.fileUri
                            })
                            if(res.data.content !== "") {
                                this.documentationHtml = res.data.content;
                                /*reposition the header navigation just incase the page started with loading the static page*/
                                if (this.isFirstLoadedStaticPage) {
                                    this.positionHeaderNavigation();
                                }
                                setTimeout(() => {
                                    this.alterImgsTagAttributes();
                                    this.getHeaderItemsAndPositions();
                                    //this.addCopyAndThemeButtons();
                                }, 200);
                            }
                        }

                    })
                    .catch(()=>{

                    })
            },
            getInitialUri(content){
                if(content.children && content.children.length > 0){
                    this.getInitialUri(content.children[0]);
                }else{
                    this.docParams.fileUri = content.uri;
                }
            },
            getNavigationTree(){
                http.post("product/queryProductDocByProduct",{"lang":this.docParams.language,
                    "productId":this.docParams.productId,"version":this.docParams.version}).then((res)=>{
                    if(constants.responseCode.SUCCESS === res.code){
                        this.navTree = res.data;
                        if(!this.docParams.fileUri) {
                            this.docParams.fileUri = this.navTree.subMenu[0].uri;
                            // if (this.navTree.subMenu[0].children && this.navTree.subMenu[0].children.length > 0) {
                            //     //this.docParams.fileUri will be generated by the function getInitialUri when the content is too deep
                            //     this.getInitialUri(this.navTree.subMenu[0]);
                            // } else {
                            //     this.docParams.fileUri = this.navTree.subMenu[0].uri;
                            // }
                        }else{
                            if(this.docParams.language!==this.docParams.fileUri.substring(0,2)){
                                if(this.docParams.fileUri!=="experience"&&this.docParams.fileUri!=="overview"){
                                    this.docParams.fileUri = this.navTree.subMenu[0].uri;
                                }
                                // if (this.navTree.subMenu[0].children && this.navTree.subMenu[0].children.length > 0) {
                                //     //this.docParams.fileUri will be generated by the function getInitialUri when the content is too deep
                                //     this.getInitialUri(this.navTree.subMenu[0]);
                                // } else {
                                //     this.docParams.fileUri = this.navTree.subMenu[0].uri;
                                // }
                            }

                        }
                            //change the browser url accordingly
                            // this.$router.replace({
                            //     path: '/refresh'
                            // })
                            //this.$router.push(`${this.docParams.productId}/${this.docParams.fileUri}`);
                        this.docParams.docId = res.data.id;
                        this.loadPage();
                    }else if (res.code =="406"){
                        this.$router.push('/documentation');
                    }
                }).catch((err)=>{

                });
            },
            getDocVersions(){
                http.post("product/queryProductDocByProductId",{"lang":this.docParams.language,
                    "productId":this.docParams.productId}).then((res)=>{
                    if(constants.responseCode.SUCCESS === res.code){
                        this.versions = res.data;
                    }
                }).catch((err)=>{

                });
            },
            positionHeaderNavigation(){
                /*Don't delete this setTimeout because for some reasons the browsers were having an error in
                    calculating the headerNavLeftOffset*/
                setTimeout(()=>{
                    if(document.querySelector("#support-body")){
                        let bounds = document.querySelector("#support-body").getBoundingClientRect();
                        //14 is the margin space specified in the design
                        this.headerNavLeftOffset = bounds.left + bounds.width + 14;
                    }
                },400);
            },
            calculateNavMaxHeight(){
                if(document.querySelector(".scrollable-nav")){
                    let offsetTop = document.querySelector(".scrollable-nav").getBoundingClientRect().top;
                    let footerHeight = document.getElementById("footer").clientHeight;
                    // let breadcrumbHeight = document.getElementById("breadcrumb").clientHeight;
                    //30px is the padding bottom of the navigation content from the footer
                    this.docMinHeight = window.innerHeight - footerHeight;

                }
            },
            adjustNavBottom(){
                if(!document.getElementById("footer")){
                    return;
                }
                let footerHeight = document.getElementById("footer").clientHeight;
                let scrollY = window.scrollY || window.pageYOffset;
                if(document.body.offsetHeight - (window.innerHeight + scrollY + footerHeight) <= 0){
                    this.navBottom = Math.abs(document.body.offsetHeight - (window.innerHeight + scrollY + footerHeight));
                }else{
                    this.navBottom = 0;
                }
            },
            fireScrollEvents(){
                for(let i=0;i<this.headerNavPositions.length;i++){
                    //30px I added here is just a random number to calibrate the accuracy.
                    let scrollY = window.scrollY || window.pageYOffset;
                    if(this.headerNavPositions[i].top <= scrollY + 30){
                        this.activeHeaderNavPositionIndex = i;
                    }
                }

                this.adjustNavBottom();
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/css/mixins";
    @import "../assets/css/partials";
    .doc-container{
        .common_width_style1 {
            margin:0px 30px 0px 0px !important;
        }
        .common_width_style2 {
            padding-right: 0px !important;
        }
        .active_title_style {
            pointer-events:none;
            color: $color-primary !important;
        }
        .common_title_style{
            cursor: pointer;
            color:#000000;
        }
        background: $white-bg;
        .dialog{
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.6);
            z-index: 20;
            cursor: zoom-out;
            img{
                @include absoluteCenter;
                max-width: 100%;
                max-height: 100%;
            }
        }
        .card{
            background: $white-bg;
            /*box-shadow: 1px 1px 1px rgba(206, 206, 206, 0.5);*/
        }
        h1{
            font-size: 22px;
            color: #000000;
            font-weight: normal;
        }
        .doc-nav{
            user-select: none;
            position: fixed;
            width: 300px;
            z-index: 7;
            overflow-y: hidden;
            top: 75px;
            bottom: 0;
            /*max-height: calc(100% - 200px);*/
            padding: 25px 0;
            background: #f5f9ff;
            /*box-shadow: 1px 1px 1px rgba(206, 206, 206, 0.5);*/
            .version-number{
                padding-left: 30px;
                font-size: 14px;
                color: $black-text;
                cursor: pointer;
                display: inline-block;
                margin-bottom: 5px;
                .caret-icon{
                    display: inline-block;
                    vertical-align: middle;
                    transform: rotate3d(0,0,01,90deg);
                    margin-left: 5px;
                }
            }
            .selector{
                @include absoluteXCenter;
                top: 50px;
                width: 75%;
                z-index: 99;
                border: 1px solid #cecece;
                max-height: 200px;
                overflow-y: auto;
                display: none;
                border-radius: 4px;
                a{
                    display: block;
                    color: #666A75;
                    padding: 10px 10px 10px 15px;
                    &:hover{
                        color: $white-color;
                        cursor: pointer;
                        background: $color-primary;
                    }
                    /*<!--&.current-value{-->*/
                    /*<!--    color: $white-color;-->*/
                    /*<!--    background: $color-primary;-->*/
                    /*<!--}-->*/
                }
                &.fade-in-content{
                    display: block;
                    animation: fadeIn 500ms;
                }
            }
            h1{
                padding-left: 30px;
                padding-right: 15px;
            }
            .search-container{
                padding: 0 30px;
                position: relative;
                margin: 20px 0;
                input{
                    border: 1px solid #CCCCCC;
                    border-radius: 2px;
                    height: 30px;
                    padding-left: 15px;
                    padding-right: 55px;
                    width: 240px;
                    &:focus{
                        border: 1px solid $color-primary;
                        + .search-icon{
                            border-left: 1px solid $color-primary;
                        }
                    }
                }
                .search-icon{
                    @include absoluteYCenter;
                    right: 30px;
                    width: 40px;
                    height: 28px;
                    border-left: 1px solid #cccccc;
                    cursor: pointer;
                    .icon{
                        @include absoluteCenter;
                        width: 28px;
                        height: 28px;
                    }
                }
            }
            .scrollable-nav{
                overflow-y: auto;
                position: absolute;
                bottom: 0;
                top: 150px;
                width: 100%;
                z-index: 3;
                padding: 5px 0 0 15px;
                .static-option{
                    color: #666A75;
                    padding: 11px 10px 11px 15px;
                    display: block;
                    &:hover,
                    &.router-link-exact-active,
                    &.router-link-active{
                        color: $color-primary;
                        cursor: pointer;
                        background: #e8eff8;
                    }
                }
            }
            li{
                color: #666A75;
                padding: 11px 10px 11px 15px;
                &:hover{
                    color: $color-primary;
                    cursor: pointer;
                    /*background: #e8eff8;*/
                }
            }
            .active{
                color: $color-primary;
                /*background: #e8eff8;*/
            }
            .is-open{
                #Document-Detial{
                    fill: $color-primary;
                }
                .caret-icon{
                    transform: translateY(-50%) rotate3d(0,0,1,45deg);
                }
            }
        }
        .doc-header-nav{
            border-left:2px solid $color-primary;
            user-select: none;
            position: fixed;
            width: 300px;
            z-index: 7;
            overflow-y: auto;
            top: 119px;
            max-height: calc(100% - 200px);
            padding: 0px 0px 0px 30px;
            margin: 0px 0px 0px 30px;
            li{
                cursor: pointer;
                padding-top: 12px;
                padding-bottom: 12px;
                position: relative;
                padding-left: 20px;
                &.current-header{
                    color: $color-primary;
                    &:before{
                        background-image: url("/imgs/blue_dot.png");
                    }
                }
                &:hover{
                    color: $color-primary;
                }
                &:before{
                    @include absoluteYCenter;
                    display: block;
                    content: "";
                    width: 13px;
                    height: 13px;
                    border-radius: 50%;
                    padding: 3px;
                    background-image: url("/imgs/gray_dot.png");
                    background-repeat: no-repeat;
                    background-size: cover;
                    left: 0;
                    z-index: 9;
                }
                &:after{
                    position: absolute;
                    display: block;
                    content: "";
                    width: 1px;
                    height: 100%;
                    border-radius: 50%;
                    background: #CCCCCC;
                    left: 6px;
                    top: 0;
                }
                &:first-child{
                    &:after{
                        top: 50%;
                    }
                }
                &:last-child{
                    margin-bottom: 0;
                    &:after{
                        height: 50%;
                    }
                }
                &.single-item{
                    &:after{
                        display: none;
                    }
                }
                .caret-icon{
                    display: inline-block;
                    vertical-align: middle;
                    width: 10px;
                    height: 10px;
                    margin-right: 10px;
                }
            }
        }
        .doc-wrapper{
            position: relative;
            /*max-width: 1476px;*/
            margin: 0 136px 0 120px;
        }
        .doc-text-nav{
            padding-top: 20px;
            /*padding-left: 20px;*/
            /*padding-right: 20px;*/
        }
        .support-body{
            padding-left: 300px;
            padding-right: 254px;
            padding-bottom: 110px;
            &.is-intro{
                padding-right: 0;
            }
            .screen{
                background: $gray-site-bg-color;
                padding: 30px 20px 20px 20px;
                position: relative;
                .btns-wrapper{
                    position: absolute;
                    top: 10px;
                    right: 26px;
                    div{
                        display: inline-block;
                        color:$color-primary;
                        cursor: pointer;
                        user-select: none;
                    }
                }
                &.dark-theme{
                    background: #000;
                    .code-wrapper{
                        color: $white-color;
                    }
                }
            }
        }
        .support-content{
            padding-top: 0;
            .imgResize{
                height: auto;
            }
        }
        .support-content .support-body .wrapper{
            /*margin-top: 15px;*/
            padding-left: 0;
        }
        .support-content .support-body .wrapper .support-main{
            padding: 0 30px 84px 30px;
            /*287px is calculated by adding the top and bottom content height,leave the min-height to avoid the
            footer from overlapping the left navigation when the documentation content is very little*/
            min-height: calc(100vh - 287px);
            position: relative;
            user-select: text;
            .share{
                position: absolute;
                top: 30px;
                right: 38px;
                color: $color-primary;
                cursor: pointer;
            }
            &.static-content{
                padding: 30px 0 60px 30px;
            }
            .document-breadcrumb {
                margin-top: 30px;
                ul li{
                    display: inline-block;
                }
            }
        }
        @keyframes fadeIn {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
        .overview-wrapper{
            .title{
                color: #000000;
                text-align: center;
                font-size: 28px;
                margin-bottom: 60px;
            }
            .overview-info-row{
                padding: 0 8%;
                border-bottom: 1px solid #e0e0e0;
                .banner{
                    padding: 0 4.87%;
                }
                .mini-title{
                    color: #000000;
                    font-size: 22px;
                    margin-bottom: 40px;
                }
                .intro{
                    margin-bottom: 80px;
                    .description{
                        .text{
                            padding-right: 12.5%;
                        }
                        .links{
                            margin-top: 70px;
                            .button{
                                padding: 0;
                                text-align: center;
                                &:first-child{
                                    margin-right: 14px;
                                }
                            }
                        }
                    }
                    .intro-img{
                        img{
                            width: 100%;
                        }
                    }
                }
                &.app-dev{
                    .title{
                        margin: 60px 0;
                    }
                    .steps{
                        margin-bottom: 60px;
                        display: flex;
                        .single-step{
                            /*box-shadow: 0 0 9px 0 rgba(206, 206, 206, 0.41);*/
                            width: 18.44%;
                            text-align: center;
                            display: inline-block;
                            vertical-align: top;
                            margin-right: 8.74%;
                            position: relative;
                            cursor: pointer;
                            &:last-child{
                                margin-right: 0;
                            }
                            .icon{
                                width: 55.56%;
                                margin: 40px 0 30px 0;
                            }
                            .text{
                                padding: 0 10px;
                                margin-bottom: 30px;
                                color: $black-text-three;
                                font-size: 12px;
                                @include media(1380px){
                                    font-size: 14px;
                                }
                            }
                            .step-num{
                                position: absolute;
                                left: 0;
                                top: 0;
                                width: 22.22%;
                            }
                        }
                    }
                }
                &.app-transplant{
                    padding-bottom: 60px;
                    .title{
                        margin: 60px 0;
                    }
                    .banner{
                        img{
                            width: 100%;
                        }
                    }
                    .text{
                        margin-top: 40px;
                        padding-left: 7.58%;
                    }
                    .button{
                        margin-top: 60px;
                        margin-left: 7.58%;
                    }
                }
                &.performance-tuning{
                    padding-bottom: 60px;
                    .title{
                        margin: 60px 0;
                    }
                    .banner{
                        img{
                            width: 100%;
                        }
                    }
                    .text{
                        margin-top: 40px;
                        padding-right: 7.58%;
                    }
                    .button{
                        margin-top: 60px;
                    }
                }
                &.api{
                    border-bottom: none;
                    .title{
                        margin: 60px 0;
                    }
                    .content{
                        .single-api{
                            margin-bottom: 20px;
                            &:nth-child(2n){
                                padding-left: 30px;
                            }
                            &:nth-child(2n-1){
                                padding-right: 30px;
                            }
                            .link{
                                width: 30%;
                                padding-right: 20px;
                                display: inline-block;
                                vertical-align: top;
                                color: $color-primary;
                                text-decoration: underline;
                            }
                            .introduction{
                                width: 70%;
                                display: inline-block;
                                vertical-align: top;
                            }
                        }
                    }
                }
                &.faq{
                    border-bottom: none;
                    .title{
                        margin: 60px 0;
                    }
                    .content{
                        .single-question{
                            margin-bottom: 20px;
                            &:hover{
                                color: $color-primary;
                            }
                            &:nth-child(2n){
                                padding-left: 30px;
                            }
                            &:nth-child(2n-1){
                                padding-right: 30px;
                            }
                        }
                    }
                    .btn-wrapper{
                        text-align: center;
                    }
                }
            }
        }
        .experience-wrapper{
            .info-row{
                padding: 0 8%;
                padding-bottom: 40px;
                border-bottom: 1px solid #e0e0e0;
                .link{
                  color:#3d88ff;
                }
                &:last-child{
                    border-bottom: none;
                }
                .title{
                    color: #000000;
                    text-align: center;
                    font-size: 28px;
                    margin: 40px 0;
                    &.first-title{
                        margin-top: 0;
                    }
                }
                .banner{
                    padding: 0 9.87%;
                    img{
                        width: 100%;
                        padding: 40px 0;
                    }
                    &.connect{
                        img{
                            padding-bottom: 0;
                        }
                    }
                }
                .list{
                    .single-item{
                        position: relative;
                        padding-left: 60px;
                        margin-bottom: 20px;
                        .label-num{
                            position: absolute;
                            left: 0;
                            top: 0;
                            z-index: 3;
                            color: #ffffff;
                            width: 30px;
                            height: 30px;
                            text-align: center;
                            line-height: 30px;
                        }
                        .list-title{
                            color: $black-text-two;
                            font-size: 18px;
                            margin-bottom: 20px;
                            &:before{
                                position: absolute;
                                left: 0;
                                display: inline-block;
                                content: "";
                                width: 30px;
                                height: 30px;
                                background: $color-primary;
                                border-radius: 50%;
                            }
                        }
                        &:before{
                            display: block;
                            content: "";
                            position: absolute;
                            width: 2px;
                            height: 100%;
                            background: $color-primary;
                            left: 14px;
                            top: 30px;
                        }
                        &:last-child{
                            &:before{
                                display: none;
                            }
                        }
                    }
                }
                p{
                    list-style: disc;
                    color: $black-text-three;
                    a{
                        color: $color-primary;
                    }
                }
                li{
                    list-style: disc;
                    color: $black-text-three;
                    a{
                        color: $color-primary;
                    }
                }
            }
        }
    }


</style>



