<template>
  <div class="kits">
    <wrapper>
      <h1 class="main__title">Комплекты</h1>
      <div class="items">
        <LinenCard
          v-for="(item, i) in Linens"
          :key="i"
          :title="item.title"
          :price="item.price"
          :desc="item.desc"
          class="linenCard"
        />
      </div>
    </wrapper>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LinenCard from './LinenCard.vue';
import Linens from './Linens';

interface Linen {
  src: string;
  title: string;
  desc: string;
  price: string;
}

export default Vue.extend({
  components: {
    LinenCard,
  },
  data: () => ({
    Linens: Linens as Linen[],
  }),
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

.items
  display flex
  flex-wrap wrap
  justify-content space-between
  .linenCard
    margin 1rem 0
</style>
