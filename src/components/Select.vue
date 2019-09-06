<template>
    <div @click.stop="stopParentEvent" class="select-wrapper">
        <!--selected value-->
        <div @click="showDropDown = !showDropDown" class="selected-value">
            <div class="value">{{value}}</div>
            <div class="drop-down">
                <SVGIcon icon="drop-down" :width="'10px'" :height="'7px'"/>
            </div>
        </div>

        <!--select options-->
        <div v-show="showDropDown" class="options slim-scrollbar">
            <div @click="selectOption(option,index)" :class="{'highlighted-value':option === value}" :key="index" v-for="(option,index) in passedOptions">{{option}}</div>
        </div>
    </div>
</template>

<script>
    import SVGIcon from "./SVGIcon";
    export default {
        props:{
            value:{
                required: true
            },
            options:{
                type: Array,
                required: true
            },
            onOptionSelected:{
                type: Function,
                required: true
            }
        },
        name: "Select",
        components:{
            SVGIcon
        },
        data(){
            return{
                selectedValue: this.value,
                passedOptions: this.options,
                showDropDown: false
            }
        },
        methods:{
            stopParentEvent(){
                //leave this method empty
            },
            selectOption(val,index){
                this.selectedValue = val;
                this.onOptionSelected(val,index);
                this.showDropDown= false;
            },
            closeDropDown(){
                //use this method to close the drowpwn from outside
                this.showDropDown= false;
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/css/mixins";
    @import "../assets/css/partials";
    .select-wrapper{
        user-select: none ;
        position: relative;
        .selected-value{
            border: 1px solid #cccccc;
            height: 30px;
            line-height: 30px;
            padding-left: 14px;
            position: relative;
            cursor: pointer;
            .value{
                display: inline-block;
                color: #6f7479;
                font-size: 14px;
            }
            .drop-down{
                position: absolute;
                right: 0;
                border-left: 1px solid #cccccc;
                top: 0;
                bottom: 0;
                width: 30px;
                .icon-wrapper{
                    @include absoluteCenter;
                }
            }
        }
        .options{
            position: absolute;
            width: 100%;
            max-height: 150px;
            background: $white-bg;
            border: 1px solid #CCCCCC;
            border-radius: 4px;
            z-index: 9;
            overflow-y: auto;
            margin-top: 4px;
            div{
                padding: 0 20px;
                height: 30px;
                line-height: 30px;
                color: #6f7479;
                &.highlighted-value{
                    color: #6f7479;
                    /*<!--background: $color-primary;-->*/
                }
                &:hover{
                    color: $white-color;
                    background: $color-primary;
                    cursor: pointer;
                }
            }
        }
    }

</style>
