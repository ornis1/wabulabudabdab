<template>
  <button
    class="relative bg-gray-800 text-gray-200 px-2 py-1 rounded-md text-sm hover:bg-gray-900 focus:bg-gray-900 transform transition-all inline-flex gap-2"
  >
    <slot></slot>
    <loader v-if="loading" />
  </button>
</template>

<script>
import Loader from './Loader.vue'

export default {
  components: { Loader },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
