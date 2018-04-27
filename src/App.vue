<template>
  <div id="app">
    <Header />
    <main>
      <Kits />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header/Header.vue';
import Kits from './components/Kits/Kits.vue';

export default Vue.extend({
  components: {
    Header,
    Kits,
  },
});
</script>

<style lang="stylus" scoped>

</style>
