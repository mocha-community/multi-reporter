function after (n, func) {
  n = n || 0
  return function (...args) {
    if (--n < 1) {
      return func.apply(this, args)
    }
  }
}

module.exports = after
