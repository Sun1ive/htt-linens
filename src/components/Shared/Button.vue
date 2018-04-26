<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  functional: true,
  props: {
    button: {
      type: Boolean,
      default: () => true,
    },
  },
  render(h, context) {
    return h('button', context.data, context.children);
  },
});
</script>
