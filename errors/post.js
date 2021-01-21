export default class PostError extends Error {
  name = 'PostError'

  constructor(message) {
    super()
    this.message = message
  }
}
