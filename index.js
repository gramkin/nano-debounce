module.exports = function (callback, ms, immediate) {
  var timeout;
  return function () {
    var args = arguments, self = this;
    var i = immediate && !timeout;
    i && callback.apply(self, args);
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      timeout = null;
      !i && callback.apply(self, args);
    }, ms);
  }
};
