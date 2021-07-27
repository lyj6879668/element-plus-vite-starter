let vuePlugin = function (error,_Vue) {
  if(!_Vue || !_Vue.config) {
    return
  }
  let _oldError = _Vue.config.errorHandler
  _Vue.config.errorHandler = function (errMsg,vm,info) {
    error(errMsg)
    if(typeof console !== 'undefined' && typeof console.error === 'function') {
      console.error(errMsg)
    }
    if(typeof _oldError === 'function') {
      _oldError.call(this,errMsg,vm,info)
    }
  }
}

module.exports = vuePlugin