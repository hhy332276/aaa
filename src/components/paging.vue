<template>
    <!--onselectstart="return false" 防止双击选中html字-->
    <div onselectstart="return false" class="paging">
        <span class="total">{{$t('totalPages')}}<span>{{row}}</span></span>
        <div class="pre p_btn" @click="onNum(pageNum-1)"><</div>
        <div :class="['p_btn',{active:pageNum==1}]" @click="onNum(1)">1</div>
        <div class="p_btn" @click="prevPage" v-if="showPrev">...</div>
        <div :class="['p_btn',{active:pageNum==i}]" @click="onNum(i)" :key="i" v-for="i in pages">{{i}}</div>
        <div class="p_btn" @click="nextPage" v-if="showNext">...</div>
        <div :class="['p_btn',{active:pageNum==count}]" v-if="count!=1" @click="onNum(count)">{{count}}</div>
        <div class="next p_btn" @click="onNum(pageNum+1)">></div>
        <span>{{$t('each')}}</span>
        <select @change="pageSizeChanged" v-model="pageSize" class="number">
            <option v-for="n in option">
                {{n}}
            </option>
        </select>
        <span class="strip">{{$t('strip')}}</span>
    </div>
</template>

<script>
    export default {
        // count 总条数
        props: {
            count: {   // 测试 默认值给1
                required: true //页数 number of pages
            },
            row: {
                required: true //条数 Number of bars
            },
            option: {
                required: true,
                type: Array
            },
            onPageChange: {
                type: Function
            },
            onPageSizeChange: {
                type: Function
            }
        },
        data() {
            return {
                // 选中的num
                pageNum: 1,
                showPrev: false,
                showNext: false,
                pageSize:this.option.length > 20 ?this.option[0]:10
            };
        },
        mounted() {

        },
        computed: {
            pages() {
                const pagerCount = this.count;
                let arr = []
                // 如果小于6  不做处理 并且让俩省略号消失
                if (pagerCount <= 6) {
                    for (let i = 2; i <= pagerCount - 1; i++) {
                        arr.push(i)
                    }
                    this.showNext = false;
                    this.showPrev = false;
                    return arr
                }
                // 判断该显示哪个省略号
                // 显示上一个省略号
                if (this.pageNum <= 4) {
                    for (let i = 2; i <= 6; i++) {
                        arr.push(i)
                    }
                    this.showNext = true;
                    this.showPrev = false;
                    return arr
                }
                // 显示下一个省略号
                if (this.pageNum >= pagerCount - 4) {
                    for (let i = pagerCount - 6; i <= pagerCount - 1; i++) {
                        arr.push(i)
                    }
                    this.showNext = false;
                    this.showPrev = true;
                    return arr
                }
                // 省略号全显示

                for (let i = this.pageNum - 1; i <= this.pageNum + 1; i++) {
                    arr.push(i)
                }
                this.showNext = true;
                this.showPrev = true;
                return arr
            }
        },
        methods: {
            pageSizeChanged(){
                if(this.onPageSizeChange){
                    this.onPageSizeChange(this.pageSize);
                }
            },
            onNum(val, isInit,pageSize) {
                // 点击上一条或者下一条时 判断是否小于1或者大于总条数
                if (val < 1 || val > this.count) return
                this.pageNum = val;
                if(pageSize){
                    this.pageSize = pageSize;
                }
                if (this.onPageChange && !isInit) {
                    this.onPageChange(this.pageNum);
                }
            },
            initPage(pageNum,pageSize) {
                this.onNum(pageNum, true,pageSize)
            },
            // 点击上一个省略号
            prevPage() {
                const pageNum = this.pageNum
                const count = this.count
                if (pageNum > count - 6) {
                    this.onNum(count - 9)
                } else {
                    this.onNum(pageNum - 6)
                }
            },
            // 点击下一个省略号
            nextPage() {
                const pageNum = this.pageNum
                if (pageNum < 6) {
                    this.onNum(9)
                } else {
                    this.onNum(pageNum + 6)
                }


            }
        },
        watch: {
            count(val) {
                // 这里就不触发外面的方法了 一般count改变就是因为刚重新调用过
                this.pageNum = 1
            }
        }
    };
</script>

<style scoped>
    .paging {
        max-width: 1366px;
        text-align: right;
        margin: 0 auto;
    }

    .total {
        margin-right: 20px;
    }

    .p_btn {
        display: inline-block;
        padding: 5px 12px;
        margin-right: 10px;
        border: 1px solid #E4E7ED;
        cursor: pointer;
        border-radius: 3px;
        background: #ffffff;
    }

    .active {
        background: #409EFF;
        color: #fff;
    }

    .number {
        color: #b6b9c0;
        font-size: 14px;
        margin-left: 5px;
        text-align: center;
        border: 1px solid #E4E7ED;
        border-radius: 2px;
        padding: 5px 3px;
    }

    .strip {
        margin-left: 5px;
    }
</style>
