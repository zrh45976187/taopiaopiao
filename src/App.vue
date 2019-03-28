<template>
    <div id="app">
		<div class="tabbar">
				       <router-link tag="div" to="/" class="tab-item">
				           <span class="icon icon---1"></span><span class="text">首页</span>
				       </router-link>
				       <router-link tag="div" to="/about" class="tab-item">
				           <span class="icon icon-icon"></span><span class="text">影院</span>
				       </router-link>
				       <router-link tag="div" to="/mine" class="tab-item">
				           <span class="icon icon-uniE902"></span><span class="text">我的</span>
				       </router-link>
		</div>
		<router-view :login="login" @login="login = true"></router-view>
    </div>
</template>


<script>
	const url ="/api/PageSubArea/HotPlayMovies.api?locationId=290"
    export default {
        name: 'app',
		  data() {
		    return {
				movies:{},
		        movies2: {},
				login:false
		    }
		}	
    }
</script>
<style>
   #app {
         position: relative;
  		width: 100%;
  		height: 100%;

  }
  body{
  	margin: 0;
  	padding: 0;
  }
    .tabbar {
      display: flex;
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 56px;
      border-top: 1px solid #ccc;
      background: #ffffff;
	  z-index: 100;
  }
  .tab-item {
      flex: 1;
      height: 100%;
      color: #969696;
  }
  
  .tab-item.coll {
      color: rgba(252,108,122);
  }
  
  .tab-item .icon {
      display: inline-block;
      width: 100%;
      height: 25px;
      line-height: 30px;
      font-size: 25px;
      text-align: center;
  }
  
  .tab-item .text {
      display: inline-block;
      height: 12px;
      width: 100%;
      font-size: 13px;
      text-align: center;
  }
</style>
