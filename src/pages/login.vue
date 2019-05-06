<template>
<div class="both">
    <div class="login">
        <div class="logo"></div>
        <div class="dl">
            <ul class="dltit">
                <li>
                    <input type="text" placeholder="qq号码/手机/邮箱" class="textint" @click='func1' ref='tex'>
                    <span class="textspan" v-show='show1' @click='turn1'>×</span>
                </li>
                <li>
                    <input type="password"  placeholder="请输入你的密码" class="passint" @click='func' ref='psd'>
                    <span class="passspan" v-show='show' @click='turn'>×</span>
                </li>
            </ul>
            <div class="dlbody">
                <router-link to = "/myfile">登录</router-link>
            </div>
            <div class="dlmid">
                <router-link to = "/myfile">一键登录</router-link>
            </div>
        </div>
        
        <div class="foot">
            <span>忘了密码？</span>
            <span>注册新账号</span>
        </div>
			
    </div>
</div>
</template>

<script>
export default {
    name:"login",
    data(){
        return{
			show1:false,
			show:false
        }
    },
	methods:{
		func1(){
			this.show1 = true
		},
		func(){
			this.show = true
		},
		turn(){
			if(this.show = true){
				this.$refs.psd.value='',
				this.show = false
			}
		},
		turn1(){
			if(this.show1 = true){
				this.$refs.tex.value='',
				this.show1 = false
			}
		}
	}
}
</script>

<style scoped>
.both{
    background: #eeeeee;
    height: 100%;
}
.login{
	width: 3.2rem;
	height: 5rem;
    padding:.3rem;
    margin: 0 auto;
    background: #eeeeee;
}
.logo{
	width: 2.44rem;
	height: 1rem;
	background: url(../assets/img/l1.png) no-repeat;
	background-size: 2.44rem 1rem;
	margin: 0 auto .2rem;
}
.dl{
	width: 2.9rem;
	/* height: 2.07rem; */
	margin: auto;
}
.dltit{
	height: .89rem;
	margin: auto;
	border-radius: 4px;
	background: white;
	display: flex;
	flex-wrap: wrap;
}
.dltit li{
	height: .44rem;
	border-bottom: 1px solid #eaeaea;
	display: flex;
	position: relative;
}
.dltit li input{
	text-indent: .06rem;
	width: 273px;
    height: 44px;
    color: #000;
    border: none;
    background: 0 0;
    padding-left: 15px;
    font-size: 16px;
	outline: none;
}
.dltit li span{
	display: block;
	position: relative;
	width: .2rem;
	height: .2rem;
	background: #bab9b9;
	border-radius: 50%;
	line-height: .2rem;
	font-size: .18rem;
	text-align: center;
	top:.12rem;
	right: .3rem;
}
.dltit li input::-webkit-input-placeholder{
	color: #d6d6d6;
}
.dlbody{
	height: .44rem;
	background: #146fdf;
	font-size: .16rem;
	margin-top:.2rem;
	border-radius: 4px;
	text-align: center;
	line-height: .44rem;
}
.dlbody a{
	color: white;
}
.dlmid{
	height: .44rem;
	background:white;
	font-size: .16rem;
	margin-top:.2rem;
	border-radius: 4px;
	text-align: center;
	line-height: .44rem;
}
.dlmid a{
	color: #146fdf;
}
.foot{
	width: 2.9rem;
	height: .44rem;
	margin:.1rem auto 0;
	display: flex;
	justify-content:space-between;
	align-items: center;
}
.foot span{
	line-height: .44rem;
	font-size: .14rem;
	color: #437794;
}
</style>


