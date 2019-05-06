<template>
    <div class="indexd">
        <top/>
        <div class="content">
            <timetoday/>
            <timelist/>
            <button class="nomore">
			没有更多数据
		    </button>
        </div>
        <bottom/>
    </div>
</template>

<script>

import top from "../components/top";
import timetoday from "../components/timetoday";
import timelist from "../components/timelist";
import bottom from "../components/bottom";

export default {
    name:"timetable",
    data(){
        return{

        }
    },
    components:{
    top,timetoday,timelist,bottom
  }
}
</script>

<style>
.nomore{
	display: block;
    background-color: #fff;
    text-align: center;
    margin: 0;
    padding: .08rem 0;
    font-size: .16rem;
    width: 100%;
    border: 0;
}
</style>

