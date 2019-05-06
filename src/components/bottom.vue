<template>
    <footer>
        <router-link to="/"><img src="../assets/img/f1.jpg" alt=""/><span class="foot1">首页</span></router-link>
        <router-link to="/classfy"><img src="../assets/img/f2.jpg" alt=""/><span>分类</span></router-link>
        <router-link to="/timetable"><img src="../assets/img/f3.jpg" alt=""/><span>课程表</span></router-link>
        <router-link to="/login"><img src="../assets/img/f4.jpg" alt=""/><span>我的</span></router-link>
    </footer>
</template>

<script>
export default {
  name: 'bottom',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer{
	width: 100%;
	height: .5rem;
	display: -webkit-flex;
	-webkit-align-items:center;
	border-top: 1px solid #f7f7f7;
}
footer a{
	-webkit-flex:1;
	text-align: center;
}
footer a img{
	width: .16rem;
	height: .16rem;
	margin:0 auto;
}
footer a span{
	display: block;
	color: #818181;
	font-size: 10px;
}
footer a .foot1{
	color: #76d3ff;
}

</style>
