<template>
  <el-row :gutter='50' style="padding-top:50px;">
      <el-col :span='12'>
          <div id="echart1" style="height:300px;border:1px solid #d1dbe5">

          </div>
      </el-col>
      <el-col :span='12'>
          <div class="block">
            <span class="demonstration">选择日期</span>
            <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions0">
            </el-date-picker>
        </div>
      </el-col>
      <el-col>
          <h2 style='line-height:50px;margin-top:20px'> 上传图片</h2>
        <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>

      </el-col>
  </el-row>
</template>

<script>
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';

export default {
    data(){
        return {
            value1: '',
            pickerOptions0: {
                // disabledDate(time) {
                //     return time.getTime() < Date.now() - 8.64e7;
                // }
            },
            imageUrl: ''

        }
    },
    mounted(){
        this.myChart = echarts.init(document.getElementById('echart1'));
        // console.log(this.myChart)
        // this.initData();


        this.drawChart('echart1',['高铁','普铁','其他'],[20,30,59])
    },
    methods:{
        drawChart(eleStr, xDate, yDate) {

            // 初始化图表
            // var myChart = echarts.init($("#" + eleStr)[0]);

            // 指定图表的配置项和数据
            var option = {
                color: ['#3398DB'],
                splitLine: {
                    show: false
                },
                grid: {
                    height: 250,
                    y: 25,
                    containLabel: true,
                    borderWidth: 0
                },
                xAxis: {
                    data: xDate,
                    splitLine: {
                        show: false
                    }
                },
                yAxis: {
                    splitLine: {
                        show: false
                    }
                },
                calculable: false,
                series: [{
                    type: 'bar',
                    barWidth: 30,
                    data: yDate,
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: '#676a6c',
                                    fontSize: 14
                                }
                            }
                        }
                    }
                }]
            };

            // 使用刚指定的配置项和数据显示图表。
            this.myChart.setOption(option);
        },
        handleAvatarSuccess(res, file) {
            console.log(file)
            this.imageUrl = URL.createObjectURL(file.raw);
            console.log(this.imageUrl)
        },
        beforeAvatarUpload(file) {
            // const isJPG = file.type === 'image/jpeg';
            // const isLt2M = file.size / 1024 / 1024 < 2;

            // if (!isJPG) {
            // this.$message.error('上传头像图片只能是 JPG 格式!');
            // }
            // if (!isLt2M) {
            // this.$message.error('上传头像图片大小不能超过 2MB!');
            // }
            // return isJPG && isLt2M;
        }
    },
    watch: {
        // pieData: function (){
        //     this.initData()
        // }
    }
}
</script>

<style>
    .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>


