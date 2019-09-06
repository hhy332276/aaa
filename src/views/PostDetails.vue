<template>
  <div class="postwrap">
    <BreadCrumb :maxWidth="'1366px'" :data="postTitle"></BreadCrumb>
    <div class="post-list">
      <div class="top-page post-general">
        <div class="top-page-left">
          <div class="top-pageBottom">
            <button class="top-page-bottom bottomGen">{{$t('returnsAList')}}</button>
          </div>
          <div class="top-page-wrap">
            <Pagination :count="68" :row="5" :option="option"></Pagination>
          </div>
        </div>
        <div class="top-page-right">
          <button class="bottomGen">{{$t('ReturnsTheTheme')}}</button>
        </div>
      </div>
      <div class="Details-show" v-for="item in data">
        <Userinfo :user="item.user" :indivdualTitle="item.indivdualTitle" :maxWidth="'16.837%'"></Userinfo>
        <div class="details-show-right">
          <div class="host-operate">
              <div class="host-operate-left">
                <div class="publish-data">
                  <span class="publish-dataline">{{$t('publishData')}}2019-05-05</span>
                  <span>12:34</span>
                </div>
                <div class="host-look-content" v-if="item.isLooking">
                  <div class="view">
                    <SVGIcon class="icon" width="24px" height="15px" icon="eye"/>
                    <div>{{item.isLooking.view}}</div>
                  </div>
                  <router-link to="/" class="comments">
                    <SVGIcon class="icon" width="23px" height="19px" icon="comment-bubble"/>
                    <div>{{item.isLooking.comment}}</div>
                  </router-link>
                </div>
              </div>
              <div class="host-operate-right">
                <a class="only-see-author" href="">{{$t('justLookAuthor')}}</a>
                <div v-if="item.iselevator">{{$t('elevator')}}</div>
                <div>{{item.identity}}</div>
              </div>
            </div>
          <div class="details-show-wrap" v-if="item.isMaster">
            <p class="post-content-title">{{contentTitle}}</p>
            <p class="post-main">
              {{contentText}}
              </p>
            <div class="post-content-img">
                <img src="/imgs/ai_huawei.png" alt="">
              </div>
            <div class="post-content-essence">
                <img src="/imgs/essense.png" alt="">
              </div>
            <div class="accessory">
              <div class="accessory-photo">
                <div class="view">
                  <SVGIcon class="icon" width="24px" height="15px" icon="pic-post"/>
                  <div class="accessory-name">{{$t('accessoryPhoto')}}</div>
                  <div class="accessory-file-size">
                    103.2KB
                  </div>
                  <div class="accessory-down">
                    {{$t('postDownload')}}
                  </div>
                </div>
              </div>
              <div class="accessory-file">
                <div class="view">
                  <SVGIcon class="icon" width="24px" height="15px" icon="video"/>
                  <div class="accessory-name">{{$t('accessoryVideo')}}</div>
                  <div class="accessory-file-size">
                    103M
                  </div>
                  <div class="accessory-down">
                    {{$t('postDownload')}}
                  </div>
                </div>
              </div>
              <div class="accessory-operation">
                <div class="view">
                  <SVGIcon class="icon" width="24px" height="15px" icon="operation"/>
                  <div class="accessory-name">{{$t('accessoryGuide')}}</div>
                  <div class="accessory-file-size">
                    642.3KB
                  </div>
                  <div class="accessory-down">
                    {{$t('postDownload')}}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div :class="classNameWrap" v-else>
            <div class="normality-content">
                {{item.comment.content}}
            </div>
            <div class="hiddenReply-wrap">
                <div class="hiddenReply-top">
                      <div class="hiddenReply-top-left">
                          43{{$t('strip')}}{{$t('reply')}}
                      </div>
                      <div class="hiddenReply-top-right">
                          <div class="view">
                              <SVGIcon class="icon" width="24px" height="15px" icon="update"/>
                              <div class="accessory-name">{{$t('switchToTimeSorting')}}</div>
                          </div>
                      </div>
                  </div>
                <div class="hiddenReply-content">
                    <div class="hiddenReply-input">
                        <div class="hide-inp-left">
                          <input type="text" :placeholder="$t('writeComments')">
                        </div>
                        <div  class="hide-inp-right">
                          <button>
                            {{$t('release')}}
                          </button>
                        </div>

                    </div>
                </div>
            </div>
          </div>
          <div class="post-host-operate">
            <div class="post-operate-left">
              <div class="operate-left-collect" v-if="item.iscollect">
                <div class="view">
                  <SVGIcon class="icon" width="24px" height="15px" icon="collect"/>
                  <div class="accessory-name">{{$t('collect')}} 2</div>
                </div>
                </div>
              <div class="operate-left-Like">
                <div class="view">
                  <SVGIcon class="icon" width="24px" height="15px" icon="Like"/>
                  <div class="accessory-name">{{$t('Like')}} 5</div>
                </div>
              </div>
              <div class="operate-left-comment">
                <div class="view">
                  <SVGIcon class="icon" width="24px" height="15px" icon="comment"/>
                  <div class="accessory-name">{{$t('comment')}}</div>
                </div>
              </div>
              <div class="operate-left-reply" v-if="isReply">
                <div class="view">
                  <SVGIcon class="icon" width="24px" height="15px" icon="comment-bubble"/>
                  <div class="accessory-name">{{$t('reply')}} 18</div>
                </div>
              </div>
              <div class="operate-left-reply" v-else>
                    <div class="view">
                        <SVGIcon class="icon" width="24px" height="15px" icon="comment-bubble"/>
                        <div class="accessory-name">{{$t('regainReply')}}</div>
                    </div>
                </div>
              <div class="operate-left-share" v-if="item.isShare">
                <div class="view">
                  <SVGIcon class="icon" width="24px" height="15px" icon="share"/>
                  <div class="accessory-name">{{$t('share')}} 14</div>
                </div>
              </div>
            </div>
            <div class="post-operate-right">
              <div class="view">
                <SVGIcon class="icon" width="24px" height="15px" icon="inform"/>
                <div class="accessory-name">{{$t('inform')}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-page post-general">
        <div class="top-page-left">
          <div class="top-pageBottom">
            <button class="top-page-bottom bottomGen">{{$t('returnsAList')}}</button>
          </div>
          <div class="top-page-wrap">
              <Pagination :count="68" :row="5" :option="option"></Pagination>
          </div>
        </div>
      </div>
      <div class="comment-wrap">
        <div class="comment-left"></div>
        <div class="comment-right"></div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "../components/BreadCrumb";
import Pagination from "../components/paging";
import Userinfo from "../components/userInfo";
import SVGIcon from "../components/SVGIcon";
export default {
  name: "postDetails",
  components: {
    BreadCrumb,
    Pagination,
    Userinfo,
    SVGIcon
  },
  data() {
    return {
      contentTitle:"【类别A】华为云和Forrester研究联合发布《产业人工  发展白皮书》",
      contentText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum\n" +
              "                laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus\n" +
              "                pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget",
      classNameWrap:"details-appear-wrap",
        // details-normality-wrap
      postTitle: [
        { titleKey: "forum", link: "/forum" },
        { titleKey: "Atlas 200 dk版块", link: "/forum" },
        { titleKey: "华为云和Forrester" }
      ],
      isReply:false,
      option:[
          10,
          20,
          30,
          40
      ],
      formItem: [
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 5 }
      ],
      data:[
        {
          user:{
            name: "逆风撩恶鬼", grade: "版主",img:"/imgs/head4.png"
          },
          indivdualTitle:[
            { title: "主题", num: 30 },
            { title: "发帖", num: 18 },
            { title: "粉丝", num: 52 }
          ],
            identity:"楼主",
            buildingOwner:false,
            isMaster:true,
            isLooking:{
              view:1433,
              comment:354
            },
            iselevator:true,
            iscollect:true,
            isShare:true,
            comment:{
                content:"",
                reply:[
                    {},
                    {},
                    {}
                ]
            }
        },
        {
          user:{
            name: "呆萌大叔", grade: "论坛元老",img:"/temp-imgs/head6.png"
          },
          indivdualTitle:[
            { title: "主题", num: 30 },
            { title: "发帖", num: 18 },
            { title: "粉丝", num: 52 }
          ],
          buildingOwner : false,
          isMaster:false,
          identity:"沙发",
          comment:{
              content:"一楼占座~",
              reply:[
                  {},
                  {},
                  {}
              ]
          }
        },
        {
          user:{
            name: "呆萌二叔", grade: "论坛元老" ,img:"/temp-imgs/head1.png"
          },
          indivdualTitle:[
            { title: "主题", num: 30 },
            { title: "发帖", num: 18 },
            { title: "粉丝", num: 52 }
          ],
          buildingOwner : false,
          isMaster:false,
          identity:"板凳",
          comment:{
                content:"快来晒图吧！！！",
                replys:[
                    {
                        userName:"小石头",
                        replyContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor",
                    },
                    {
                        userName:"呆萌二叔",
                        replyContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
                        notification:"小石头"
                    },
                    {
                        userName:"小石头",
                        replyContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
                        notification:"呆萌二叔"
                    },
                    {
                        userName:"技术火炬手",
                        replyContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra ",
                    },
                    {
                        userName:"云上小仙女",
                        replyContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra ",
                    },

                ]
            }
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
@import "../assets/css/mixins";
@import "../assets/css/partials";

.postwrap {
  background: $website-bg;
  padding-top: 80px;
  /*padding-bottom: 60px;*/
}

.post-list {
  max-width: 1366px;
  margin: 0 auto;
  background: $white-bg;
  padding-bottom: 100px;
  .top-page {
    overflow: hidden;
    padding-top: 35px;
    padding-bottom: 35px;
    .top-page-right {
      float: right;
    }
  }
  .Details-show {
    background: #f5f9ff;
    border: 1px solid #e5e5e5;
    overflow: hidden;
    .details-show-right {
      float: left;
      border: 1px solid #e5e5e5;
      width: 83.163%;
      .host-operate{
        height: 64px;
        overflow: hidden;
        border-bottom: 1px solid #e5e5e5;
        padding: 0 30px;
        a,div{
          color: #999999;
          display: inline-block;
          height: 64px;
          line-height: 64px;
        }
        .host-operate-left{
          float: left;
          width: 60%;
          color: #999999;
          .publish-data{
            margin-right: 30px;
            .publish-dataline{
              display: inline-block;
              margin-right: 10px;
            }
          }
        }
        .host-operate-right{
          float: right;
          width: 40%;
          text-align: right ;
          >div,a{
            margin-left: 30px;
          }
          .only-see-author{
            color: $color-primary;
          }
        }
      }
      .details-show-wrap{
        background: $white-bg;
        padding: 30px;
        position: relative;
        border-bottom: 1px solid #e5e5e5;
        .post-content-title{
          font-size: 18px;
          font-weight: bold;
        }
        .post-main{
          font-size: 16px;
          color: #393a3c;
        }
        .post-content-essence{
          width: 144px;
          height: 84px;
          position: absolute;
          top: 15px;
          right: 22.887%;
        }
        >div,p{
          margin-bottom: 30px;
        }
        .accessory{
          margin-bottom: 0;
          >div{
            position: relative;
            margin-bottom: 25px;
            .accessory-file-size{
              margin-left: 10px;
            }
            .accessory-down{
              position: absolute;
              top: 4px;
              left: 20%;
              color: $color-primary;
            }
          }
          >div:last-child{
            margin-bottom: 0;
          }
          .accessory-file{
            .accessory-name{
              color: $color-primary;
            }
          }

        }
        .post-content-img{
          width: 100%;
          img{
            width: 100%;
          }
        }
      }
      .details-normality-wrap{
          padding: 30px;
          background: $white-bg;
          border-bottom: 1px solid #e5e5e5;
          height: 436px;
          .normality-content {
              font-size: 16px;
              color: #393a3c;
          }
      }
      .details-appear-wrap{
          padding: 30px 30px;
          background: $white-bg;
          border-bottom: 1px solid #e5e5e5;
          height: 800px;
          position: relative;
          .hiddenReply-wrap{
              border: 1px solid #e5e5e5;
              height: 560px;
              position: absolute;
              left: 30px;
              width: calc(100% - 60px);
              bottom: 0;
              background: #f9f9f9;
              .hiddenReply-top{
                  border-bottom: 1px solid #e5e5e5;
                  padding: 0 30px;
                  overflow: hidden;
                  height: 64px;
                  div{
                      line-height: 64px;
                  }
                  .hiddenReply-top-left{
                    float: left;
                  }
                  .hiddenReply-top-right{
                    float: right;
                    .view{
                      margin: 0;
                    }
                  }
              }
              .hiddenReply-content{
                position: relative;
                height: calc(100% - 64px);
                .hiddenReply-input{
                  position: absolute;
                  width: 100%;
                  bottom: 0;
                  left: 0px;
                  overflow: hidden;
                  padding: 15px 2.1em;
                  div,input{
                    height: 36px;
                    line-height: 36px;
                    color: #999999;
                  }
                  .hide-inp-left{
                    width: 85.236%;
                    float: left;
                    input{
                      width: 100%;
                      border: 1px solid #bac5cc;
                      border-radius: 2px;
                      background: $white-bg;
                      padding: 10px 20px;
                      font-size: 14px;
                    }
                  }
                  .hide-inp-right{
                    width: 11.152%;
                    float: right;
                    button{
                      padding: 0;
                      border: none;
                      background: $color-primary;
                      color: #FFFFFF;
                    }
                  }
                }
              }
          }
      }
      .post-host-operate{
        padding: 0 30px;
        background: $white-bg;
        overflow: hidden;
        div{
          height: 64px;
          line-height: 64px;
          display: inline-block;
        }
        .view{
            cursor: pointer;
        }
        .post-operate-left{
          float: left;
            .operate-left-reply{
                position: relative;
            }
            /*小箭头*/
            /*.operate-left-reply:before{*/
            /*    content: "";*/
            /*    border-top: solid 15px pink;*/
            /*    border-left: solid 10px #00800000;*/
            /*    border-right: solid 10px #00800000;*/
            /*    border-bottom: solid 0px #00800000;*/
            /*    position: absolute;*/
            /*    left: 25%;*/
            /*    top: 0;*/
            /*}*/
        }
        .post-operate-right{
          float: right;
          .view{
            margin-right: 0;
          }
        }
      }
    }
  }
  .bottom-page {
    overflow: hidden;
    padding-top: 35px;
    padding-bottom: 35px;
  }
}
.post-general {
  padding: 0 30px;
}
.bottomGen {
  display: inline-block;
  width: 120px;
  height: 36px;
  line-height: 30px;
  color: $color-primary;
  border: 1px solid $color-primary;
  text-align: center;
  border-radius: 2px;
  padding: 0;
}
/*摘出来的分页部分*/
.top-page-left {
  float: left;
  overflow: hidden;
  .top-pageBottom {
    float: left;
    margin-right: 20px;
    div {
      display: inline-block;
    }
  }
  .top-page-wrap {
    float: left;
    margin-right: 20px;
  }
  .top-page-select {
    float: left;
    height: 35px;
    .tp-page-select-span {
      line-height: 35px;
    }
    .tp-page-select-input {
      display: inline-block;
      padding: 5px 6px;
      margin: 0 10px;
      border: 1px solid #e4e7ed;
      cursor: pointer;
      border-radius: 3px;
      color: #e4e7ed;
    }
  }
}

/*摘出来的图标部分*/
.view,
.comments{
  display: inline-block;
  vertical-align: middle;
  div,
  a{
    display: inline-block;
    vertical-align: middle;
    color: #999999;
  }
}
.view{
  margin-right: 30px;
  .icon{
    width: 24px;
    height: 15px;
    margin-right: 10px;
  }
}
.comments{
  cursor: pointer;
  .icon{
    width: 23px;
    height: 19px;
    margin-right: 10px;
    .bubble{
      path{
        fill: #999999 !important;
      }
    }
  }
}
</style>
