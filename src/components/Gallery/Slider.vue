<template>
  <carousel
    :autoplay="true"
    :perPage="1"
    :navigationClickTargetSize="20"
    :paginationEnabled="false"
    :speed="2000"
    navigationEnabled
  >
    <slide>
      <img src="/bed.png" alt="bed example">
    </slide>
    <slide>
      <img src="/bed.png" alt="bed example">
    </slide>
  </carousel>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {},
  data: () => ({
    items: ['/bed.png', '/bed.png'],
  }),
});
</script>


<style scoped lang="stylus">
img
  width 100%
  height 100%
</style>
