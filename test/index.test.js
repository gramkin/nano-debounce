const debounce = require('../index');

jest.setTimeout(30000);

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  });
}

const TT = 1000, TI = 10000;

it('debounce immediate', async done => {
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
  }, 9);

  await delay(TI);

  clearInterval(interval);

  await delay(TT);

  try {
    expect(calls).toBe(1);
    expect(i).toBe(lastArg);
    done();
  } catch (error) {
    done(error);
  }
});

it('debounce without immediate call', async done => {
  let lastArg, calls = 0;

  const func = function (i) {
    calls++;
    lastArg = i;
  };

  const debounced = debounce(func, TT, false);

  let i = 0;

  let interval = setInterval(function () {
    debounced(++i);
  }, 10);

  await delay(TI);

  clearInterval(interval);

  await delay(TT);

  try {
    expect(calls).toBe(1);
    expect(i).toBe(lastArg);
    done();
  } catch (error) {
    done(error);
  }
});


