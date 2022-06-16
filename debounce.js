module.exports = function (fn, delay) {
  let timeoutID = null

  return function () {
    clearTimeout(timeoutID)
    const args = arguments
    const self = this
    timeoutID = setTimeout(function () {
      fn.apply(self, args)
    }, delay)
  }
}
