<template>
  <el-row :gutter="20" class="m-t">
      <!-- <header-top></header-top> -->
      <el-col :span='18' :offset='3'>
          <div class="grid-content">
              <script id='editor' type='text/plain' style='height:300px'></script>
          </div>
      </el-col>
     <el-col>
         <el-button @click='getUeditorContent'>保存</el-button>
     </el-col>
  </el-row>
</template>

<script>
import headerTop from '../page/headerTop'
/* eslint-disable no-new */
export default {
  name:'addnew',
  data() {
      return{
          input: '',
          msg: 'hello ueditor',
          editor: null
      }
  },
  created(){
      console.log(this.$route.meta)
  },
  mounted() {
       var _this = this;
      this.editor = UE.getEditor('editor',{
        // toolbars: [
        //     ['fullscreen', 'source', 'undo', 'redo'],
        //     ['bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc']
        // ],
        // autoHeight: false
        autoHeightEnabled:false
      });

      this.editor.ready(function() {
          _this.editor.execCommand('inserthtml', '我是之前写好的内容，现在是编辑回填', true);
      });
  },
  destroyed(){
      this.editor.destroy();
  },
  methods:{
      getUeditorContent:function(){

          console.log(111222)
          console.log(this.editor.getContent());
      }
  },
  components:{
      headerTop
  }
}
</script>
