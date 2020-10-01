export enum Fruit {
  Apple = 'Apple',
  Pear = 'Pear',
}
/**
 * sorts two array of Fruit based on theire type
 * with Array.forEach
 * creates a closure
 *
 * @param basket1
 * @param basket2
 */
export function sortFruitsWithForEach(basket1: Fruit[], basket2: Fruit[]): Array<Fruit[]> {
  // create two arrays to seperate the fruits
  const apples = [];
  const pears = [];

  // check first basked and push the fruits in there coresbonding array
  basket1.forEach((fruit) => {
    if (fruit === Fruit.Apple) {
      apples.push(fruit);
    } else pears.push(fruit);
  });

  // check second basked and push the fruits in there coresbonding array
  basket2.forEach((fruit) => {
    if (fruit === Fruit.Apple) {
      apples.push(fruit);
    } else pears.push(fruit);
  });

  // combine the two fruit arrays into an result and return it
  const result = [apples, pears];
  return result;
}
/**
 * sorts two array of Fruit based on theire type
 * with the Array.flat and .filter methods
 *
 * @param basket1
 * @param basket2
 */
export function sortFruits(basket1: Fruit[], basket2: Fruit[]): Fruit[][] {
  // combine the two arrays
  const fruits: Fruit[][] = [basket1, basket2];

  // flatten the array into one dimension
  const allfruits: Fruit[] = fruits.flat();

  // filter apples and pears into seperate arrays
  const apples = allfruits.filter((fruit) => fruit === Fruit.Apple);
  const pears = allfruits.filter((fruit) => fruit === Fruit.Pear);

  // combine the two fruit arrays into an result and return it
  const result = [apples, pears];
  return result;
}
