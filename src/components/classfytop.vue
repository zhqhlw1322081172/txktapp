<template>
    <header>
		<div class="head">
			<a href="#" class="headt">
				<img src="../assets/img/c1.jpg">
				<span class="headss">搜索老师、机构、课堂</span>
			</a>
		</div>
		
		
		<div class="nav">
			<a href="#">
				<img src="../assets/img/c2.jpg" >
				<div class="chang">
					<span class="findbox line">IT</span>
					<span class="full">互联网</span>
				</div>
			</a>
			<a href="#">
				<img src="../assets/img/c3.jpg" >
				<div class="chang">
					<span class="findbox">设计</span>
					<span class="full">创作</span>
				</div>
			</a>
			<a href="#">
				<img src="../assets/img/c4.jpg" >
				<div class="chang">
					<span class="findbox">电商</span>
					<span class="full">营销</span>
				</div>
			</a>
			<a href="#">
				<img src="../assets/img/c5.jpg" >
				<div class="chang">
					<span class="findbox">职业</span>
					<span class="full">考证</span>
				</div>
			</a>
			<a href="#">
				<img src="../assets/img/c6.jpg" >
				<div class="chang">
					<span class="findbox">升学</span>
					<span class="full">考研</span>
				</div>
			</a>
			<a href="#" class="dialog">
				<img src="../assets/img/c4.jpg" >
				<div class="chang ">
					<span class="findbox">兴趣</span>
					<span class="full">生活</span>
				</div>
			</a>
			<a href="#"  class="dialog">
				<img src="../assets/img/c3.jpg" >
				<div class="chang">
					<span class="findbox">语言</span>
					<span class="full">留学</span>
				</div>
			</a>
		</div>
	</header>
</template>



<script>
export default {
  name: 'index',
  data () {
    return {
      
    }
  }
}
</script>


<style scoped>
.head{
	height: .53rem;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #23b4fe;
}
.headt{
	width: 3.3rem;
	height: .32rem;
	color:white;
	background: #65cdff;
    border-radius: .2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.headss{
	display: block;
	font-size: .14rem;
	margin-left: .04rem;
    text-align: center;
    /* line-height:.01rem; */
}


.nav{
	height: .74rem;
	/* height: .34rem; */
	display: flex;
	align-items: center;
	justify-content: center;
	background: #23b4fe;
	overflow-y: auto;
}
.nav a{
	/* display: flex;
	align-items: center; */
	flex: 1;
	text-align: center;
	color: white;
	font-size: .14rem;
}
.nav a img{
	width: .18rem;
	height: .18rem;
	margin: auto;
}
.nav a .chang {
	display: flex;
	margin: auto;
	justify-content: center;
	align-items: center;
	margin:.08rem 0 0 0;
}
.nav a .chang .full{
	display: none;
	position: relative;
}
.nav a .chang .findbox{
	position: relative;
}

.nav a .chang .line::after{
	content: '';
    display: block;
    width:.27rem ;
    position: absolute;
    left: -7px;
    bottom: -10px;
    border-bottom: 2px solid #fff;
}


</style>
