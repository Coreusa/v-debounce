const debounce = require('./debounce')

directive.debounce = debounce

/**
* Attach directive to element and wait for input to stop. Default timeout 800ms or 0.8s.
*/
function directive (el, bind) {
  if (bind.value !== bind.oldValue) { // change debounce only if interval has changed
    el.oninput = directive.debounce(function (e) {
      el.dispatchEvent(createNewEvent('change'))
    }, parseInt(bind.value) || 800)
  }
}

// IE Support
function createNewEvent (eventName) {
  let e
  if (typeof (Event) === 'function') {
    e = new Event(eventName)
  } else {
    e = document.createEvent('Event')
    e.initEvent(eventName, true, true)
  }
  return e
}

// For when installing application wide
module.exports = {
  install: (Vue) => {
    Vue.directive('debounce', directive)
  },
  directive
}
