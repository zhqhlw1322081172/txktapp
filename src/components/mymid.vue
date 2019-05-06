<template>
    <div>
        <!-- 第三部分 -->
			
			
        <ul class="infolist">
            <li>
                <a href="#">
                    余额
                    <img src="../assets/img/m5.jpg">
                    <span>0</span>
                </a>
            </li>
            <li class="diff">
                <a href="#">
                    优惠券
                    <span>0</span>
                </a>
            </li>
            <li class="difft">
                <a href="#">
                    课程分销
                    <span>￥0.00可提</span>
                </a>
            </li>
        </ul>
        
        <div class="ll">
            上课流量免费
            <img src="../assets/img/m6.jpg">
        </div>
        <!-- 最后一部分 -->
        <ul class="listul">
            <li>
                <a href="#" class="quest">
                    反馈建议
                    <img src="../assets/img/m6.jpg">
                </a>
            </li>
            <li>
                <a href="#">
                    设置
                    <img src="../assets/img/m6.jpg" class="sz">
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"mymid",
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.infolist{
	height: 1.32rem;
	margin-top: .1rem;
	background: white;
}
.infolist li{
	height: .44rem;
	display: flex;
	align-items: center;
}
.infolist li a{
	display: flex;
	align-items: center;
	width: 100%;
	height: .44rem;
	font-size:.16rem;
	color: #464646;
	margin-left:.16rem;
	border-bottom:1px solid #f4f4f4;
}
.infolist li a::after{
	content:url(../assets/img/m6.jpg);
	margin-left:.2rem;
}
.infolist li a img{
	width: 12px;
	height: 12px;
	margin-left:2.6rem ;
}
.infolist li a span{
	display: block;
	margin-left: .03rem;
}

.infolist .diff a span{
	margin-left:2.6rem ;
}
.infolist .difft a span{
	margin-left:1.74rem ;
}


.ll{
	display: flex;
	align-items: center;
	height: .44rem;
	margin:.1rem auto;
	color: #464646;
	font-size: .16rem;
	background: white;
	text-indent: .16rem;
}
.ll img{
	margin-left: 2.4rem;
}

.listul{
	height: .88rem;
	background: white;
}
.listul li{
	height: .44rem;
	display: flex;
}
.listul li a{
	display: flex;
	width: 100%;
	align-items: center;
	height: .44rem;
	color: #464646;
	margin-left: .16rem;
	font-size: .16rem;
}
.listul li .quest{
	border-bottom: 1px solid #f4f4f4;
}
.listul li a img{
	margin-left: 2.7rem;
}
.listul li a .sz{
	margin-left: 3.02rem;
}
</style>



