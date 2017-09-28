<template>
    <el-row div class="row content_tabs">
        <button class="btn roll-nav roll-left J_tabLeft"><i class="el-icon-fa-backward"></i></button>
        <nav class="page-tabs J_menuTabs">
            <div class="page-tabs-content">
                <el-button v-for='(item,index) in navs' :key='index' @click="navJump(item,index)" :class='{"active":currentnav==index}'> 
                    {{item.name}}
                    <i class="el-icon-fa-times-circle" v-show="item.name!='首页'" @click.stop="delNav(index)"></i>
                </el-button>
            </div>

        </nav>
        <button class= "btn roll-nav roll-right J_tabRight"><i class="el-icon-fa-forward"></i></button>
        <div class="btn-group roll-nav roll-right">
            <button class="btn dropdown J_tabClose" data-toggle="dropdown">关闭操作<span class="caret"></span>
        </button>
            <!-- <ul role="menu" class="dropdown-menu dropdown-menu-right">
                <li class="J_tabShowActive">
                    <a>定位当前选项卡</a>
                </li>
                <li class="divider"></li>
                <li class="J_tabCloseAll">
                    <a>关闭全部选项卡</a>
                </li>
                <li class="J_tabCloseOther">
                    <a>关闭其他选项卡</a>
                </li>
            </ul> -->
        </div>
    </el-row>
</template>
<script>
export default {
    props:['navs','currentnav'],
    data(){
        return{
        }
    },
    methods:{
        navJump(item,index){
            this.$router.push({ path: item.code})
            this.$emit('changecurrentnav',index)
        },
        delNav(index){
            this.$emit('delnav',index)  
        }
    },
    created(){
    }
}
</script>
<style lang='less' scoped>

.content_tabs {
    position: relative;
    height: 42px;
    background: #fafafa;
    line-height: 40px;
    border-bottom: solid 2px #2f4050;
    .btn {
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
        .el-button {
            border:none;
            border-right: solid 1px #eee;
            background: transparent;
            margin-left: 0;
            padding: 0 15px;
            line-height: 40px;
            color: #999;
            &.active{
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

</style>

