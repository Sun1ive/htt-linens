<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, i) in slides" :key="i">
      <img :src="slide" class="slider__image" alt="bed image">
    </swiper-slide>
    <div slot="button-prev" class="swiper-button-prev" />
    <div slot="button-next" class="swiper-button-next" />
  </swiper>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    slides: ['/bed.png', '/bed.png', '/bed.png', '/bed.png'],
    swiperOption: {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
  }),
});
</script>

<style scoped lang="stylus">
.slider__image
  width 100%
</style>
