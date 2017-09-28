<template>
    
  <div class="wrapper-content-tabs pr15">
    <!-- <header-top></header-top> -->
	<div class="" id="home_project" style="text-align: center;">
		<img src="http://owner.imydao.com/build/images/index_image.png">
	</div>

  </div>
</template>
<script>
import headerTop from './headerTop'
export default {
  created(){
      console.log(this.$route.meta)
  },
  components:{
    headerTop
  }
}
</script>

<style>
#home_project img {
    width: 100%;
    margin-left: -10px;
    /* background: url(../build/images/index_image.png); */
     height: calc(100% - 103px); 
}
</style>


