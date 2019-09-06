<template>
  <div class="download">
    <div class="container">
      <div class="download_content" style='min-height:484px'>
          <div class='navigation'>
              <router-link to="/resources"> <span>{{$t('resourceTitle_1')}}</span></router-link> > <span style='color:#606266'>{{$t('downloadResources')}}</span>
          </div>
          <div class='download_title'>
              {{formTitle}}
          </div>
          <div class='list_title'>
              {{$t('softwareVersion')}}
          </div>
        <template>
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            border
            style="width: 100%"
          >
           <el-table-column
                type="index"
                width="50"
                align="center"
            >
            </el-table-column>
            <el-table-column prop="title" :label="$t('resourceName')" width='300'></el-table-column>
            <el-table-column prop="fileSize" :label="$t('fileSize')" ></el-table-column>
            <el-table-column prop="lastModifyTime" :label="$t('releaseTime')" show-overflow-tooltip></el-table-column>
            <el-table-column prop="downNum" :label="$t('downloads')" show-overflow-tooltip></el-table-column>
            <el-table-column :label="$t('operation') "width='200' align="center">
                <template slot-scope="scope">
                    <form action="http://122.112.148.247/turing/backResource/downloadMultipartFile" method="post"enctype="multipart/form-data" target="nm_iframe">
                        <input type="text" name="fileId" :value="downloadingFileId" style='display:none'>
                        <input type="text" name="filePathList" :value="scope.row.filePath" style='display:none'>
                        <input type="text" name="token" :value="token" style='display:none'>
                         <button type ="submit" @click='reload()':class='{isdisabled:disabled,submit:!disabled}' style='padding: 0 40px;height:36px;' :disabled="disabled" >{{$t('download')}}</button> 
                    </form>
                    <iframe id="id_iframe" name="nm_iframe" style="display:none;"></iframe>
                </template>
            </el-table-column>
          </el-table>
          <div class='download_wrapper'>
          </div>
        </template>
        <el-dialog :title="$t('resourceApplication')" 
        :visible.sync="dialogFormVisible"  
        :close-on-click-modal='false'>
           <div class='tip' v-if="controlResource == '3' || controlResource == '4'"><img src='/imgs/tishi.png'/>{{$t('point')}}</div>
           <el-form :model="ruleForm" :rules="rules" ref="ruleForm" :label-width=" labelWidth + 'px'" class="demo-ruleForm">
               <el-form-item :label="$t('countries')" prop="country">
                    <el-select v-model="ruleForm.country" :placeholder="$t('selectOne')" style='width:100%;'>
                        <el-option :label="$t('china')" :value="$t('china')"></el-option>
                        <el-option :label="$t('others')" :value="$t('others')"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item :label="$t('organization')" prop="institution">
                    <el-input v-model="ruleForm.institution"></el-input>
                </el-form-item>
                <el-form-item :label="$t('industry')" prop="industry">
                    <el-select v-model="ruleForm.industry" :placeholder="$t('selectOne')" style='width:100%;'>
                        <el-option v-for="(item, index) in regions" :key="item + index" :label="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item :label="$t('position')" prop="position">
                    <el-select v-model="ruleForm.position" :placeholder="$t('selectOne')" style='width:100%;'>
                        <el-option v-for="(item, index) in positions" :key="item + index" :label="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item :label="$t('email')" prop="email">
                    <el-input v-model="ruleForm.email"></el-input>
                </el-form-item>
                <el-form-item :label="$t('phoneNumber')" prop="phone">
                    <el-input v-model="ruleForm.phone"></el-input>
                </el-form-item>
                <el-form-item :label="$t('business')" prop="business">
                    <el-select v-model="ruleForm.business" :placeholder="$t('selectOne')" style='width:100%;'>
                        <el-option v-for="(item, index) in trades" :key="item + index" :label="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item :label="$t('current')" prop="hardware">
                    <el-select v-model="ruleForm.hardware" :placeholder="$t('selectOne')" style='width:100%;'>
                        <el-option v-for="(item, index) in hardwares" :key="item + index" :label="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
             <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false" style='min-width: 120px;'>{{$t('cancel')}}</el-button>
                <el-button type="primary" @click="submitForm('ruleForm')" style='min-width: 120px;'>{{$t('sure')}}</el-button>
                <el-button class='jump' style='border:none'v-if="controlResource == '2'"@click="jumpDialog()">{{$t('skip')}}</el-button>
            </div>
        </el-dialog>
      </div>
    </div>
  </div>
