<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  functional: true,
  render(h, context) {
    return h('button', context.data, context.children);
  },
});
</script>
