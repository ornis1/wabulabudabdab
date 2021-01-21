<template>
  <div class="mx-auto flex items-center text-center justify-center container">
    <div class="md:w-6/12">
      <div class="px-8">
        <h1 class="mb-4 text-xl font-bold text-gray-300">Authors</h1>
        <div
          class="flex flex-col bg-white max-w-sm px-6 py-4 mx-auto rounded-lg shadow-md"
        >
          <text-field
            v-model="search"
            placeholder="Search by users"
            class="mb-2"
          />

          <ul v-show="filteredUsers.length" class="-mx-6">
            <user-item
              v-for="user in filteredUsers"
              :key="user.id"
              class="divide-x-1"
              :user="user"
              @delete="handleDelete"
            />
          </ul>
          <not-found v-show="!filteredUsers.length" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { deletePost } from '@/api/post'
import { fetchUsersWithPosts } from '@/api/user'
import UserItem from '../components/UserItem.vue'
import TextField from '../components/TextField.vue'
import NotFound from '../components/NotFound.vue'

export default {
  components: { UserItem, TextField, NotFound },
  async asyncData() {
    const { data: users } = await fetchUsersWithPosts()
    return { users }
  },
  data() {
    return {
      search: '',
    }
  },
  computed: {
    filteredUsers() {
      return this.users.filter((user) =>
        user.name.toLowerCase().includes(String(this.search).toLowerCase())
      )
    },
  },
  methods: {
    async handleDelete({ userId, postId }) {
      if (!userId && !postId) return

      /* Удаляем на сервере */
      await deletePost(postId)

      /* Удаляем локально */
      this.users = this.users.map((user) => {
        const record = +user.id === +userId

        // Если юзер есть
        if (record) {
          // Удаляем нужный пост
          const posts = user.posts.filter((post) => +post.id !== +postId)

          return {
            ...user,
            posts,
          }
        }

        return user
      })
    },
  },
}
</script>