</template>
<script>
import http from "../utils/axiosConfig";
import data from "../static_data/resource";
import SVGIcon from "../components/SVGIcon";
import {envVariables} from "../../public/static/index";
export default {
  name: "resource",
  components: {
    SVGIcon
  },
  data() {
    return {
      lists: data,
      formTitle:'',
      tableData:[],
    //   multipleSelection:[],
      filePathList: [],
      ruleForm: {
          fileId:'',
          country:'',
          institution:'',
          industry: '',
          position:'',
          phone: '',
          email: '',
          tel: '',
          business: '',
          hardware: ''
      },
      regions:this.$t('regions'),
      positions:this.$t('positions'),
      trades:this.$t('trades'),
      hardwares:this.$t('hardwares'),
      rules: {
          country: [
            { required: true, message: this.$t('require_1'), trigger: 'change' }
          ],
          institution: [
            { required: true, message: this.$t('require_2'), trigger: 'change' },
            { pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/, message: this.$t('require_8') }
          ],
          industry: [
            { required: true, message: this.$t('require_3'), trigger: 'change' }
          ],
          position: [
            { required: true, message: this.$t('require_4'), trigger: 'change' }
          ],
          email: [
            { required: true, message: this.$t('require_5'), trigger: 'blur' },
            { pattern: /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/, message: this.$t('require_9') }
          ],
          phone: [
            { required: false, message: this.$t('require_6'), trigger: 'blur' },
            { pattern: /^([1]\d{10}|([\(（]?0[0-9]{2,3}[）\)]?[-]?)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?)$/, message: this.$t('require_10') }
          ],
          business: [
            { required: true, message: this.$t('require_3'), trigger: 'change' }
          ],
          hardware: [
            { required: true, message: this.$t('require_7'), trigger: 'change' }
          ]
      },
      dialogFormVisible:false,
      downLoadparams:{},
      controlResource:'',
      downloadingFileId:'',
      downloadFilePath:[],
      disabled:true,
      labelWidth:80,
      token:''
    };
  },
  created() {
    if(this.$i18n.locale == 'en'){
        this.labelWidth = 150
    }else{
        this.labelWidth = 80
    }
    this.token = this.$cookies.get('token')?this.$cookies.get('token'):'';
    this.formTitle = this.$route.params.title
    this.downloadingFileId = this.$route.params.fileId;
    this.authority()
    this.init()
  },
  methods: {
    init() {
      http
        .post("/backResource/synchronizeResource",{fileId:this.$route.params.fileId,lang:this.$i18n.locale})
        .then(res => {
          if(!res.data){
            this.$message.error(res.msg);
            return
          }
          this.tableData = res.data;
        })
        .catch(err => {
          this.$message.error(err.msg);
        });
    },
    reload(){
      setTimeout(() => {
        this.init()
      },1200)
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    submitForm(formName) {
        var _this = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
                if(this.controlResource == '3'){
                   this.dialogFormVisible = false
                   this.examineMsg()
                }else if(this.controlResource == '2'){
                   this.examineMsg(this.controlResource)
                }
            } else {
                return false;
            }
        })
    },
    // resetForm(formName) {
    //     this.$refs[formName].resetFields();
    // },
    sendMsg(data,msg) {
        this.$confirm(msg, this.$t('prompt'), {
          confirmButtonText: this.$t('sure'),
          cancelButtonText: this.$t('cancel'),
          type: 'warning'
        }).then(() => {
          if(data == '4'){
            http
            .post("backResource/reconfirmInsertInformation",{fileId:this.$route.params.fileId,lang:this.$i18n.locale})
            .then(res => {
            if(res){
                this.$message({
                    message: res.msg,
                    type: 'success'
                });
                this.dialogFormVisible = false
                this.disabled = true
              }
            })
            .catch(err => {
                this.$message.error(err.msg);
                this.resetForm('ruleForm')
            });
          }else{
              this.dialogFormVisible = true;
          }
        }).catch(() => {});
    },

    authority(obj) {
        http
        .post("console/backResource/existInformation",{fileId:this.$route.params.fileId,lang:this.$i18n.locale})
        .then(res => {
          if(!res.data){
            if(res.code == '400'){
               this.$confirm(this.$t('prompt_msg_1'),this.$t('prompt') , {
                confirmButtonText: this.$t('sure'),
                cancelButtonText: this.$t('cancel'),
              type: 'warning'
              }).then(() => {
                let href = window.location.href.split('ResourceDownload')[1]
                let current = envVariables.BASE_URL + 'testLogin?redirect=/ResourceDownload'+ href
                window.open(current,"_self");
              })
              return
            }
            this.$message.error(data.msg);
            return
          }
          if(res.data == "2"){
              this.disabled = true
              this.dialogFormVisible = true;
              this.controlResource = res.data
          }else if(res.data == "3" || res.data == "4"){
              this.disabled = true
              this.sendMsg(res.data,res.msg)
              this.controlResource = res.data
          }else if(res.data == "1"){
              this.disabled = false
          }else if(res.data == "5"){
              this.$confirm(this.$t('prompt_msg_1'),this.$t('prompt'), {
                confirmButtonText: this.$t('sure'),
                cancelButtonText:  this.$t('cancel'),
                type: 'warning'
                }).then(() => {
                  let href = window.location.href.split('ResourceDownload')[1]
                  let current = envVariables.BASE_URL + 'testLogin?redirect=/ResourceDownload'+ href
                  window.open(current,"_self");
                })
          }else{
              this.disabled = true
              this.$message.warning(data.msg);
          }
        })
        .catch(err => {
          if(err.code == '400'){
              this.$confirm(this.$t('prompt_msg_1'),this.$t('prompt'), {
                confirmButtonText: this.$t('sure'),
                cancelButtonText: this.$t('cancel'),
              type: 'warning'
              }).then(() => {
                let href = window.location.href.split('ResourceDownload')[1]
                let current = envVariables.BASE_URL + 'testLogin?redirect=/ResourceDownload'+ href
                window.open(current,"_self");
              })
          }else{
            this.$message.error(err);
          }
        });
    },
    examineMsg(controlResource) {
        this.ruleForm.fileId = this.$route.params.fileId
        this.ruleForm.lang = this.$i18n.locale
        http
        .post("/backResource/insertInformation",this.ruleForm)
        .then(res => {
        if(res){
            this.$message({
                message: this.$t('sendSuc'),
                type: 'success'
            });
            this.dialogFormVisible = false
            this.disabled = controlResource == '2'?false:true
        }
        })
        .catch(err => {
            this.$message.error(this.$t('sendFail'));
            this.resetForm('ruleForm')
        });
    },
    // tip(msg) {
    //     this.$confirm(msg, this.prompt, {
    //       confirmButtonText: this.sure,
    //       type: 'warning'
    //     }).then(() => {
    //     }).catch(() => {     
    //     });
    // },
    jumpDialog(){
        this.dialogFormVisible = false
        this.disabled = false
    }
  }
};
</script>
<style lang="scss">
@import "../assets/css/mixins";
@import "../assets/css/partials";
.el-message-box button{
      height:auto!important;
      min-width:auto!important;
}
.el-message-box__headerbtn {
    position: absolute;
    top: 15px;
    right: 15px;
    padding: 0;
    border: none;
    outline: none;
    background: transparent;
    font-size: 16px;
    cursor: pointer;
}
.el-button{
    border-radius: 2px!important;
}
.download {
  padding-bottom: 235px;
  .navigation{
      padding:15px 0 15px 0;
      margin: 10px 0 10px;
      border-bottom: 1px solid #EBEEF5;
      span{
        color: #3d88ff;
      }
  }
  .download_title{
        margin: 44px 0 45px;
        font-size: 28px;
        color: #000000;
  }
  .list_title{
      margin: 10px 0 20px;
      color: #3f3d3d;
  }
  .download_wrapper{
      margin:70px auto 50px;
      position:relative;
  }
  button{
    min-width:auto;
    height:auto;
  }
}
.jump:hover{
  background: #fff!important;
}
.download_content {
  max-width: 1280px;
  margin: 0 auto;
}
.point{
    position: absolute;
    top: -30px;
    color: red;
}
.demo-ruleForm{
    width:445px;
    margin:auto;
}
.el-dialog{
    max-width: 650px; 
}
.tip{
    width: 403px;
    height: 50px;
    line-height: 50px;
    margin-left: 124px;
    border: 1px solid #3d88ff;
    text-align: center;
    margin-bottom: 20px;
    border-radius: 2px;
    background:#f6faff
}
.tip img{
    vertical-align: middle;
    margin-right:22px;
    margin-top: -5px;
}
.el-dialog{
    width:650px!important;
}
.el-message-box__headerbtn{
    text-align: right;
}
.submit{
    background:#fff;
    border: 1px solid #dcdfe6;
    color:#606266;
    top:15px
}
.submit:hover{
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
}
.isdisabled{
    opacity: .6;
    color:#909399;
    border-color:#909399;
    cursor: not-allowed!important;
}
</style>