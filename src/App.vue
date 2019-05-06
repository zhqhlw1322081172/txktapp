<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import index from "./pages/index";



export default {
  name: 'App',
  components:{
    index
  },
  mounted:function(){
   
  }
}
</script>

<style>
#app {
  width:3.75rem;
}
body,h1,h2,h3,h4,h5,h6,p,ul,ol,dl,dd,td,input,select,option,textarea{
	margin:0;
	padding:0;
}
html,body{
	height: 100%;
}
html{
	font-size: 26.67vw;
}
body{
	font-family:"微软雅黑";
	display: -webkit-flex;
  -webkit-flex-direction:column;
  
}
ul,ol{
	list-style:none;
}
a{
	text-decoration:none;
}
img{
	border:none;
	display: block;
}

/* 圣杯布局 */
.indexd{
  display: flex;
  height:100%;
  flex-direction: column;
  justify-content: space-between;
}
.content{
	flex: 1;
  overflow-y: auto;
  height: 100%;

}
</style>
