module.exports = function (callback, ms, immediate) {
  var timeout;
  return function () {
    var args = arguments;
    immediate && !timeout && callback.apply(null, args);
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      timeout = null;
      !immediate && callback.apply(null, args);
    }, ms);
  }
};
