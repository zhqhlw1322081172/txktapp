<template>
  
    <div class="swiper-container" >
            <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../assets/img/b1.jpg"></div>
            <div class="swiper-slide"><img src="../assets/img/b2.jpg"></div>
            <div class="swiper-slide"><img src="../assets/img/b3.jpg"></div>
            <div class="swiper-slide"><img src="../assets/img/b4.png"></div>
            <div class="swiper-slide"><img src="../assets/img/b5.jpg"></div>
            <div class="swiper-slide"><img src="../assets/img/b4.png"></div>
            <div class="swiper-slide"><img src="../assets/img/b6.jpg"></div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
    </div>
    
</template>

<script>

import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

export default {
    name:'banner',
    mounted(){
    var mySwiper = new Swiper('.swiper-container', {
         spaceBetween: 30,
	  loop:true,
	  autoplay: {
	  	  delay: 3000,
	  	  stopOnLastSlide: false,
	  	  disableOnInteraction:false,
	  	  },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });
  }
}

// var swiper = new Swiper('.swiper-container', {
//       spaceBetween: 30,
// 	  loop:true,
// 	  autoplay: {
// 	  	  delay: 3000,
// 	  	  stopOnLastSlide: false,
// 	  	  disableOnInteraction:false,
// 	  	  },
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
    // });
</script>

<style scoped>

.swiper-container{
	/* width:100% ; */
	height:1.41rem ;
}
.swiper-slide img{
	width: 100%;
	width: 100%;
} 
.swiper-container >>>.swiper-pagination-bullet{
	background:  white;
}

.swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
    bottom: -10px;
}	

</style>


