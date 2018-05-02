<template>
  <section class="gallery">
    <wrapper>
      <h1 class="main__title">Галерея</h1>
      <Slider />
      <div class="gallery__text">
        <h2>Постельный набор „Лиловый“</h2>
        <p>Краткое описание товара или не очень краткое описание</p>
      </div>
    </wrapper>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Slider from './Slider.vue';

export default Vue.extend({
  components: { Slider },
});
</script>


<style scoped lang="stylus">
.gallery
  min-height 500px
  display flex
  justify-content center
  align-items center
  &__text
    text-align center
    margin-top 2.5rem
    h2
      font-size 1.2rem
      font-family MullerBold
    p
      opacity .75
  .main__title
    text-align center
    margin 3rem 0 5rem
</style>
