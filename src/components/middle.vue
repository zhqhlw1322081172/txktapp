<template>
<div class="middle">
	
    <!-- 内容部分 -->
	<section class="boxfor">
		<div class="secImg">
			<img src="../assets/img/n1.jpg">
			<router-link to = "/good"><img src="../assets/img/n2.jpg"></router-link>
		</div>
		 <!-- 第一部分 -->
		<div class="sectone" >
			<h2 class="secwz">
				{{msg}}
				<ul>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</h2>
			<div class="seclist">
				<em>课程</em>
				<div class="secul">
					<ul>
						<li>不限</li>
						<li>HTML/CSS</li>
						<li>JavaScript</li>
						<li>HTML5</li>
						<li>jQuery</li>
						<li>Vue</li>
						<li>Bootostrap</li>
						<li>Web全栈开发</li>
					</ul>
				</div>
			</div>
			<div class="seclist">
				<em>水平</em>
				<div class="secul">
					<ul>
						<li>不限</li>
						<li>基础</li>
						<li>进阶</li>
					</ul>
				</div>
			</div>
			
			
			<ul class="secfoot">
				<li v-for = "(math,index) in maths.slice(0, 4)" :key="index">
					<router-link :to='"/goodslist/"+math.id'>
						<a class="seclia">
							 <img :src="math.classimg">
							<h3>{{math.classwz}}</h3>
							<p>{{math.classnum}}</p>
						</a>
					</router-link>
				</li>
			</ul>
		</div>
		
		
		<!-- 第二部分 -->
		<div class="sectone">
			<h2 class="secwz">
				精选系统课
				<ul>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</h2>
			<div class="seclist">
				<em>课程</em>
				<div class="secul">
					<ul>
						<li>不限</li>
						<li>HTML/CSS</li>
						<li>JavaScript</li>
						<li>HTML5</li>
						<li>jQuery</li>
						<li>Vue</li>
						<li>Bootostrap</li>
						<li>Web全栈开发</li>
					</ul>
				</div>
			</div>
			<div class="seclist">
				<em>水平</em>
				<div class="secul">
					<ul>
						<li>不限</li>
						<li>基础</li>
						<li>进阶</li>
					</ul>
				</div>
			</div>
			
			
			<ul class="secfoot">
				<li v-for ="(math,index) in maths.slice(4,10)" :key="index" >
					<router-link :to = '"/goodslist/"+math.id'>
						<a class="seclia">
							<img :src="math.classimg">
							<h3>{{math.classwz}}</h3>
							<p>{{math.classnum}}</p>
						</a>
					</router-link>
				</li>
			</ul>
		</div>
		
		
		<!-- 第三部分 -->
		 <div class="sectone">
			<h2 class="secwz">
				精选专题课
				<ul>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</h2>
			<div class="seclist">
				<em>课程</em>
				<div class="secul">
					<ul>
						<li>不限</li>
						<li>HTML/CSS</li>
						<li>JavaScript</li>
						<li>HTML5</li>
						<li>jQuery</li>
						<li>Vue</li>
						<li>Bootostrap</li>
						<li>Web全栈开发</li>
					</ul>
				</div>
			</div>
			<div class="seclist">
				<em>水平</em>
				<div class="secul">
					<ul>
						<li>不限</li>
						<li>基础</li>
						<li>进阶</li>
					</ul>
				</div>
			</div>
			
			
			<ul class="secfoot">
				<li v-for ="(math,index) in maths.slice(10,16)" :key="index" >
					<router-link :to = '"/goodslist/"+math.id'>
						<a class="seclia">
							 <img :src="math.classimg">
							<h3>{{math.classwz}}</h3>
							<p>{{math.classnum}}</p>
						</a>
					</router-link>
				</li>
			</ul>
		</div> 
	</section> 

	<!-- 查看全部 -->
	<div class="more">
		<a href="#">查看全部课程</a>
	</div>

	<!-- 热门培训 -->
	<section>
		<h2 class="secwz">
			精选专题课
		</h2>
		<ul class="nav">
			<li class="navli">IT</li>
			<li>设计</li>
			<li>电商</li>
			<li>职业</li>
			<li>升学</li>
			<li>兴趣</li>
			<li>语言</li>
		</ul>
		<div class="tab">
			<div class="tablist">
				<a href="#">excel培训</a>
				<a href="#">linux培训</a>
				<a href="#">软件开发培训</a>
				<a href="#">微商培训</a>
				<a href="#">vr培训</a>
				<a href="#">php培训</a>
				<a href="#">算法工程师培训</a>
				<a href="#">数控编程培训</a>
				<a href="#">编程培训</a>
			</div>
		</div>
	</section>
</div>
</template>


<script>



