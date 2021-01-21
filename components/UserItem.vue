<template>
  <dropdown>
    <template #activator="{ toggle, active }">
      <list-item :class="active ? ['bg-red-100'] : []">
        <list-item-avatar>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlHN69X-Ruynh1pUkcjNWN3vPrSycdMWhUv7sWjsr5WzYh_T4PvZPU6kM&s=10"
            alt=""
          />
        </list-item-avatar>
        <list-item-content>
          <list-item-title> {{ user.name }} </list-item-title>
          <list-item-subtitle> {{ postsLength }} </list-item-subtitle>
        </list-item-content>
        <div class="flex items-center mx-2">
          <base-button @click.native="toggle"> Show posts </base-button>
        </div>
      </list-item>
    </template>
    <user-posts
      :posts="user.posts"
      @delete="$emit('delete', { userId: user.id, postId: $event })"
    />
  </dropdown>
</template>

<script>
import BaseButton from './BaseButton.vue'
import Dropdown from './Dropdown.vue'
import ListItem from './ListItem.vue'
import ListItemAvatar from './ListItemAvatar.vue'
import ListItemContent from './ListItemContent.vue'
import ListItemSubtitle from './ListItemSubtitle.vue'
import ListItemTitle from './ListItemTitle.vue'
import UserPosts from './UserPosts.vue'

export default {
  components: {
    ListItem,
    ListItemContent,
    ListItemTitle,
    ListItemSubtitle,
    ListItemAvatar,
    BaseButton,
    Dropdown,
    UserPosts,
  },
  props: {
    user: {
      type: Object,
      default: () => ({
        id: '',
        name: '',
        username: '',
        email: '',
      }),
    },
  },
  computed: {
    postsLength() {
      const len = this.user?.posts?.length || 0
      return `${len} posts`
    },
  },
}
</script>
