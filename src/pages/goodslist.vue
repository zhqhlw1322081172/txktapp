<template>
<div class="indexd">
    <listtop/>
    <div class="content">
        <listwz/>
        <listtit/>
        <listcommit/>
        <listclass/>
    </div>
    <listfood/>
</div>
</template>

<script>
import listtop from "../components/listtop";
import listwz from "../components/listwz";
import listtit from "../components/listtit";
import listcommit from "../components/listcommit";
import listclass from "../components/listclass";
import listfood from "../components/listfood";

export default {
    name:"goodslist",
    components:{
        listtop,listwz,listtit,listcommit,listclass,listfood
    }
}

</script>

<style>
.headtit{
	font-size: .18rem;
	font-weight: 400;
	line-height: .2rem;
	padding:.2rem .2rem .2rem .2rem;
}

/* 圣杯布局 */
.indexd{
  display: flex;
  height:100%;
  flex-direction: column;
  justify-content: space-between;
}
.content{
	flex: 1;
  overflow-y: auto;
  height: 100%;

}
</style>


  