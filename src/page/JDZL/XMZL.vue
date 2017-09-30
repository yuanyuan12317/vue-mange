<template>
    <el-row :gutter="40" style='padding:20px'>
        <el-col :span='6' >
            <h2 class='xmzl-menu'>菜单管理</h2>
            <el-tree v-loading='loading' style='min-height:200px' :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </el-col>
        <el-col :span='17' >
            <el-table v-loading.body='loading' element-loading-text="拼命加载中..." :data="gridData" style='min-height:200px' border>
                <el-table-column property="date" label="日期" width="150"></el-table-column>
                <el-table-column property="name" label="姓名" width="200"></el-table-column>
                <el-table-column property="address" label="地址"></el-table-column>
                <el-table-column fixed="right" label="操作" width="100">
                    <template scope="scope">
                        <el-button @click="dialogTableTwoVisible = true" type="text" size="small">查看</el-button>
                        <el-button type="text" size="small">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="Pagination" style="text-align: right;margin-top: 10px;">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-size="20"
                  layout="total, prev, pager, next"
                  :total="count">
                </el-pagination>
            </div>
        </el-col>
    </el-row>
</template>
<script>
export default {
  data(){
      return{
          treeData:[],
          gridData:[],
          defaultProps: {
            children: 'children',
            label: 'label'
         },
         loading:true,
         currentPage:1,
         count:1000
      }
  },
  created(){
    let that = this;
    // Loading.service(options);
    this.axios.get('../../../static/data.json')
    .then(function (response) {
        // console.log(response)
        setTimeout(function(){
            that.gridData = response.data.gridData;
            that.treeData = response.data.treeData;
            that.loading = false;
        },1000)
       
    })
  },
  methods: {
      handleNodeClick(data) {
        console.log(data);
      },
      handleSizeChange(size){

      },
      handleCurrentChange(currentPage){

      }
  },
  components:{
  }
}
</script>

<style>
.xmzl-menu{
    height: 40px;
    line-height: 40px;
    /* border:1px solid #eee; */
    background: #eef1f6;
    border:1px solid #d1dbe5; 
    border-bottom:none;
    box-sizing: border-box;
    text-indent: 20px;
    color:#000;
}
</style>


