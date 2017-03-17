<template>
  <div>
    <el-form class="demo-form-inline">
      <el-form-item>
        <!--<el-input v-model="query" placeholder="搜索一下" ></el-input>-->
        <el-autocomplete v-model="query"
                         :fetch-suggestions="querySearchAsync"
                         placeholder="请输入内容"
                         size="large"
                         @select="handleSelect"></el-autocomplete>
      </el-form-item>
      <el-form-item>
        <el-radio-group v-model="searchModel">
          <el-radio :label="1">标题</el-radio>
          <el-radio :label="2">全文</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="onSubmit">查询</el-button>
        <el-button type="success"
                   @click="goAdvanced">高级搜索</el-button>
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
      query: '',
      searchModel: 1
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('changeSearchModel', this.searchModel === 1 ? 'title' : 'text')
      this.$router.push({
        name: 'search',
        params: {
          query: this.query
        }
      })
    },
    querySearchAsync(queryString, cb) {
      api.getSuggest(queryString, function (results) {
        cb(results)
      })
    },
    handleSelect(item) {
      console.log(item);
    },
    goAdvanced() {
      this.$router.push({ path: 'advanced' });
    }
  }
}

</script>


<style scope>
.el-autocomplete {
  width: 100%;
}
</style>