export default {
	name:'index',
    data () {
        return {
			msg:"精选公开课",
			maths:[],
        }
	},
	mounted () {   
		fetch('http://localhost:3000/maths')   
		.then((res)=>{        
			return res.text(); // res.text()是一个Promise对象     
		})   
		.then((res)=>{    
			console.log(res);        
			this.maths =  JSON.parse(res);     
		})  
	} 
}
</script>

<style scoped>
/* 内容部分 */

.secImg{
	height: .8rem;
	background: white;
	display: flex;
	align-items: center;
	border-bottom:1px solid #f2f1f3;
}
.secImg img{
	width: 1.87rem;
	height: .5rem;
}
.secImg img:first-child{
	border-right:1px solid #f2f1f3;
}
/* 第一部分 */
.sectone{
	height: auto;
}
.secwz{
	font-size: .16rem;
	height: .22rem;
	line-height: .22rem;
	text-align: center;
	font-weight: 100;
	color: #777;
	letter-spacing: 4px;
	margin-top: .2rem;
	position: relative;
}
.secwz::before{
	content: "";
	display: inline-block;
	-webkit-transform: rotate(30deg);
    width: 1px;
    height: .09rem;
    background: #cecece;
	margin-right: .04rem;
}
.secwz::after{
	content: "";
	display: inline-block;
	-webkit-transform: rotate(30deg);
    width: 1px;
    height: .09rem;
    background: #cecece;
	margin-left: .04rem;
}
.secwz ul{
	position: absolute;
    top: 50%;
    right: .13rem;
    margin-top: -.02rem;
    height: .04rem;
}
.secwz ul li{
	display: inline-block;
    margin-right: .02rem;
    border-radius: .02rem;
    width: .04rem;
    height: .04rem;
    vertical-align: top;
	background: #cacaca;
	margin: auto;
}
.seclist{
	height: .22rem;
	overflow: hidden;
    position: relative;
    margin-top: 12px;
    white-space: nowrap;
}
.seclist em{
	position: absolute;
    top: 1px;
    left: .09rem;
    font-size: 12px;
    font-style: normal;
    color: #bbb;
}
.secul{
	overflow-x: auto;
    overflow-y: hidden;
    position: relative;
	margin-left: .54rem;
    height: 140%;
    font-size: 0;
    line-height: .2rem;
}
.secul ul{
	display: inline-block;
    padding-right: .3rem;
    height: .26rem;
    white-space: nowrap;
    color: #777;
}
.secul ul li:first-child{
	font-size: .14rem;
	font-weight: 700;
}
.secul ul li:first-child::before{
	content: "";
	position: absolute;
    bottom: .04rem;
    left: 50%;
    margin-left: -.02rem;
    border-radius: .02rem;
    width: .04rem;
    height: .04rem;
    background-color: #23b8ff;
}
.secul ul li{
	display: inline-block;
    position: relative;
    margin-right: .26rem;
    height: .26rem;
    font-size: .12rem;
    line-height: .2rem;
    vertical-align: top;
}

.secfoot{
	display: flex;
	flex-wrap:wrap;
	margin-top: 14px;
    padding: 0 .05rem 0 .1rem;
}
.secfoot li{
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.seclia{
	width: 1.77rem;
	padding-bottom: .1rem;
}
.seclia img{
	width: 1.77rem;
	height: .99rem;
}
.seclia h3{
	margin-top: .07rem;
    padding: 0 .04rem;
	font-size:.16rem;
	color: #000;
	height: .4rem;
	line-height: .2rem;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
}
.seclia p{
	font-size: .14rem;
	/* line-height: 19px; */
    color: #23b8ff;
	padding-left: .04rem;
    margin-top: .05rem;
}

/* 查看全部 */
.more{
	width: 3.55rem;
	height: .45rem;
	background: #f6f6f6;
	margin: auto;
}
.more a{
	display:block;
	font-size: .14rem;
	color: #bdbdbd;
	line-height:.45rem ;
	margin: 0 10px 13px;
    border-radius: 2px;
	text-align: center;
}

/* 热门培训 */
.nav{
	width: 3.51rem;
	margin: auto;
	border-bottom: 1px solid #f2f2f2;
}
.nav{
	overflow: hidden;
}
.nav li {
	float: left;
	height: .42rem;
	font-size: 14px;
	line-height: .42rem;
	text-align: center;
	padding: 0 .12rem;
	color: #535353;
}
.nav .navli{
	color: #23b8ff;
	border-bottom: 1px solid #23b8ff;
}
.tab{
	width: 3.51rem;
	margin: auto;
	padding: 12px 4px;
}
.tablist{
	height: .78rem;
	display: flex;
	flex-wrap: wrap;
	overflow: hidden;
}
.tablist a{
	color: #656565;
	border: 1px solid #ddd;
    border-radius: 20px;
    font-size: .14rem;
    padding: 0 .14rem;
    margin-right: 6px;
    margin-bottom: 6px;
	line-height: .32rem;
}
</style>

