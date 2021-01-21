export default class NetworkError extends Error {
  name = 'NetworkError'

  constructor(message) {
    this.message = message
  }
}
