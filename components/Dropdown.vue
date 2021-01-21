<template>
  <div>
    <p class="flex flex-1">
      <slot v-bind="{ toggle, active }" name="activator"></slot>
    </p>
    <div
      v-show="active"
      class="border px-4 py-3 my-2 text-gray-700 max-h-44 overflow-auto"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { active: false }
  },
  methods: {
    toggle() {
      this.active = !this.active
    },
  },
}
</script>
