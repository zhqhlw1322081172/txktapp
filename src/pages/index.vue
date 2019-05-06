<template>
  <div class="indexd">
    <listtop/>
    <top/>
    <div class="content">
      <banner/>
      <middle/>
    </div>
    <bottom/>
  </div>
</template>

<script>
import listtop from "../components/listtop";
import top from "../components/top";
import banner from "../components/banner";
import middle from "../components/middle";
import bottom from "../components/bottom";

export default {
  name: 'index',
  components:{
    listtop,top,banner,middle,bottom
  }
}
</script>

<style>
#app {
  width:3.75rem;
  height:100%;
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
</style>
