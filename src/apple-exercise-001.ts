export enum Fruit {
  Apple,
  Pear,
}

export function sortFruitsWithForEach(basket1: Fruit[], basket2: Fruit[]): Array<Fruit[]> {
  const apples = [];
  const pears = [];
  basket1.forEach((fruit) => {
    if (fruit === Fruit.Apple) {
      apples.push(fruit);
    } else pears.push(fruit);
  });

  basket2.forEach((fruit) => {
    if (fruit === Fruit.Apple) {
      apples.push(fruit);
    } else pears.push(fruit);
  });
  const result = [apples, pears];
  return result;
}

export function sortFruits(basket1: Fruit[], basket2: Fruit[]): Fruit[][] {
  const fruits: Fruit[][] = [basket1, basket2];

  const allfruits: Fruit[] = fruits.flat();

  const apples = allfruits.filter((fruit) => fruit === Fruit.Apple);
  const pears = allfruits.filter((fruit) => fruit === Fruit.Pear);

  const result = [apples, pears];
  return result;
}
