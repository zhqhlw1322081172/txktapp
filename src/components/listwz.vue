<template>
<div>
    <!-- 图片 -->
    <div class="vadioimg">
        <img :src="sj.classimg" class="pic">
        <img src="../assets/img/p1.jpg" class="player">
        <div class="vadnone">
            <img src="../assets/img/p1.jpg" class="littlip">
            立即播放
        </div>
    </div>

    <!-- 标题 -->
    <div class="tit">
        <h1>{{sj.classwz}}
        </h1>
        <div class="titflex">
            <div class="all">
                <span>{{sj.classnum}}</span>
                <span>订阅8万</span>
                <span>最近在学2万</span>
                <span>好评97%</span>
            </div>
            <div class="allright">
                <i class="sun"></i>
                <span>咨询</span>
            </div>
        </div>
    </div>

</div>
</template>

<script>



export default {
	name:"index",
	beforeCreate(){
		fetch("http://localhost:3000/maths/"+this.$route.params.id)   
		.then((res)=>{        
			return res.text(); // res.text()是一个Promise对象     
		})   
		.then((res)=>{    
			// console.log(res);        
			this.sj =  JSON.parse(res);  
		})  
	},
    data(){
        return{
			sj:{}
        }
	}
}
</script>

<style scoped>
/* 图片 */

.vadioimg{
	position: relative;
	width: 100%;
	height: 2.1rem;
}
.vadioimg .pic{
	width: 100%;
	height: 100%;
}
.player{
	position: absolute;
	left:1.6rem;
	top:.8rem ;
	width: .6rem;
	height: .6rem;
	border-radius: 50%;
}

.vadnone{
	position: absolute;
	width: 100%;
	left:0;
	top:0;
	background: rgba(0,0,0,.6);
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: .14rem;
	height: .4rem;
	display: none;
}
.vadnone img{
	width: .24rem;
	height: .24rem;
	border-radius: 50%;
}
/* 标题 */
 
.tit{
	 padding:.1rem;
	 border-bottom: 1px solid #edeff5;
 }
 .tit h1{
	font-size: .18rem;
	font-weight: 400;
	color: #000;
	line-height: .25rem;
 }
.titflex{
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: .1rem;
}
.all{
	display: flex;
	align-items: center;
	justify-content: center;
}
.all span:nth-child(1){
	color: #f4621f;
	font-size: .14rem;
}
.all span{
	color: #777;
	margin-right: .1rem;
	font-size: .08rem;
}
.allright{
	display: flex;
	align-items: center;
	justify-content: center;
}
.allright i{
	background: url(../assets/img/qq.jpg);
	display: inline-block;
	width:.11rem;
	height: .12rem;
	margin-top: .02rem;
	margin-right: .05rem;
}
.allright span{
	font-size: .08rem;
	color: #777;
}

 
</style>


