/**
 * 防抖函数
 * @param {*} fun 函数,传入方法
 * @param {*} t 数字,单位毫秒,间隔多久调用一次函数
 */
const debounce = function (fun, t) {
  let timeout = null
  // 返回真正的scroll事件的事件处理程序
  return function () {
    var context = this
    var args = arguments
    clearTimeout(timeout)
    timeout = setTimeout(function () {
      fun.apply(context, args)
    }, t)
  }
}

export default {
  debounce
}
