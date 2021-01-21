export default class UserError extends Error {
  name = 'UserError'

  constructor(message) {
    this.message = message
  }
}
