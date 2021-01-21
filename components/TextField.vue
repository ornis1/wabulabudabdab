<template>
  <label class="block relative">
    <span v-if="label" class="text-gray-700">{{ label }}</span>
    <input
      v-model="model"
      class="form-input block w-full rounded border-2 border-gray-300 py-1 px-2 text-black hover:border-gray-800 transform transition-all focus:bg-border-800"
      v-bind="$attrs"
    />
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String || Number,
      default: '',
    },
    event: {
      type: String,
      default: 'input',
    },
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(v) {
        this.$emit(this.event, v)
      },
    },
  },
}
</script>
