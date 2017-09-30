<template>
  <el-row class="tac">
      <slide-bar @changenav='changeNavs' :iscollapse='isCollapse'></slide-bar>
      <div  id="page_wrapper">
        <el-row class="row">
            <nav class="navbar_static_top clear">
                <div class="navbar_header">
                    <el-button class='fullbtn' @click='changeMenuStyle'><i class="el-icon-fa-bars"></i></el-button>
                    <!-- <a class="btn btn-primary fl navbar_minimalize" href="javascript:;" style="background: #2f4050;"><i class="el-icon-fa-bars"></i></a> -->
                    <div class="navbar_title fl">
                        安全生产双重预防管控信息系统
                    </div>
                </div>
                <ul class="navbar_top_links">
                    <li>
                        <div class="navbar_name">
                            <a href="javascript:;" class="MydaoXJUser" title="当前登录用户" id="MydaoXJUser"><i class="el-icon-fa-user-circle mr10"></i>管理员</a>
                        </div>
                    </li>
                    <li>
                        <a href="javascript:;" id="quanping">
                            <i class="el-icon-fa-window-maximize mr10"></i>全屏</a>
                    </li>
                    <li>
                        <a href="javacript:;" id="XJuser_password">
                            <i class="el-icon-fa-unlock-alt mr10"></i>修改密码</a>
                    </li>
                    <li>
                        <a href="javacript:;" id="XJuser_logout">
                            <i class="el-icon-fa-sign-out mr10"></i>退出
                        </a>
                    </li>
                </ul>
            </nav>
        </el-row>
        <header-top :navs ='navs' :currentnav='currentNav' @changecurrentnav='changeCurrentNav'  @delnav='delNav'></header-top>
        <el-row class="row" id="content-main">
            <div class="sidebar_collapse">
                <router-view></router-view>
			</div>
        </el-row>

      </div>
  
  </el-row>
</template>


<script>
import { getStore } from '../config/util'
import { slimScroll } from '../config/pluginInit'
import slideBar from './slideBar'
import headerTop from './headerTop'
  export default {
    data(){
        return {
            navsName:["首页"],
            navs:[
                {
                    code:"mange",
                    icon:"el-icon-fa-exclamation-triangle",
                    name:"首页"
                }
            ],
            currentNav:0,
            isCollapse:false
        }
    },
    created() {
       
    },
    mounted(){
       // 初始化滚动条
       slimScroll();

    },
    methods: {
        changeMenuStyle(){
            this.isCollapse = !this.isCollapse;
        },
        changeNavs(item){
            if(this.navsName.indexOf(item.name)>-1){
                this.currentNav =  this.navsName.indexOf(item.name);
                return false;
            }else{
                this.navsName.push(item.name)
                // item.code = "#"+item.code;
                this.navs.push(item)
                this.currentNav =  this.navs.length-1;
            }   
        },
        changeCurrentNav(currentIndex){
             this.currentNav = currentIndex;
        },
        delNav(index){
            this.navs.splice(index,1);
            this.navsName.splice(index,1);
            if(index!=this.currentNav)return;
            if(index==this.navs.length){
                this.$router.push(this.navs[index-1].code)
                this.currentNav = index-1;
            }else{
                 this.$router.push(this.navs[index].code)
                 this.currentNav = index;
            }
            return false; 
        }
      
    },
    components:{
         slideBar,
         headerTop
    }
  }
</script>

<style  lang="less" scoped>
.tac{
    width: 100%;
    height:100%;
}
#page_wrapper{
    overflow: hidden;
    height: 100%;

}
.navbar_static_top {
    height: 60px;
    line-height: 60px;
    background: url(http://owner.imydao.com/build/images/bg-titile.png);
    /* background: #f3f3f4; */
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    position: relative;
    border-bottom: 1px solid #e7eaec;
    .navbar_header {
        position: relative;
        float: left;
        .navbar_title {
            color: #FFFFFF;
            font-size: 22px;
            margin-left: 80px;
        }
        .fullbtn {
            position: absolute;
            top: 50%;
            margin-top: -18px;
            left: 12px;
        }
    } 
    .navbar_top_links {
        float: right;
        margin: 0;
        li {
            float: left;
            line-height: 60px;
            height: 60px;
            margin-right: 20px;
            a {
                min-height: 50px;
                color: #FFFFFF;
            }
        }
    }
}
.content_tabs {
    position: relative;
    height: 42px;
    background: #fafafa;
    line-height: 40px;
    border-bottom: solid 2px #2f4050;
    button {
        background: #fff;
        border: 0;
        height: 40px;
        width: 40px;
        outline: none;
    }
    .roll-nav {
        position: absolute;
        width: 40px;
        height: 40px;
        text-align: center;
        color: #999;
        z-index: 2;
        top: 0;
    }
    .roll-left {
        left: 0;
        border-right: solid 1px #eee;
    }
    nav.page-tabs {
        margin-left: 40px;
        width: 100000px;
        height: 40px;
        overflow: hidden;
        .page-tabs-content {
            float: left;
        }
        a {
            display: block;
            float: left;
            border-right: solid 1px #eee;
            padding: 0 15px;
            &.active {
                background: #2f4050;
                color: #a7b1c2;
            }
        }
    }
    .roll-right {
        right: 0;
        border-left: solid 1px #eee;
        &.J_tabRight {
            right: 80px;
        }
        &.roll-right.btn-group {
            width: 80px;
            padding: 0;
            button {
                width: 80px;
            }
        }
    }
}
#content-main {
    height: calc(~"100% - 103px");;
    // height: 80%;
    overflow: hidden;
    padding: 0px 5px 0 10px;
    background: #FFF;
}
.slimScrollDiv >* {
    overflow: hidden;
}

</style>
