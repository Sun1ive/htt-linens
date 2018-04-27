<template>
  <div class="Adv__block">
    <img :src="icon" alt="icon">
    <h2 class="Adv__block__header">{{ title }}</h2>
    <p>{{ text }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
});
</script>


<style scoped lang="stylus">
.Adv__block__header
  position relative
  &:before
    content ""
</style>
