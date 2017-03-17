<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>高级搜索</el-breadcrumb-item>
    </el-breadcrumb>
  
    <el-form :model="advancedQuery"
             label-position="right"
             label-width="100px"
             style="margin-top:30px">
      <el-form-item label="标题包含:">
        <el-input v-model="advancedQuery.titleMust"></el-input>
      </el-form-item>
      <el-form-item label="标题不包含:">
        <el-input v-model="advancedQuery.titleNotMust"></el-input>
      </el-form-item>
      <el-form-item label="正文包含:">
        <el-input v-model="advancedQuery.textMust"></el-input>
      </el-form-item>
      <el-form-item label="正文不包含:">
        <el-input v-model="advancedQuery.textNotMust"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">搜索</el-button>
        <el-button type="danger"
                   @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      advancedQuery: {
        titleMust: '',
        titleNotMust: '',
        textMust: '',
        textNotMust: ''
      }
    }
  },
  methods: {
    reset() {
      for (var key in this.advancedQuery) {
        if (this.advancedQuery.hasOwnProperty(key)) {
          this.advancedQuery[key] = ''
        }
      }
    }
  }
}
</script>