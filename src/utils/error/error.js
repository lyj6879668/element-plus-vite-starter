const originAddEventListener = EventTarget.prototype.addEventListener;
EventTarget.prototype.addEventListener = (type,listener,options) => {
  const wrappedListener = (...args) => {
    try {
      return listener.call(this,args)
    } catch (err) {
      throw err
    }
  }
  return originAddEventListener.call(this,type,wrappedListener,options)
}



// 无法捕获语法错误
window.onerror = function (message, source, lineno, colno, error) {
  console.log('错误：',{message, source, lineno, colno, error})
  return true;
}
//
window.addEventListener('error',(error) => {
  console.log('捕获到异常：',error)
},true)

//
window.addEventListener('unhandledrejection',(error) => {
  console.log('捕获到异常：',error)
  return true
})

