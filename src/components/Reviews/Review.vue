<template>
  <div class="review">
    <div class="review__info">
      <h2>Альбина</h2>
      <span>12.06.2016</span>
    </div>
    <div class="review__text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt debitis maxime, voluptas minus voluptatum excepturi repellat, quis, laborum itaque ducimus architecto nesciunt? Reiciendis similique quos laboriosam voluptas cumque repellendus ipsa, amet enim labore libero delectus, officiis debitis. Cum id doloremque, inventore alias deleniti commodi optio. Numquam nulla dolorum ut ratione!
    </div>
    <div class="review__img">
      <img src="/albina.png" alt="photo">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style lang="stylus" scoped>
.review
  border-radius 10px
  background-color #fff
  box-shadow 0 1px 10px 1px rgba(#000, 0.1)
  padding 2rem 2rem 2rem 5rem
  display flex
  flex-flow column wrap
  position relative
  max-width 40%
  margin 1rem 0
  &__text
    width 80%
    margin auto
    font-size 1rem
    line-height 20px
  &__info
    display flex
    align-items center
    width 80%
    margin auto
    h2
      margin 1rem 1rem 1rem 0
  &__img
    position absolute
    left 25px
    top 40px
</style>
