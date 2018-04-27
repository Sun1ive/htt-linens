<template>
  <div
    :style="{ backgroundImage: 'url(' + src + ')'}"
    class="card"
  >
    <slot class="slot"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    src: {
      type: String,
      required: true,
    },
  },
});
</script>


<style lang="stylus" scoped>
.card
  box-shadow 0px 1px 10px 0 rgba(0,0,0,0.1)
  min-width 360px
  min-height 124px
  border-radius 10px
  background-color #ffffff
  background-repeat no-repeat
  display flex
  align-items center
  justify-content flex-end
  font-size 1.1rem
  font-family MullerBold

</style>
