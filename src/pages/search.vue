<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>搜索列表</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>{{this.$route.params.query}}</h1>
    <!--<search-bar></search-bar>-->
    <result-list :results="results"></result-list>
    <br>
    <pagination :totalNum="results.hits.total" @changeOffset="changeOffset"></pagination>
  </div>
</template>

<script>
  import resultList from '../components/resultList.vue'
  import searchBar from '../components/searchBar.vue'
  import pagination from '../components/pagination.vue'
  export default {
    components: {
      resultList,
      searchBar,
      pagination
    },
    data() {
      return {
        results: []
      }
    },
    methods: {
      changeOffset: function (offset) {
        var _this = this;
        var options = {
        title: this.$route.params.query,
        offset: offset
      }
        this.$store.dispatch('searchWikiByTitle', options).then(() => {
          _this.results = _this.$store.state.search.results
        })
      }
    },
    watch: {
      '$route' (to, from) {
        var _this = this;
        var options = {
        title: to.params.query,
        offset: 0
      }
        this.$store.dispatch('searchWikiByTitle', options).then(() => {
          _this.results = _this.$store.state.search.results
        })
      }
    },
    created() {
      var _this = this;
      var options = {
        title: this.$route.params.query,
        offset: 0
      }
      this.$store.dispatch('searchWikiByTitle', options).then(() => {
        _this.results = _this.$store.state.search.results
      })
    }
  }

</script>
