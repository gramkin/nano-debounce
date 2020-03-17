module.exports = function (callback, ms, immediate) {
  var timeout;
  return function () {
    var args = arguments, self = this;
    immediate && !timeout && callback.apply(self, args);
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      timeout = null;
      !immediate && callback.apply(self, args);
    }, ms);
  }
};
