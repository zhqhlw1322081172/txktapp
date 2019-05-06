<template>
        <div class="today">
            <p class="todp">今天上课</p>
            <div class="thing">
                <p class="thip">
                    <span class="mint">
                        <span>0</span>
                        分钟
                    </span>
                    <i></i>
                    <span class="ready">赶紧开始上课吧！</span>
                </p>
                <a href="#">时长兑奖励</a>
            </div>
	    </div>
</template>

<script>
export default {
    name:"timetoday",
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.today{
	padding: .2rem .15rem;
	border-bottom: 1px solid #f7f7f7;
}
.todp{
	height: .16rem;
	line-height: .16rem;
	font-size:12px;
	color: #777;
}
.thing{
	width: 100%;
	height: .32rem;
	padding-top: .1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.thip{
	display: flex;
	align-items: center;
}
.thip .mint{
	display: flex;
	align-items: center;
	font-size:12px;
	color: #000;
}
.mint span{
	font-size: .28rem;
	margin-right: .02rem;
}
.thip i{
	height: .1rem;
    display: inline-block;
    border-left: 1px solid #bbb;
    margin: 0 5px;
}
.ready{
	font-size:12px;
	color: #000;
}
.thing a{
	width: .88rem;
    height: .28rem;
    line-height:.28rem;
    text-align: center;
    border: 1px solid #23b8ff;
    border-radius: 3px;
    background: #fff;
    font-size: 14px;
    box-sizing: border-box;
    border-radius: .14rem;
    color: #23b8ff;
}
</style>


