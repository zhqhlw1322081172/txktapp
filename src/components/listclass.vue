<template>
    <div>
        <!-- 关联的付费课程 -->
        <h2 class="headtit">关联的付费课程</h2>
        <ul class="listul">
            <li>
                <div class="ulpic">
                    <img src="../assets/img/s2.jpg">
                    <span>222人购买</span>
                </div>
                <div class="words">
                    <h2 class="wordsh">Web前端开发之JavaScript
                    (Js)精英课堂【渡一教育】</h2>
                    <p>
                        ￥7699.00
                    </p>
                </div>
            </li>
        </ul>
        <ul class="eduul">
            <li>
                <img src="../assets/img/r2.jpg">
                报名全阶班签订就业合同
            </li>
            <li>
                <img src="../assets/img/r2.jpg">
                一线城市保证10万年薪
            </li>
            <li>
                <img src="../assets/img/r2.jpg">
                一线城市保证10万年薪
            </li>
        </ul>
        
        
        <!-- 老师推荐课程 -->
        <h2 class="headtit">老师推荐课程</h2>
        <ul class="listul">
            <li>
                <div class="ulpic">
                    <img src="../assets/img/g2.jpg">
                    <span>222人购买</span>
                </div>
                <div class="words">
                    <h2 class="wordsh">Web前端开发之JavaScript
                    (Js)精英课堂【渡一教育】</h2>
                    <p>
                        免费
                    </p>
                </div>
            </li>
            
            <li>
                <div class="ulpic">
                    <img src="../assets/img/g9.jpg">
                    <span>222人购买</span>
                </div>
                <div class="words">
                    <h2 class="wordsh">Web前端开发之JavaScript
                    (Js)精英课堂【渡一教育】</h2>
                    <p>
                        免费
                    </p>
                </div>
            </li>
            <li>
                <div class="ulpic">
                    <img src="../assets/img/g3.jpg">
                    <span>222人购买</span>
                </div>
                <div class="words">
                    <h2 class="wordsh">Web前端开发之JavaScript
                    (Js)精英课堂【渡一教育】</h2>
                    <p>
                        免费
                    </p>
                </div>
            </li>
            
            <li>
                <div class="ulpic">
                    <img src="../assets/img/s1.jpg">
                    <span>222人购买</span>
                </div>
                <div class="words">
                    <h2 class="wordsh">Web前端开发之JavaScript
                    (Js)精英课堂【渡一教育】</h2>
                    <p>
                        ￥999.00
                    </p>
                </div>
            </li>
        </ul>
        
        
        
        <!-- 机构热门课程 -->
        <h2 class="headtit">机构热门课程</h2>
        <ul class="listul">
            <li>
                <div class="ulpic">
                    <img src="../assets/img/s2.jpg">
                    <span>222人购买</span>
                </div>
                <div class="words">
                    <h2 class="wordsh">Web前端开发之JavaScript
                    (Js)精英课堂【渡一教育】</h2>
                    <p>
                        免费
                    </p>
                </div>
            </li>
            
            <li>
                <div class="ulpic">
                    <img src="../assets/img/g9.jpg">
                    <span>222人购买</span>
                </div>
                <div class="words">
                    <h2 class="wordsh">Web前端开发之JavaScript
                    (Js)精英课堂【渡一教育】</h2>
                    <p>
                        免费
                    </p>
                </div>
            </li>
            <li>
                <div class="ulpic">
                    <img src="../assets/img/g8.jpg">
                    <span>222人购买</span>
                </div>
                <div class="words">
                    <h2 class="wordsh">Web前端开发之JavaScript
                    (Js)精英课堂【渡一教育】</h2>
                    <p>
                        免费
                    </p>
                </div>
            </li>
            
            <li>
                <div class="ulpic">
                    <img src="../assets/img/g3.jpg">
                    <span>222人购买</span>
                </div>
                <div class="words">
                    <h2 class="wordsh">Web前端开发之JavaScript
                    (Js)精英课堂【渡一教育】</h2>
                    <p>
                        ￥999.00
                    </p>
                </div>
            </li>
            <li>
                <div class="ulpic">
                    <img src="../assets/img/g2.jpg">
                    <span>222人购买</span>
                </div>
                <div class="words">
                    <h2 class="wordsh">Web前端开发之JavaScript
                    (Js)精英课堂【渡一教育】</h2>
                    <p>
                        ￥999.00
                    </p>
                </div>
            </li>
        </ul>
        
        <!-- 相关培训 -->
        <div class="cont">
            <div class="tab">
                <div class="beftit" @click = "functab">
                    相关培训
                </div>
                <div class="afttit" @click = "funcback">
                    热门培训
                </div>
            </div>
            <div class="tablist">
                <div class="tabbef">
                    <a href="#" class="tabno">excel培训</a>
                    <a href="#" class="tabno">linux培训</a>
                    <a href="#" class="tabno">软件开发培训</a>
                </div>
                <div class="tabaft">
                    <a href="#" class="tabblo">工程师培训</a>
                    <a href="#" class="tabblo">数控培训</a>
                    <a href="#" class="tabblo">编程培训</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import $ from "jquery"

