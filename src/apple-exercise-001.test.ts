import { Fruit, sortFruits } from './apple-exercise-001';

describe('test sortFruits()', () => {
  it('sort two arrays of Fruit types', () => {
    // test data
    const basket1 = [Fruit.Pear, Fruit.Apple, Fruit.Pear, Fruit.Apple];
    const basket2 = [Fruit.Pear, Fruit.Apple, Fruit.Pear, Fruit.Apple];

    // expected output
    const result = [
      [Fruit.Apple, Fruit.Apple, Fruit.Apple, Fruit.Apple],
      [Fruit.Pear, Fruit.Pear, Fruit.Pear, Fruit.Pear],
    ];

    expect(sortFruits(basket1, basket2)).toEqual(result);
  });
});
