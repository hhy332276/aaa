import {HWReport} from "./../public/static/index"
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Applications from './views/Applications'
import DocumentationHome from './views/DocumentationHome'
import Documentation from './views/Documentation'
import NotFound from './views/NotFound';
import Contact from './components/Contact';
import ApplicationDetails from './views/ApplicationDetails';
import News from './views/News';
import Colleges from './views/Colleges';
import Forum from "./views/Forum";
import Login from "./views/Login";
import EditorSample from "./views/EditorSample";
import MainRoute from "./views/MainRoute";
import Activity from "./views/Activity";
import TopicPosts from "./views/TopicPosts";
import PublishPost from "./views/PublishPost";
import PostDetails from  "./views/PostDetails"
import DocumentationSearchResults from "./views/DocumentationSearchResults";
import IndividualCourses from "./views/IndividualCourses";
import applicationCourses from "./views/applicationCourses";
import UniversityCooperation from "./views/UniversityCooperation";
import Resources from "./views/resource";
import PerfectionMaterial from "./views/perfectionMaterial";
import BasicInformation from "./views/basicInformation"
import ActivityDetails from "./views/ActivityDetails"
import SoftIntroduction from "./views/SoftIntroduction"
import bindingMailbox from "./views/bindingMailbox"
import modifyMailbox from "./views/modifyMailbox"
import ModifyEmail from "./views/ModifyEmail"
import ResourceDownload from "./views/ResourceDownload"
import Course from "./views/Course"
import About from "./views/About";

Vue.use(Router)

let router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect:'/home'
        },
        {
            path:"/login",
            component:Login
        },
        {
            path:"/",
            component:MainRoute,
            children:[
                // {
                //     path:"/home",
                //     component:Login
                // },
                {
                    path: '/home',
                    name: 'home',
                    component: Home
                },
                {
                    path: '/apps',
                    component: Applications
                },
                {
                    path: '/about',
                    name: 'about',
                    component: About,
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
                },
                {
                    path: '/documentation',
                    component: DocumentationHome
                },
                {
                    path: '/documentation/search/:lang/:keywords/:pageNum/:pageSize/:productId?/:docId?',
                    component: DocumentationSearchResults
                },
                {
                    path: '/documentation/details/:language/:version/:productId/:fileUri?',
                    component: Documentation
                },
                {
                    path:"/contact",
                    component:Contact
                },
                {
                    path:"/apps/applicationDetails/:index",
                    component:ApplicationDetails
                },
                {
                    path:"/news",
                    component:News
                },
                {
                    path:"/Institute/:id?",
                    component:Colleges
                },
                {
                    path:"/forum",
                    component:Forum
                },
                {
                    path:"/forum/topic/:topicName",
                    component:TopicPosts
                },
                //
                {
                    path:"/activity",
                    component:Activity
                },
                {
                    path:"/editor",
                    component:EditorSample
                },
                {
                    path:"/publishPost",
                    component:PublishPost
                },
                {
                    path:"/forum/postDetails",
                    component:PostDetails
                },
                {
                    path:"/activity/universityCooperation",
                    component:UniversityCooperation
                },
                {
                    path:"/Institute/individualCourses/:index",
                    component:IndividualCourses
                },
                {
                    path:"/Institute/applicationCourses/:index/:id?",
                    component:applicationCourses
                },
                {
                    path:"/resources",
                    component:Resources
                },
                {
                    path:"/perfectionMaterial",
                    component:PerfectionMaterial
                },
                {
                    path:"/basicInformation",
                    component:BasicInformation
                },
                {
                    path:"/activity/details",
                    component:ActivityDetails
                },
                {
                    path:"/softIntroduction",
                    component:SoftIntroduction
                },
                {
                    path:"/bindingMailbox",
                    component:bindingMailbox
                },
                {
                    path:"/modifyMailbox",
                    component:modifyMailbox
                },
                {
                    path:"/ModifyEmail/:nickname/:email",
                    component:ModifyEmail
                },
                {
                    path:'/ResourceDownload/:fileDirectory/:title/:fileId/:flag/:innerControl',
                    component:ResourceDownload
                },
                {
                    path:'/Course/:index',
                    component:Course
                },
                {
                    path:"*",
                    component:NotFound
                }
            ]
        }
    ]
});


/*
 * =======================
 * ROUTER GUARD
 * =======================
 * */

//Here is where we added route guards
router.beforeEach((to, from, next) => {
    //this will force the page to jump up after every page switch
    window.scrollTo(0,0);
    next();


});

router.afterEach((to,from)=>{
    //you can add all pages visit report in here
    HWReport.reportPageView(to.path);
});


export default router;