export default {
    name:"listclass",
    data(){
        return{

        }
    },
    methods:{
        functab(){
            $(".beftit").css({
			"border-bottom":"2px solid #009eef",
			"color":"#009eef"});
            $(".afttit").css({
                "border-bottom":"none",
                "color":"black"});	
            $(".tabblo").css("display","none");
            $(".tabno").css("display","block");
        },
        funcback(){
            $(".afttit").css({
			"border-bottom":"2px solid #009eef",
			"color":"#009eef"});
            $(".beftit").css({
                "border-bottom":"none",
                "color":"black"});	
            $(".tabno").css("display","none");
            $(".tabblo").css("display","block");
        }
    }
}

// $(".afttit").click(function(){
// 		$(".afttit").css({
// 			"border-bottom":"2px solid #009eef",
// 			"color":"#009eef"});
// 		$(".beftit").css({
// 			"border-bottom":"none",
// 			"color":"black"});	
// 		$(".tabno").css("display","none");
// 		$(".tabblo").css("display","block");
// 	});
	
// 	$(".beftit").click(function(){
// 		$(".beftit").css({
// 			"border-bottom":"2px solid #009eef",
// 			"color":"#009eef"});
// 		$(".afttit").css({
// 			"border-bottom":"none",
// 			"color":"black"});	
// 		$(".tabblo").css("display","none");
// 		$(".tabno").css("display","block");
// 	});
</script>

<style scoped>
/* 关联的付费课程 */
 
 .listul li{
 	padding: 0 .1rem .2rem 0;
 	overflow: hidden;
	display: flex;
 	/* border-bottom: 1px solid #f4f4f4; */
 }
 .ulpic{
 	position: relative;
 	width: 1.28rem;
 	height: .71rem;
 	padding-left: .2rem;
 	float: left;
 }
 .ulpic img{
 	width: 100%;
 	height: 100%;
 }
 .ulpic span{
 	background-color: black;
	width: 1.26rem;
     color:white;
	 text-indent: .03rem;
	 line-height: .16rem;
     font-size: 11px;
	 height: .16rem;
     position: absolute;
     bottom:0;
 }
 .words{
 	width: 2.03rem;
 	height: .62rem;
 	padding-left: .1rem;
 	float: left;
	
 }
 .words .wordsh{
 	overflow: hidden;
     text-overflow: ellipsis;
     display: -webkit-box;
 	font-weight:200;
     -webkit-line-clamp: 2;
     -webkit-box-orient: vertical;
     line-height: 1.4;
     font-size: .16rem;
    color: black;
 }
 .words p{
 	display: flex;
 	align-items: center;
 	height: .14rem;
 	font-size:.12rem ;
	color: #f4621f;
 }
 
  .eduul{
 	 font-size: .14rem;
 	 color: #777;
 	 padding:0 .2rem .2rem .2rem;
 	 border-bottom: 1px solid #edeff5;
 }
 .eduul li{
 	 display: flex;
 	 height: .24rem;
 	 align-items: center;
 	 
 }
 
 /* 相关培训 */
 .cont{
	 padding:.2rem;
 }
 .tab{
	 display: flex;
	 align-items: center;
	 font-size: .18rem;
	 height: .41rem;
	 line-height: .41rem;
	 border-bottom: 1px solid #f4f4f4;
 }
 .beftit{
	border-bottom: 2px solid #009eef;
    color: #009eef;
	margin-right: .3rem;
 }
 .tablist{
	 padding-top:.1rem;
	 display: flex;
 }
 .tabbef{
 	height: .32rem;
 	display: flex;
 	flex-wrap: wrap;
 	overflow: hidden;
 }
 .tabbef a{
	  /* display: none; */
	 color: #656565;
	 border: 1px solid #ddd;
	 border-radius: .2rem;
	 font-size: .14rem;
	 padding: 0 .14rem;
	 margin-right: 6px;
	 line-height: .30rem;
 }
 .tabaft{
 	display: flex;
 	flex-wrap: wrap;
 	overflow: hidden;
 }
 .tabaft a{
	 display: none;
	 height: .32rem;
	 color: #656565;
	 border: 1px solid #ddd;
	 border-radius: .2rem;
	 font-size: .14rem;
	 padding: 0 .14rem;
	 margin-right: 6px;
	 line-height: .30rem;
 }
</style>


