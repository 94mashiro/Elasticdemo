<template>
  <div>
    <result-list :results="results"></result-list>
    <br>
    <search-bar></search-bar>
  </div>
</template>

<script>
  import resultList from '../components/resultList.vue'
  import searchBar from '../components/searchBar.vue'
  export default {
    components: {
      resultList,
      searchBar
    },
    data(){
      return {
        results: []
      }
    },
    watch: {
      '$route' (to, from) {
        var _this = this;
        this.$store.dispatch('searchWikiByTitle', to.params.query).then(()=>{
          _this.results = _this.$store.state.search.results
        })
      }
    },
    created () {
      var _this = this;
      this.$store.dispatch('searchWikiByTitle', this.$route.params.query).then(()=>{
          _this.results = _this.$store.state.search.results
        })
    }
  }

</script>
