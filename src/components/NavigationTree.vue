<template>
    <ul :class="{'opened-list':isOpen}"  >
        <li :style="{'padding-left':indent+'px'}" :class="{'active': getIsActive(parent.uri),
        'parents-padding':depth === 0,'level-zero':depth === 0,'level-one':depth === 1,'level-two':depth === 2,'level-three':depth === 3,
        'level-four':depth === 4,'level-five':depth === 5,'level-six':depth === 6,'level-seven':depth === 7,
        'is-open':isOpen}" class="title" @click="toggleChildren(parent)">
            <SVGIcon v-if="parent.children && parent.children.length > 0" class="caret-icon" :width="'4px'" :height="'7px'" icon="caret-filled-right"/>
            <div class="name" >{{parent.title}}</div>
        </li>
        <NavigationTree :onOpenParent="openParent" :onNavClicked="fireClick" :key="navChild.key" v-show="isOpen"
                        v-if="parent.children" v-for="navChild in parent.children" :parent=navChild :depth=depth+1  />
    </ul>
</template>

<script>
    import SVGIcon from "./SVGIcon";
    import {eventBus,eventBusActions} from "../event_bus";
    export default {
        name:"NavigationTree",
        props:{
            parent:{
                type: Object,
                required: true
            },
            depth:{
                type: Number,
                required: true
            },
            onNavClicked:{
                type: Function,
                required: false
            },
            onOpenParent:{
                type: Function,
                required: false
            }
        },
        components:{
            SVGIcon
        },
        data(){
            return {
                isOpen:false,
                currentFileUri:"",
            }
        },
        methods:{
            fireClick(clickedItem,isOpen){
                this.onNavClicked(clickedItem,isOpen);
            },
            openParent(){
                this.isOpen = true;
                sessionStorage.setItem("activeItem"+this.depth,this.parent.title+":"+this.parent.uri)
                if(typeof this.onOpenParent === "function"){
                    this.onOpenParent();
                }
            },
            toggleChildren(clickedItem){
                //changes in shouldLoadContent were made to be different from Huawei Cloud documentation
                let shouldLoadContent = true;
                if(clickedItem.children && clickedItem.children.length > 0){
                    this.isOpen = !this.isOpen;
                    //shouldLoadContent = false;
                }
                /*if this.isOpen=true, that's a parent,NO NEED to make http request since will it open it's children and that's it.
                * if this.isOpen=false then you should send an http request and change the documentation content since it is the last child*/

                this.onNavClicked(clickedItem,shouldLoadContent);
            },
            getIsActive(navUrl){
                let isActive = this.currentFileUri === navUrl;
                if(isActive){
                    let lang = sessionStorage.getItem("lang")
                    let token = sessionStorage.getItem("token")
                    sessionStorage.clear()
                    sessionStorage.setItem("lang",lang)
                    sessionStorage.setItem("token",token)
                    sessionStorage.setItem("activeItem",this.parent.title+":"+this.parent.uri)
                    if(typeof this.onOpenParent === "function"){
                        this.onOpenParent();
                    }
                }
                return isActive;
            }
        },
        created(){
            eventBus.$on(eventBusActions.LANGUAGE_CHANGED,(e)=>{
                this.isOpen = false;
            });
        },
        mounted(){
            this.currentFileUri = this.$route.params.fileUri;
        },
        computed:{
            indent(){
                if(this.depth === 0){
                    return 15;
                }
                return this.depth * 15 + 15;
            }
        },
        watch: {
            "$route" (to,from){
                if(to.params.fileUri){
                    this.currentFileUri = to.params.fileUri;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .parents-padding{
        padding-left: 18px;
    }
    .caret-icon{
        position: absolute;
        top: 50%;
        transform: translateY(-50%) rotate3d(0,0,1,0deg);
    }
    .title{
        position: relative;
        user-select: none;
    }
    .name{
        padding-left: 15px;
    }
    //tree decorations
    .opened-list{
        position: relative;
        /*&:after{*/
        /*    display: block;*/
        /*    content: "";*/
        /*    width: 1px;*/
        /*    top: 20.5px;*/
        /*    bottom: 20.5px;*/
        /*    position: absolute;*/
        /*    background: #d3dbe0;*/
        /*    left: 18px;*/
        /*}*/
        li{
            &.is-open {
                &.level-zero{
                    &:after{
                        display: none;
                    }
                }
            }
            /*<!--&:after{-->*/
            /*<!--    display: block;-->*/
            /*<!--    content: "";-->*/
            /*<!--    width: 15px;-->*/
            /*<!--    height: 1px;-->*/
            /*<!--    top: 50%;-->*/
            /*<!--    transform: translateY(-50%);-->*/
            /*<!--    position: absolute;-->*/
            /*<!--    background: #d3dbe0;-->*/
            /*<!--    left: 18px;-->*/
            /*<!--}-->*/
            &.level-two{
                &:after{
                    width: 30px;
                }
            }
            &.level-three{
                &:after{
                    width: 45px;
                }
            }
            &.level-four{
                &:after{
                    width: 60px;
                }
            }
            &.level-five{
                &:after{
                    width: 75px;
                }
            }
            &.level-six{
                &:after{
                    width: 90px;
                }
            }&.level-seven{
                 &:after{
                     width: 105px;
                 }
             }
        }
    }
</style>
