<template>
    <section>
		<ul class="listul">
			<li>
				<div class="ulpic">
					<img src="../assets/img/s1.jpg">
					<span>直播中</span>
				</div>
				<div class="words">
					<h2>Web前端开发之JavaScript
					(Js)精英课堂【渡一教育】</h2>
					<p>
						<i></i>
						<span>开始学习：
						第28节 input的type类型
						【渡一微课】</span>
					</p>
				</div>
				<div class="num">
					<p class="math">
						0
						<span>%</span>
					</p>
					<p class="study">已学习</p>
				</div>
			</li>
			
			<li>
				<div class="ulpic">
					<img src="../assets/img/s2.jpg">
					<span>直播中</span>
				</div>
				<div class="words">
					<h2>Web前端开发之JavaScript
					(Js)精英课堂【渡一教育】</h2>
					<p>
						<i></i>
						<span>开始学习：
						第28节 input的type类型
						【渡一微课】</span>
					</p>
				</div>
				<div class="num">
					<p class="math">
						0
						<span>%</span>
					</p>
					<p class="study">已学习</p>
				</div>
			</li>
		</ul>
	</section>
</template>

<script>
export default {
    name:"timelist",
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.listul li{
	padding: .2rem .1rem .2rem 0;
	overflow: hidden;
	border-bottom: 1px solid #f4f4f4;
}
.ulpic{
	position: relative;
	width: 1.1rem;
	height: .62rem;
	padding-left: .1rem;
	float: left;
}
.ulpic img{
	width: 100%;
	height: 100%;
}
.ulpic span{
	background-color: #e85308;
    color: #fff;
    font-size: 11px;
    padding: 2px 3px;
    position: absolute;
    top: 0;
    left: .1rem;
}
.words{
	width: 1.75rem;
	height: .62rem;
	padding-left: .1rem;
	float: left;
}
.words h2{
	overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
	font-weight:200;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.4;
    font-size: 16px;
    color: #000;
}
.words p{
	display: flex;
	align-items: center;
	height: .14rem;
	font-size:.12rem ;
}
.words p i{
	display: block;
	background: url(../assets/img/t1.jpg);
	padding-right:.03rem;
	width: .14rem;
	height: .14rem;
}
.words p span{
	height: .16rem;
	color: #777;
	overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-wrap: normal;
}
.num{
	float: left;
	padding-left: .15rem;
}
.num .math{
	width: .38rem;
	height: .38rem;
	border-radius: 50%;
	display: flex;
	border:1px solid #eef7fe;
	line-height: .5rem;
	color: rgba(24,142,238,.5);
	align-items: center;
	justify-content: center;
    font-size: .15rem;
}

.num .study{
	font-size: .13rem;
	color: rgba(24,142,238,.5);
}
</style>


