import request from '@/utils/request'
import PostError from '@/errors'

export const fetchPosts = async () => {
  try {
    return Promise.resolve(
      await request({
        url: '/posts',
        method: 'get',
      })
    )
  } catch (error) {
    return Promise.reject(new PostError('Posts not found'))
  }
}

export const fetchPost = async (postId) => {
  try {
    return Promise.resolve(
      await request({
        url: `/posts/${postId}`,
        method: 'get',
      })
    )
  } catch (error) {
    return Promise.reject(new PostError('Post not found'))
  }
}

export const deletePost = async (postId) => {
  try {
    return Promise.resolve(
      await request({
        url: `/posts/${postId}`,
        method: 'delete',
      })
    )
  } catch (error) {
    return Promise.reject(new PostError("Can't delete post"))
  }
}
