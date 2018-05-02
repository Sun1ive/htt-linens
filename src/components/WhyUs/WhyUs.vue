<template>
  <section class="about">
    <wrapper>
      <h1 class="main__title">Почему мы лучшие</h1>
      <div class="block__row">
        <Block
          v-for="item in items"
          :key="item.id"
          :title="item.title"
          :text="item.text"
          :icon="item.icon"
          :id="item.id"
        />
      </div>
    </wrapper>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Block from './Block.vue';
import Items from './Items';

interface Block {
  icon: string;
  title: string;
  text: string;
  id: number;
}

export default Vue.extend({
  components: {
    Block,
  },
  data: () => ({
    items: Items as Block[],
  }),
});
</script>

<style scoped lang="stylus">
.about
  padding 5rem 0
  border-bottom 1px solid #ccc + 70%
  .main__title
    text-align center
    padding-bottom 2rem

.block__row
  display flex
  justify-content space-around
</style>
