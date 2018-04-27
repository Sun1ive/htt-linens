<template>
  <div class="kits">
    <wrapper>
      <h1 class="main__title">Комплекты</h1>
      <LinenCard
        :title="'Hello therE!'"
        :price="'150 grn'"
        :desc="'hello world'"
      />
    </wrapper>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LinenCard from './LinenCard.vue';

export default Vue.extend({
  components: {
    LinenCard,
  },
});
</script>


<style scoped lang="stylus">
.kits
  background url('/category.png') no-repeat #fafafa
  background-size cover
  min-height 1300px
  .main__title
    padding-top 150px
    text-align center

</style>
