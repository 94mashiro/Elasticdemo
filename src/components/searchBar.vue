<template>
  <div>
    <el-form class="demo-form-inline">
      <el-form-item>
        <el-input v-model="query" placeholder="搜索一下" @submit.prevent="onSubmit"></el-input>
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
    name: 'searchBar',
    data() {
      return {
        query: ''
      }
    },
    methods: {
      onSubmit() {
        this.$router.push({name:'search',params:{query:this.query}})
      }
    }
  }

</script>