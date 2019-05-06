<template>
    <div>
        <!-- 第一部分 -->
        <div class="info">
            <h1>
                <img src="../assets/img/m1.jpg" >
                小丫头
            </h1>
            <span></span>
        </div>
        <!-- 第二部分 -->
        
        <div class="infosc">
            <a href="#"><img src="../assets/img/m3.jpg"><span>订单管理</span></a>
            <a href="#"><img src="../assets/img/m4.jpg"><span>收藏</span></a>
        </div>
    </div>
</template>

<script>
export default {
    name:"mytit",
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.content{
	background: #f2f2f6;
}
.info{
	width: 100%;
	height: .97rem;
	display: flex;
	justify-content: space-between;
	background: white;
	align-items: center;
	border-top:1px solid #f7f7f7;
	border-bottom:1px solid #f7f7f7;
}
.info h1{
	margin-left: .15rem;
	font-size: .24rem;
	font-weight: 100;
	display: flex;
	align-items: center;
}
.info h1 img{
	margin-right: .06rem;
	width: .6rem;
	height: .6rem;
	border-radius: 50%;
}
.info span{
	display: block;
	width: .2rem;
	height: .16rem;
	margin-right: .25rem;
	background: url(../assets/img/m2.jpg) no-repeat;
}
.infosc{
	height: .82rem;
	display: flex;
	align-items: center;
	background: white;
}
.infosc a{
	/* display: flex; */
	flex:1;
	text-align: center;
	color: #313131;
}
.infosc a img{
	width: .2rem;
	height: .16rem;
	margin: auto;
}
.infosc a span{
	display: block;
	margin-top:11px;
	font-size: .14rem;
}




</style>


