<template>
  <div>
    <h1>elasticdemo</h1>
    <el-form class="demo-form-inline">
      <el-form-item>
        <el-input v-model="query" placeholder="搜索一下"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import api from '../store/api.js'

  export default {
    data() {
      return {
        query: ''
      }
    },
    methods: {
      onSubmit() {
        var that = this
        that.$router.push({name:'search',params:{query:this.query}})
      }
    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
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
