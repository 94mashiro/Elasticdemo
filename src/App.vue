<template>
  <div id="app">
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }

</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
