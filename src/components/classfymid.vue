<template>
    <div class="listone">
        <a href="#" class="onea"><img src="../assets/img/cs1.jpg"><span>互联网产品</span></a>
        <div class="box">
            <a href="#">产品策划</a>
            <a href="#">产品运营</a>
            <a href="#">游戏策划</a>
            <a href="#">游戏运营</a>
            <a href="#">新媒体营销</a>
            <div class="much" @click = "func">更多<img src="../assets/img/cm1.png"></div>
            <a href="#">网络营销理论</a>
            <a href="#">SEO</a>
            <a href="#">SEM</a>
        </div>
    </div>
</template>

<script>

import $ from "jquery";

export default {
    name:"index",
    data(){
        return{

        }
    },
    methods:{
        func: function(){
            $(".much").each(function(){
                $(this).css("display","none")
                $(this).parent().css("height",".96rem")
            });
        }
    }
}


</script>

<style scoped>
.listone{
	width: 100%;
	height: auto;
	display: flex;
	justify-content: center;
	border-bottom:1px solid #eeeeee;
}
.onea{
	width: 1rem;
	height: .64rem;
	color: #d3d3d3;
	text-align: center;
	font-size: .15rem;
}
.onea img{
	margin:.15rem auto .08rem;
	width:.18rem;
	height: .18rem;
}
.onea span{
	display: block;
	font-size: .14rem;
}
.box{
	margin:.1rem auto;
	display: flex;
	flex-wrap: wrap;
	width: 2.76rem;
	height: .64rem;
	overflow: hidden;
}
.box a{
	color: #464646;
	margin:0 .1rem 0;
	line-height: .3rem;
	font-size: .14rem;
}
.box a::after{
	content:"|";
	font-size:.14rem;
	color: #ededed;
	margin-left:.1rem;
}
.much{
	color: #464646;
	display: flex;
	align-items: center;
	line-height: .24rem;
	font-size: .14rem;
}
.much img{
	margin: auto;
	width: .2rem;
	height: .2rem;
}


.linetwo a{
	margin-right:.6rem;
}

</style>


