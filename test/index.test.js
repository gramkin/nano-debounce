const debounce = require('../index');

jest.setTimeout(30000);

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  });
}

const TT = 100, TI = 1000;

it('debounce default', async done => {
  let t = new Date().getTime();

  let lastArg, calls = 0;

  const func = function (i) {
    calls++;
    lastArg = i;
  };

  const debounced = debounce(func, TT);

  let i = 0;

  let interval = setInterval(function () {
    debounced(++i);
  }, 5);

  await delay(TI);

  clearInterval(interval);

  await delay(TT + 100);

  interval = setInterval(function () {
    debounced(++i);
  }, 5);

  await delay(TI);

  clearInterval(interval);

  await delay(TT + 100);

  try {
    console.log('calls', calls);
    console.log('lastArg', lastArg);
    expect(calls).toBe(2);
    expect(i).toBe(lastArg);
    done();
  } catch (error) {
    done(error);
  }
});

it('debounce with immediate', async done => {
  let lastArg, calls = 0;

  const func = function (i) {
    calls++;
    lastArg = i;
  };

  const debounced = debounce(func, TT, true);

  let i = 0;

  let interval = setInterval(function () {
    debounced(++i);
  }, 5);

  await delay(TI);

  clearInterval(interval);

  await delay(TT + 100);

  interval = setInterval(function () {
    debounced(++i);
  }, 5);

  await delay(TI);

  clearInterval(interval);

  await delay(TT + 100);

  try {
    expect(calls).toBe(4);
    expect(i).toBe(lastArg);
    done();
  } catch (error) {
    done(error);
  }
});


