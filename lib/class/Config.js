module.exports = class Config {
  constructor (options = {}) {
    this.port = options.port || 8080
    this.errors = options.errors || {}
  }
}
