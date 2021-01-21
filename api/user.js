import request from '@/utils/request'
import UserError from '@/errors'

export const fetchUsers = async () => {
  try {
    return Promise.resolve(
      await request({
        url: '/users',
        method: 'get',
      })
    )
  } catch (error) {
    return Promise.reject(new UserError('Users not found'))
  }
}

export const fetchUser = async (id) => {
  try {
    return Promise.resolve(
      await request({
        url: `/users/${id}`,
      })
    )
  } catch (error) {
    return Promise.reject(new UserError('User not found'))
  }
}

export const fetchUserPosts = async (userId) => {
  try {
    return Promise.resolve(
      await request({
        url: '/posts',
        params: { userId },
      })
    )
  } catch (error) {
    return Promise.reject(new UserError('User posts not found'))
  }
}

export const fetchUsersWithPosts = async (userId) => {
  try {
    const { data: users } = await fetchUsers()
    const usersWithPosts = []

    for (const user of users) {
      const { data: userPosts } = await fetchUserPosts(user.id)
      usersWithPosts.push({
        ...user,
        posts: userPosts,
      })
    }
    return Promise.resolve({ data: usersWithPosts })
  } catch (error) {
    return Promise.reject(new UserError('Can`t fetchUsersWithPosts'))
  }
}
