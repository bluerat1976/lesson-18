require('./index.js');

describe('summa',() => {

  test('adds 3 + 2 to equal 5', () => {
    expect(summa(3, 6)).toBe(9);
  });
})


describe ('reduce', () => {
  test('summa of a =1, b = 2, c = 3 and d = 4 equal result', () => {
    expect(reduce(1, 2, 3, 4)).toBe(10);
  });
})