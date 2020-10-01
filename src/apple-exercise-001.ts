export enum Fruit {
  Apple,
  Pear,
}

export function sortFruits(basket1: Fruit[], basket2: Fruit[]) {
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
