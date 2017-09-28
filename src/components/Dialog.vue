<template>
  
  <div>
    <el-button  @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>

    <el-dialog title="收货地址" :visible.sync="dialogTableVisible" top='5%'>
      <el-row style="text-align:center"  v-if='!gridData'><i class="loading el-icon-loading"></i></el-row>
      
      <el-table :data="gridData">
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
    </el-dialog>


    <el-dialog title="收货地址"  :visible.sync="dialogTableTwoVisible" >
      <el-table :data="gridData" >
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="name1" label="ssdf" width="150"></el-table-column>
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="name" label="姓名" width="200"></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
    </el-dialog>

    <!-- Form -->
    <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

  </div>

</template>

<script>
  export default {
    data() {
      return {
        gridData: null,
        dialogTableVisible: false,
        dialogTableTwoVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    },
    created(){
      // console.log(axios)
      let that = this;
      this.axios.get('../../static/data.json')
        .then(function (response) {
          // console.log(response)
          that.gridData = response.data;
      })
    }
  };
</script>
<style>
  .el-dialog--small {
    width: 90%;
    height: 80%;
  }
  .loading{
    font-size: 40px;
    line-height: 80px;
  }
</style>