<template>
  <list-item>
    <list-item-content>
      <list-item-title>Title: {{ post.title }} </list-item-title>
      <list-item-subtitle>{{ post.body }}</list-item-subtitle>
      <list-item-subtitle>
        <base-button
          class="mt-2 relative"
          :loading="loading"
          @click.native="
            $emit('delete', post.id)
            loading = true
          "
        >
          <span>Delete</span>
        </base-button>
      </list-item-subtitle>
    </list-item-content>
  </list-item>
</template>

<script>
import BaseButton from './BaseButton.vue'
export default {
  components: { BaseButton },
  props: {
    post: {
      type: Object,
      default: () => {
        return {
          id: '',
          body: '',
          title: '',
        }
      },
    },
  },
  data() {
    return {
      loading: false,
    }
  },
}
</script>
