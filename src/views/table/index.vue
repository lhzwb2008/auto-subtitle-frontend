<template>
  <div class="app-container">
    <el-card class="box-card">
      <div class="text item">
        上传成功后需要等待几分钟生成字幕文件，可以刷新本页面查看并下载，文件格式为{上传文件名}.srt。
      </div>
    </el-card>
    <el-table :data="list" v-loading.body="listLoading" element-loading-text="拼命加载中" border fit highlight-current-row>
      <el-table-column align="center" prop="name" label='字幕' width="500">
      </el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button
            size="small"
            @click="download(scope.row.url)">下载</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      try {
        this.listLoading = true
        axios.get(process.env.BASE_API + '/table/list/').then(response => {
          this.list = response.data
          console.info(this.list)
          this.listLoading = false
        })
      } catch (error) {
        console.log(error)
      }
    },
    download(url) {
      window.open(url)
    }
  }
}
</script>
