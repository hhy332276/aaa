<template>
  <div class="resource">
    <div class="container">
      <div class="resource-top">
        <img :src="resourceData.bannerUrl" alt />
        <div class="resource-nav">
          <p class="nav-title">{{$t('resourceTitle')}}</p>
          <p class="nav-content">{{$t('resourceContent')}}</p>
        </div>
      </div>
      <div class="resource-content safe-distance">
        <div class="resource-ascend" v-for="item in initData" :key="item.id">
          <div class="ascend-title resource-title">{{item.title}}</div>
          <template>
            <el-tabs v-model="item.con" @tab-click="handleClick">
              <el-tab-pane
                v-for="tabs in item.tabsData"
                :key="tabs.index"
                :label="tabs.con"
              >
                <div class="container single-grid left" style="width:100%">
                  <div class="th">
                    <div>{{$t('version')}}</div>
                    <div>{{$t('releaseTime')}}</div>
                    <div>{{$t('operation')}}</div>
                  </div>
                  <div class="tr" v-for="item_1 in tabs.detail" :key="item.version">
                    <div>{{item_1.version}}</div>
                    <div>{{item_1.lastModifyTime}}</div>
                    <div class="check" v-if="item_1.fileType == '1'" ><span class='cursor' @click="internalResources(item_1,tabs.con)">{{$t('download')}}</span></div>
                    <div class="check" v-else><span class='cursor' @click="externalRsources(item_1.outResourcePath)">{{$t('download')}}</span></div>
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "../utils/axiosConfig";
import data from "../static_data/resource";
import SVGIcon from "../components/SVGIcon";
import { constants, settings } from "../../public/static/index";
import { eventBus, eventBusActions } from "../event_bus";

export default {
  name: "resource",
  components: {
    SVGIcon
  },
  data() {
    return {
      lists: data,
      language: "",
      activeName: "",
      initData:[]
    };
  },
  created() {
    this.activeName = "0";
    this.language = sessionStorage.getItem("lang")?sessionStorage.getItem("lang"):'zh';
    this.init();
  },
  mounted() {},
  computed: {
    resourceData() {
    if (this.lists.resource[this.$i18n.locale]) {
       return this.lists.resource[this.$i18n.locale];
    }
    //return Chinese page if the specific language isn't available
    return this.lists.resource["zh"];
    }
  },
  methods: {
    init() {
      http
        .post("selectResources", { lang: this.language })
        .then(res => {
          this.initData = res.data;
        })
        .catch(err => {});
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    internalResources(obj,title) {
      let fileDirectory = obj.fileDirectory;
      let routeTitle = title;
      let fileId = obj.fileId;
      let flag = obj.flag;
      let innerControl = obj.innerControl;
      this.$router.push(`/ResourceDownload/${fileDirectory}/${routeTitle}/${fileId}/${flag}/${innerControl}`);
    },
    externalRsources(path){
      window.open(path)
    }
  }
};
</script>

<style lang="scss">
@import "../assets/css/mixins";
@import "../assets/css/partials";
.el-tabs__nav-wrap:after {
  height: 0 !important;
}
.container .tr:hover {
  background-color: rgba(135, 175, 228, 0.1);
}
.container .th {
  display: flex !important;
  justify-content: center;
  background: linear-gradient(90deg, #4964e7, #42b1ea);
  line-height: 45px;
  color: #ffffff;
}
.container .tr {
  display: flex;
  justify-content: center;
  line-height: 45px;
}
.tr div {
  color: #393a3c;
  border-bottom: 1px solid #e5e5e5;
  text-align: center;
  width: 33%;
}
.th div {
  text-align: center;
  width: 33%;
}
.tr .check {
  color: #3d88ff;
}
.ascend-title {
  text-align: center;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  min-height: 36px;
}
.resource {
  padding-bottom: 150px;
}
.resource-top {
  width: 100%;
  position: relative;
  > img {
    width: 100%;
  }
  .resource-nav {
    position: absolute;
    width: 100%;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    > p {
      color: $white-color;
    }
    /*position: absolute;*/
    .nav-title {
      font-size: 40px;
      display: inline;
    }
    .nav-content {
      font-size: 14px;
      margin-top: 2%;
    }
  }
}
.resource-content {
  max-width: 1480px;
  margin: 0 auto;
  .resource-ascend {
    .ascend-lists {
      width: 100%;
    }
  }
  .resource-ascend,
  .resource-tools {
    .tools-lists,
    .ascend-lists {
      padding-bottom: 20px;
      > a {
        width: 23.986%;
        margin-right: 1.351%;
        display: inline-block;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  .resource-model {
    .model-lists {
      padding-bottom: 20px;
      > a {
        width: 23.986%;
        margin-right: 1.351%;
        display: inline-block;
        &:last-child {
          margin-right: 0;
        }
      }
      .model-grid {
        width: 100%;
        font-size: 14px;
        .model-img {
          width: 45.075%;
          img {
            width: 100%;
          }
        }
        .model-wrap {
          width: 53.93%;
          border: 1px solid #e5e5e5;
          .model-grid-wrap {
            position: relative;
            width: 100%;
            vertical-align: top;
            padding-bottom: 83.551%;
            .model-content-wrap {
              position: absolute;
              width: 84.267%;
              height: 83.79%;
              left: 7.417%;
              top: 8.5%;
              > p {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                margin-bottom: 4%;
              }
              .model-title,
              .model-file {
                font-size: 14px;
                color: $black-text-two;
              }
              .model-content {
                font-size: 14px;
                color: $black-text-three;
              }
              .view-details {
                position: absolute;
                left: 0;
                bottom: 0;
                color: $color-primary;
                .comments {
                  display: inline-block;
                  vertical-align: middle;
                  div,
                  a {
                    display: inline-block;
                    vertical-align: middle;
                    color: $color-primary;
                  }
                }
                .comments {
                  .icon {
                    width: 24px;
                    height: 15px;
                    /*margin-right: 10px;*/
                  }
                }
              }
            }
          }
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}

.resource-title {
  margin: 44px 0 45px;
  font-size: 28px;
  color: #000000;
}
.cursor{
    cursor:pointer;
}
</style>
