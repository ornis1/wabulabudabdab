<template>
  <div
    :class="[
      'rounded-full',
      'text-xs',
      'bg-gray-900',
      'opacity-70',
      'inline-flex',
      'px-2',
      'py-1',
      'hover:opacity-80',
      'cursor-pointer',
      'text-gray-200',
      { value: 'opacity-100' },
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean,
    default: () => false,
  },
}
</script>
