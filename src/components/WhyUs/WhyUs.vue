<template>
  <div class="about">
    <h1 class="main__title">Почему мы лучшие</h1>
    <Block
      v-for="item in items"
      :key="item.id"
      :title="item.title"
      :text="item.text"
      :icon="item.icon"
      :id="item.id"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Block from './Block.vue';

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
    items: [
      {
        icon: './medal.png',
        title: 'Качество',
        text:
          'Равным образом новая модель организационной деятельности способствует подготовки и реализации систем массового участия. ',
        id: 1,
      },
      {
        icon: './diamond.png',
        title: 'Качество',
        text:
          'Равным образом новая модель организационной деятельности способствует подготовки и реализации систем массового участия. ',
        id: 2,
      },
      {
        icon: './shield.png',
        title: 'Качество',
        text:
          'Равным образом новая модель организационной деятельности способствует подготовки и реализации систем массового участия. ',
        id: 3,
      },
      {
        icon: './care.png',
        title: 'Качество',
        text:
          'Равным образом новая модель организационной деятельности способствует подготовки и реализации систем массового участия. ',
        id: 4,
      },
    ] as Block[],
  }),
});
</script>

<style scoped>
</style>
