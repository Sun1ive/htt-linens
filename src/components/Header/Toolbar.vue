<template>
  <nav class="toolbar">
    <img src="/logo.png" alt="logo">
    <ul class="menu">
      <li
        v-for="item in toolbarList"
        :key="item.title"
      >
        <a href="#" class="menu__item">{{ item.title }}</a>
      </li>
    </ul>
    <div class="phone__wrapper">
      <img src="/phone.png" alt="phone">
      <div class="phone__number">
        <strong>+7 (989) 757-82-67</strong>
        <div class="phone__request" @click="showModal">Заказать обратный звонок</div>
      </div>
    </div>
    <Modal
      v-if="isActive"
      @close="isActive = !isActive"
    >
      <Recall />
    </Modal>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import { hidden } from '@/utils/body';
import Recall from '../Shared/Recall.vue';

interface ToolbarItem {
  title: string;
  anchor: string;
}

export default Vue.extend({
  components: { Recall },
  data: () => ({
    toolbarList: [
      { title: 'Комплекты', anchor: '#aa' },
      { title: 'Отзывы', anchor: '#aa' },
      { title: 'О компании', anchor: '#aa' },
      { title: 'Контакты', anchor: '#aa' },
    ] as ToolbarItem[],
    isActive: false as boolean,
  }),
  methods: {
    showModal() {
      hidden();
      this.isActive = true;
    },
  },
});
</script>


<style scoped lang="stylus">
ul li
  list-style none

.toolbar
  padding-top 1%
  display flex
  align-items center
  justify-content space-around

.menu
  font-family MullerBold
  display flex

.menu__item
  font-size 1.1rem
  color $blue
  transition .2s linear
  will-change border-radius, background-color, color
  padding 1rem 2rem
  border-radius 30px
  margin 0 1rem
  &:hover
    background-color $blue
    color #fff

.phone__wrapper
  display flex
  align-items center
  justify-content space-around
  font-family MullerBold
  width 175px
  .phone__number
    position relative
    margin-left 0.75rem
    .phone__request
      position absolute
      width 200px
      margin-top 0.2rem
      font-family Muller
      color $blue
      cursor pointer

</style>
