<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      :label="label">
       <template scope="scope">
        <router-link tag="p" :to="{ name: 'detail', params: { id: scope.row._id }}">{{ scope.row._source.title }}</router-link>
      </template>
    </el-table-column>
  </el-table>
</template>


<script>
  export default {
    name: 'resultList',
    props:['results'],
    computed: {
      tableData:function() {
        if( this.results.length === 0 ) {
          return []
        }
        return this.results.hits.hits
      },
      label:function(){
        return `共有${this.results.hits.total}条结果，耗时${this.results.took}ms.`
      }
    },
    methods: {
      hello: function(id){
        console.log(id)
      }
    }
  }
</script>