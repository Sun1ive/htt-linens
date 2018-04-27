<template>
  <div class="gallery">
    <wrapper>
      <h1 class="main__title">Галерея</h1>
      <Slider />
    </wrapper>
  </div>
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
</style>
