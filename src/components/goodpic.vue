<template>
    <!-- 图片部分 -->
    <div class="goodspic">
        <h3 class="tithead">精品课程</h3>
        <img src="../assets/img/g4.jpg">
        <img src="../assets/img/g5.jpg">
        <img src="../assets/img/g6.jpg">
        <img src="../assets/img/g7.jpg">
    </div>
</template>

<script>
export default {
    name:"goodpic",
    data(){
        return{

        }
    }
}
</script>

<style scoped>
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
.goodspic{
	width: 100%;
	padding:.1rem;
	box-sizing: border-box;
}
.goodspic img{
	margin: auto;
	width: 100%;
	height: 100%;
	margin-bottom:.1rem;
}
</style>


