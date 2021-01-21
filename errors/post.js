export default class PostError extends Error {
  name = 'PostError'

  constructor(message) {
    this.message = message
  }
}
