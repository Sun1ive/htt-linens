<template>
  <section class="reviews">
    <wrapper>
      <h1 class="main__title">Отзывы наших клиентов</h1>
      <div class="reviews__wrapper">
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
    </wrapper>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Review from './Review.vue';

export default Vue.extend({
  components: { Review },
});
</script>


<style lang="stylus" scoped>
.reviews
  height 775px
  background url('/category.png') no-repeat #fff
  background-size cover
  .main__title
    text-align center
    padding-top 4rem
    margin-bottom 4rem
    font-size 3.42rem
  &__wrapper
    display flex
    flex-wrap wrap
    justify-content space-around

</style>
