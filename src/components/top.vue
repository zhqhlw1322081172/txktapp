<template>
    <div class="header">
        <a href="#" class="heado">
            <span class="headimg"></span>
        </a>
        <a href="#" class="headt">
            <img src="../assets/img/h2.jpg">
            <span class="headss">{{msg}}</span>
        </a>
    </div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      msg:"搜索老师、机构、课堂"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
	display: flex;
	height: .32rem;
	align-items: center;
	padding:.1rem 0;
}
.header .heado{
	width: .45rem;
	height: .4em;
	text-align: center;
}
.header .heado span{
	display: block;
	background: url(../assets/img/h1.png) no-repeat;
	background-size: .26rem .26rem;
	margin:auto;
	margin-top: .06rem;
	width: .26rem;
	height: .26rem;
}

.headt{
	width: 3rem;
	height: .32rem;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #c9c9ca;
	background: #f2f2f6;
	border-radius: .2rem;
}
.headss{
	display: block;
	font-size: 12px;
	margin-left: .04rem;
	text-align: center;
}
</style>
