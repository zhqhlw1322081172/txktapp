<template>
  <div class="indexd">
    <classfytop/>
    <div class="content">
        <classfymid/>
        <classfymid/>
        <classfymid/>
        <classfymid/>
        <classfymid/>
        <classfymid/>
        <classfymid/>
    </div>
    <bottom/>
  </div>
</template>

<script>
import classfytop from "../components/classfytop";
import classfymid from "../components/classfymid";
import bottom from "../components/bottom";


export default {
  name: 'index',
  components:{
    classfytop,classfymid,bottom
  }
}
</script>

<style scoped>


</style>
