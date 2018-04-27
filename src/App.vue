<template>
  <div id="app">
    <Header />
    <main>
      <Kits />
      <WhyUs />
      <Gallery />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header/Header.vue';
import Kits from './components/Kits/Kits.vue';
import WhyUs from './components/WhyUs/WhyUs.vue';
import Gallery from './components/Gallery/Gallery.vue';

export default Vue.extend({
  components: {
    Header,
    Kits,
    WhyUs,
    Gallery,
  },
});
</script>

<style lang="stylus" scoped>

</style>
