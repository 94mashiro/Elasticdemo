<template>
  <div>
    <h1>查询耗时{{took}}ms</h1>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="_source.title" label="日期">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [],
        took: null
      }
    },
    created() {
      var that = this
      this.$store.dispatch('searchWikiByTitle', this.$route.params.query).then(() => {
        that.tableData = that.$store.state.search.results.hits.hits
        that.took = that.$store.state.search.results.took
      })
    }
  }

</script>
