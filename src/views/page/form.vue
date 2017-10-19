<template> 
  <div>
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <div class="text item">
            上传视频请谨慎，后台调用的语音识别接口是收费的，邮箱注册后可以获取5个小时免费识别时间。如果调用失败请登陆注册http://www.xfyun.cn/services/lfasr，获取app_id和secret_key，之后联系开发人员替换注册码。
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-upload
        class="upload-demo"
        :action= "url" 
        :on-preview="handlePreview"
        :on-success="handleSuccess"
        :on-error="handleError"
        accept="video/*"
        :file-list="fileList">
        <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        <div slot="tip" class="el-upload__tip">请上传视频文件</div>
        </el-upload>
      </el-col>
    </el-row>    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fileList: [],
        url: process.env.BASE_API + '/'
      }
    },
    methods: {
      handleSuccess(file) {
        alert('上传成功，请进入任务列表查看处理进度～')
        console.log(file)
      },
      handleError(file) {
        alert('上传失败，请检查文件类型～')
        console.log(file)
      },
      handlePreview(file) {
        alert('上传成功，请进入任务列表查看处理进度～')
        console.log(file)
      }
    }
  }
</script>

<style>
  .upload-demo {
    cursor: pointer;
    position: relative;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
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
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  
 
</style>
