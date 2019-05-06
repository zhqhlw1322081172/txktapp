<template>
    <div>
        <!-- 学员评论 -->
        <div class="student">
            <h2 class="headtit stu">
                学员评论(1143)
                <span>查看全部</span>
            </h2>
            <ul class="studul">
                <li>
                    <div class="stutop">
                        <img src="../assets/img/gl7.jpg">
                        <div class="stutop2">
                            <p>C****</p>
                            <span>
                                <i>☆</i>
                                <i>☆</i>
                                <i>☆</i>
                                <i>☆</i>
                                <i>☆</i>
                            </span>
                        </div>
                    </div>
                    <p class="studp">
                        很棒的视频，成哥的js课程对于我而言真的意义特别大，讲解重要知识点都会往深入的去挖
                        掘原理，为我学习后面的课程起了关键作用。成哥的js课程一直都在我的课表里，即使我已经看了
                        很多次。今晚点进来就为了听一下成哥那熟悉的声音，想想刚开始学js的时候也是感慨万千。自
                        己学前端有半年时间，现在做了两个vue的小项目和一个小程序，4月初准备找工作了，特地回来发
                        个评论感谢成哥，不仅仅是因为知识的传授，还有成哥在讲过的职业发展和人生道理。希望有同
                        学看到我这条评论，一定要看这个课程视频，真的很棒。很感谢渡一能够免费分享这么好的
                        视频，祝愿渡一越来越好。
                    </p>
                    <div class="stuspan">
                        <span>已上课4天16时1分时评论</span>
                        <span>2019-03-27</span>
                    </div>
                </li>
            </ul>
        </div>
        
        <!-- 授课机构 -->
        <h2 class="headtit">授课机构</h2>
        <div class="edu">
            <img src="../assets/img/gl8.jpg" class="eduimg">
            <div class="edur">
                <p>
                    渡一教育
                    <img src="../assets/img/r1.jpg">
                </p>
                <ul class="edulist">
                    <li>好评度96%</li>
                    <li>|</li>
                    <li>课程数33</li>
                    <li>|</li>
                    <li>学生数20万</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"listcommit",
    data(){
        return{

        }
    }
}
</script>

<style scoped>
/* 学员评论 */

.headtit{
	font-size: .18rem;
	font-weight: 400;
	line-height: .2rem;
	padding:.2rem .2rem .2rem .2rem;
}
.stu {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.stu span{
	font-size: .14rem;
	color: #777;
}
.studul{
	padding:0 .2rem .2rem .2rem;
	border-bottom: 1px solid #edeff5;
}
.stutop{
	display: flex;
	align-items: center;
}
.stutop img{
	width:.31rem;
	height: .31rem;
	border-radius: 50%;
}
.stutop2 p{
	font-size: .12rem;
}
.stutop2 span{
	display: flex;
	align-items: center;
}
.stutop2 span i{
	color: orangered;
	font-size: .15rem;
	margin: .02rem;
}
.studp{
	font-size: .14rem;
	margin-top: .1rem;
}
.stuspan{
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: .14rem;
	color: #777;
	margin:.1rem 0 0;
}

 /* 授课机构 */
.edu{
	 padding:0 .2rem .2rem .2rem;
	 display: flex;
	 align-items: center;
	 
 }
.eduimg{
	 width: .56rem;
	 height: .56rem;
	 margin-right: .1rem;
	 border-bottom: 1px solid #edeff5;

 }
 .edur p{
	 display: flex;
	 align-items: center;
	 font-size: .16rem;
 }
 .edur p img{
	 width: .44rem;
	 height: .16rem;
 }
 .edulist{
	 font-size: .14rem;
	 color: #777;
	 display: flex;
	 align-items: center;
 }
 .edulist li{
	 margin-right: .05rem;
 }
</style>


