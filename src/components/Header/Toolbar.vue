<template>
  <nav>
    <ul class="menu">
      <li
        v-for="item in toolbarList"
        :key="item.title"
      >
        <a href="#" class="menu__item">{{ item.title }}</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';

interface ToolbarItem {
  title: string;
  anchor: string;
}

export default Vue.extend({
  data: () => ({
    toolbarList: [
      { title: 'Комплекты', anchor: '#aa' },
      { title: 'Отзывы', anchor: '#aa' },
      { title: 'О компании', anchor: '#aa' },
      { title: 'Контакты', anchor: '#aa' },
    ] as ToolbarItem[],
  }),
});
</script>


<style scoped lang="stylus">
ul li
  list-style none

.menu
  font-family MullerBold
  display flex

.menu__item
  font-size 1.1rem
  color $blue
  transition .2s linear
  will-change border-radius, background-color, color
  padding 1rem 2rem
  &:hover
    background-color $blue
    border-radius 30px
    color #fff
</style>
