<template>
  <header class="header">
    <wrapper>
      <Toolbar />
    </wrapper>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import Toolbar from './Toolbar.vue';

export default Vue.extend({
  components: { Toolbar },
});
</script>


<style scoped lang="stylus">
.header
  background-image url('/header.png')
  background-position center
  background-size cover
  min-height 700px
</style>
