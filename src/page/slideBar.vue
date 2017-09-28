<template>
 
  <el-col  class="slidebar">
    <div class="nav_header">
      <div class="profile_element">
        <img src="http://owner.imydao.com/build/images/banner_logo.png?rev=@@hash">
      </div>
      <div class="logo_element" v-show='false'>
        <img src="http://owner.imydao.com/build/images/logo.png?rev=@@hash">
      </div>
		</div>
    <el-menu default-active="defaultActive" class="el-menu-vertical-demo" @select="handleSelect" @open="handleOpen" @close="handleClose"  theme="dark" uniqueOpened router >
       <el-menu-item-group v-for='(item,i) in menu' :key='i'>
        <el-submenu :index='item.root.code ? item.root.code : String(i)'  v-if='item.child'>
            <template slot="title" class='el-menu-item' :index='item.root.code'><i :class='item.root.icon' ></i>{{item.root.name}}</template>

            <el-menu-item  v-for='(val,index2) in item.child' :key='index2' :index="val.code"><i :class="val.icon"></i>{{val.name}}</el-menu-item>

        </el-submenu>
        <el-menu-item v-else :index="item.root.code"><i :class="item.root.icon"></i>{{item.root.name}}</el-menu-item>

       </el-menu-item-group>
      

    </el-menu>
  </el-col>
</template>


<script>
import { getStore } from '../config/util'
  export default {
    data(){
        return {
            menu:null
        }
    },
    created() {
        this.menu = JSON.parse(getStore('MYDAO_USER')).menu;
        var currentHash = window.location.hash.slice(window.location.hash.lastIndexOf('/')+1);
        for(var i=0;i<this.menu.length;i++){
          if(this.menu[i].root.code != currentHash){
            for(var j=0;j<this.menu[i].child.length;j++){
                if(this.menu[i].child[j].code==currentHash){
                  this.$emit('changenav',this.menu[i].child[j]);
                  return false;
                }
            }
          }else{
            this.$emit('changenav',this.menu[i].root);
          }
        }
         
    },  
    mounted(){
      
    },
    computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
    methods: {
      handleSelect(key,keyPath){
          if(keyPath.length>1){
            for(var i=0;i<this.menu.length;i++){
              if(this.menu[i].root.code == keyPath[0]){
                for(var j=0;j<this.menu[i].child.length;j++){
                    if(this.menu[i].child[j].code==keyPath[1]){
                      this.$emit('changenav',this.menu[i].child[j]);
                      return false;
                    }
                }
              }
            }
          }else{
            for(var i=0;i<this.menu.length;i++){
              if(this.menu[i].root.code == keyPath[0]){
                this.$emit('changenav',this.menu[i].root);
              }
            }
          }

      },
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      },
      changeNav(item,i){
        this.$emit('changenav',item)
      }
    }
  }
</script>

<style>
/* .tac{
  height:100%;
} */
.slidebar{
  width:200px;
  height:100%;
  background-color: #324157;
  float: left;
}

.nav_header {
    text-align: center;
    padding: 10px 0px;
    background: url(http://owner.imydao.com/build/images/header-profile.png) no-repeat;
}

.el-menu-item-group__title{
  display: none
}
.el-menu-item, .el-submenu__title{
  height: 44px;
  line-height: 44px;
}
.el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item.is-active {
    color: #20a0ff;
    background-color: #48576a;
}
/* .el-submenu__title{
   border-left: 3px solid #48576a;
}
.el-submenu__title:hover {
        color: #fff;
    background: #394e57;
    border-left-color: #3c8dbc;
    box-sizing: border-box;
} */

</style>
