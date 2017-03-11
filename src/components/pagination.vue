<template>
  <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="30"
    layout="total, prev, pager, next" :total="totalNum">
  </el-pagination>
</template>

<script>
  export default{
    props:['totalNum'],
    data(){
      return {
        currentPage: 1
      }
    },
    methods: {
      handleCurrentChange:function(val){
        this.currentPage = val;
        var _this = this;
        this.$emit('changeOffset', (val-1)*15);
      },
      handleSizeChange:function(){

      }
    }
  }
</script>
