<template>
  <div id="app">
    <Header />
    <main>
      <Kits />
      <WhyUs />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header/Header.vue';
import Kits from './components/Kits/Kits.vue';
import WhyUs from './components/WhyUs/WhyUs.vue';

export default Vue.extend({
  components: {
    Header,
    Kits,
    WhyUs,
  },
});
</script>

<style lang="stylus" scoped>

</style>
