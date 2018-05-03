<template>
  <div class="thank">
    <h2>Спасибо что <span :class="color">выбрали нас!</span></h2>
    <p>Ваша заявка будет скоро рассмотрена и мы вам перезвоним</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    color: {
      type: String,
      default: () => 'blue',
    },
  },
});
</script>


<style scoped lang="stylus">
.thank
  height 150px
  display flex
  justify-content center
  align-items flex-start
  flex-flow column wrap
  font-family MullerBold
  padding 0 2rem
  h2
    margin 0
    font-size responsive 1.2rem 2.1rem
  p
    font-family Muller
    font-size responsive 1rem 1.3rem
</style>
