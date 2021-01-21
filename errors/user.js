export default class UserError extends Error {
  name = 'UserError'

  constructor(message) {
    super()
    this.message = message
  }
}
