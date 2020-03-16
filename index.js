module.exports = function (callback, ms, immediate) {
  var timeout;
  return function () {
    var args = arguments;
    var call = function () {
      callback.apply(null, args);
    };
    immediate && !timeout && call();
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      timeout = null;
      !immediate && call();
    }, ms);
  }
};
