<template>
    <div>
        <!-- header部分 -->
		
		<header>
			<img src="../assets/img/g1.jpg">
		</header>


        <goodcom/>
        <goodpic/>

        <!-- footer部分 -->
		<footer>
			<p>Copyright © 2019 Tencent. All Rights Reserved.</p>
		</footer>

    </div>
</template>

<script>
import goodcom from "../components/goodcom"
import goodpic from "../components/goodpic"

export default {
    name:"good",
    data(){
        return{

        }
    },
    components:{
        goodcom,goodpic
    }
}
</script>

<style scoped>
/* header */
header{
	height: 1.48rem;
}
header img{
	width: 100%;
	height: 100%;
}


footer{
	width: 100%;
	height: .6rem;
	line-height: .6rem;
	background-color: #444547;
    color: #777;
}
footer p{
	text-align: center;
	font-size: .14rem;
}
</style>


