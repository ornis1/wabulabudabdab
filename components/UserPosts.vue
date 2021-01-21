<template>
  <ul>
    <post
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @delete="$emit('delete', $event)"
    ></post>
  </ul>
</template>

<script>
import Post from './Post.vue'
export default {
  components: { Post },
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
