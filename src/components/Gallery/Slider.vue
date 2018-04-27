<template>
  <Slider :loop="true" :items="1" :mouse-drag="true">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </Slider>
</template>

<script lang="ts">
import Vue from 'vue';
import VueTinySlider from 'vue-tiny-slider';

export default Vue.extend({
  components: {
    Slider: VueTinySlider,
  },
  data: () => ({
    items: ['/bed.png', '/bed.png'],
  }),
});
</script>


<style scoped lang="stylus">

</style>
