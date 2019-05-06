<template>
    <header>
        <div class="left">
            <router-link to = "/"><img src="../assets/img/gl0.jpg" alt=""></router-link>
            <i class="sun"></i>
            <img src="../assets/img/gl1.gif" alt="">
            <p>用APP学习</p>
        </div>
        <div class="right">
            <a href="#" class="down">下载</a>
            <a href="#" class="open">打开</a>
        </div>
    </header>
</template>

<script>
export default {
    name:"index",
    data () {
        return {
		
        }
	},
	methods:{
		
	}
}
</script>

<style scoped>
header{
	padding:.1rem ;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid #edeff5;
}
.left{
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.left img{
	display: block;
	width: .22rem;
	height: .22rem;
}
.left i{
	height: .12rem;
    display: inline-block;
    border-left: 1px solid #bbb;
    margin: 0 .08rem;
}
.left p{
	margin-left:.05rem;
	font-size: .16rem;
}
.right{
	display: flex;
}
.right a{
	width: .6rem;
	border-radius: .15rem;
	background: red;
	font-size: .16rem;
	height: .3rem;
	text-align: center;
	line-height: .3rem;
}
.right .down{
	color: #414243;
	background: #edeff5;
}
.right .open{
	color: #fbfeff;
	background: #23b8ff;
}
</style>



