
describe('positiveNumbers', function () {
  it('filters an array of numbers to just the positives', function () {
    expect(positiveNumbers([-2, -1, 0, 1, 2, 3])).toEqual([0, 1, 2, 3]);
  });
});

xdescribe('evenNumbers', function () {
  it('filters an array of numbers to just the evens', function () {
    expect(positiveNumbers([1, 2, 3, 4, 5])).toEqual([2, 4]);
  });
});

xdescribe('oddNumbers', function () {
  it('filters an array of numbers to just the odds', function () {
    expect(oddNumbers([1, 2, 3, 4, 5])).toEqual([1, 3, 5]);
  });
});

/*
Take an opportunity to refactor the positiveNumbers and oddNumbers functions by using the filter function or the native array's filter method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
*/

xdescribe('tipCalculator', function () {
  it('gives 10% for bad service', function () {
    expect(tipCalculator(100, 'bad')).toEqual(110);
  });

  it('gives 15% for fair service', function () {
    expect(tipCalculator(100, 'fair')).toEqual(115);
  });

  it('gives 20% for good service', function () {
    expect(tipCalculator(100, 'good')).toEqual(120);
  });
});
