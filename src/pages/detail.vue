<template>
  <div>
    <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>结果详情</el-breadcrumb-item>
</el-breadcrumb>
<br>
    <el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item title="标题 Title" name="1">
    {{ this.article._source.title }}
  </el-collapse-item>
  <el-collapse-item title="内容 Text" name="2">
    {{ this.article._source.text}}
  </el-collapse-item>
  <el-collapse-item title="分类 Category" name="3">
    <ol>
      <li v-for="category in this.article._source.category">{{ category }}</li>
    </ol>
  </el-collapse-item>
  <el-collapse-item title="链接 Link" name="4">
    <ol>
      <li v-for="link in this.article._source.link">{{ link }}</li>
    </ol>
  </el-collapse-item>
</el-collapse>
  </div>
</template>

<script>
  import api from '../store/api'
  export default {
    data() {
      return {
        activeNames:[],
        article: null
      }
    },
    created () {
      var _this = this
      api.getWikipediaById(this.$route.params.id, function(data){
        _this.article = data
      })
    },
  }
</script>