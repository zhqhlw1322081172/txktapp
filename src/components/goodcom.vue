<template>
<div>
     <!-- 限时优惠 -->
		<div class="tit">
			<h3 class="tithead">{{msg}}</h3>
			<ul class="ullist">
				<li>
					<img src="../assets/img/g2.jpg" >
					<a href="#">学会日语，日语初级入门</a>
					<div class="spancla">
						<span class="lispan">￥99.00</span>
						<span class="nospan">
							<i></i>
							1万
						</span>
					</div>
				</li>
				<li>
					<img src="../assets/img/g3.jpg" >
					<a href="#">学会日语，日语初级入门</a>
					<div class="spancla">
						<span class="lispan">￥99.00</span>
						<span class="nospan">
							<i></i>
							1万
						</span>
					</div>
				</li>
			</ul>
		</div>

        <!-- 热门免费 -->
		<div class="tit">
			<h3 class="tithead">热门免费</h3>
			<ul class="ullist">
				<li>
					<img src="../assets/img/g8.jpg" >
					<a href="#">学会日语，日语初级入门</a>
					<div class="spancla">
						<span class="lispan">免费</span>
						<span class="nospan">
							<i></i>
							1万
						</span>
					</div>
				</li>
				<li>
					<img src="../assets/img/g9.jpg" >
					<a href="#">学会日语，日语初级入门</a>
					<div class="spancla">
						<span class="lispan">免费</span>
						<span class="nospan">
							<i></i>
							1万
						</span>
					</div>
				</li>
				<li>
					<img src="../assets/img/g2.jpg" >
					<a href="#">学会日语，日语初级入门</a>
					<div class="spancla">
						<span class="lispan">免费</span>
						<span class="nospan">
							<i></i>
							1万
						</span>
					</div>
				</li>
				<li>
					<img src="../assets/img/g2.jpg" >
					<a href="#">学会日语，日语初级入门</a>
					<div class="spancla">
						<span class="lispan">免费</span>
						<span class="nospan">
							<i></i>
							1万
						</span>
					</div>
				</li>
				<li>
					<img src="../assets/img/g9.jpg" >
					<a href="#">学会日语，日语初级入门</a>
					<div class="spancla">
						<span class="lispan">￥99.00</span>
						<span class="nospan">
							<i></i>
							1万
						</span>
					</div>
				</li>
				<li>
					<img src="../assets/img/g8.jpg" >
					<a href="#">学会日语，日语初级入门</a>
					<div class="spancla">
						<span class="lispan">￥99.00</span>
						<span class="nospan">
							<i></i>
							1万
						</span>
					</div>
				</li>
			</ul>
		</div>
		
		<!-- 精品课程 -->
		<div class="tit">
			<h3 class="tithead">精品课程</h3>
			<ul class="ullist">
				<li>
					<img src="../assets/img/g2.jpg" >
					<a href="#">学会日语，日语初级入门</a>
					<div class="spancla">
						<span class="lispan">￥99.00</span>
						<span class="nospan">
							<i></i>
							1万
						</span>
					</div>
				</li>
				<li>
					<img src="../assets/img/g2.jpg" >
					<a href="#">学会日语，日语初级入门</a>
					<div class="spancla">
						<span class="lispan">￥99.00</span>
						<span class="nospan">
							<i></i>
							1万
						</span>
					</div>
				</li>
				<li>
					<img src="../assets/img/g2.jpg" >
					<a href="#">学会日语，日语初级入门</a>
					<div class="spancla">
						<span class="lispan">￥99.00</span>
						<span class="nospan">
							<i></i>
							1万
						</span>
					</div>
				</li>
				<li>
					<img src="../assets/img/g2.jpg" >
					<a href="#">学会日语，日语初级入门</a>
					<div class="spancla">
						<span class="lispan">￥99.00</span>
						<span class="nospan">
							<i></i>
							1万
						</span>
					</div>
				</li>
			</ul>
		</div>



</div>

</template>

<script>
export default {
    name:"goodcom",
    data(){
        return{
            msg:"限时优惠"
        }
    }
}
</script>

<style scoped>
.tit{
	width: 100%;
	box-sizing: border-box;
	padding: .1rem;
}
 .tithead{
	line-height: .16rem;
	font-weight: 400;
	color: #905500;
    height: .16rem;
    font-size: .16rem;
    margin: .1rem auto .2rem;
    padding-left: 6px;
    position: relative;
    text-align: center;
}
.tithead::after{
	content:"";
	display: block;
    position: absolute;
    width: .2rem;
    height: 2px;
    bottom: -8px;
    border-radius: 2px;
    left: 50%;
    background-color: #333;
    transform: translate(-50%,0);
}
.ullist{
	display: flex;
	flex-wrap: wrap;
	margin: auto;
}
.ullist li{
	width: 48%;
	background: white;
	margin: auto;
	height: 1.8rem;
}
.ullist li img{
	width: 1.68rem;
	margin: auto;
} 
.ullist li a{
	color: #5e5e5e;
	display: block;
	margin-left: .1rem;
	margin-top: .08rem;
	line-height: .24rem;
	font-size: .16rem;
}
.spancla{
	margin-left: .1rem;
	height: .24rem;
	margin-top: .06rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
}
.spancla .lispan{
	display: block;
	color: red;
	font-size: .14rem;
}
.spancla .nospan{
	font-size: .14rem;
	color: #5E5E5E;
	display: flex;
	align-items: center;
	justify-content: center;
}

.spancla .nospan i{
	display: block;
	background:url(../assets/img/gp1.jpg);
	width: .12rem;
	height: .12rem;
}


</style>


