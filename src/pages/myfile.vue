<template>
    <div class="indexd">
        <top/>
        <div class="content">
            <mytit/>
            <mymid/>
        </div>
        <bottom/>
    </div>
</template>

<script>
import top from "../components/top"
import mytit from "../components/mytit"
import mymid from "../components/mymid"
import bottom from "../components/bottom"
export default {
    name:"myfile",
    components:{
        top,mytit,mymid,bottom
    }
}
</script>

<style >

</style>


