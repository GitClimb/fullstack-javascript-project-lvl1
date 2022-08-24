import _ from 'lodash';

export const descriptionGame = 'Find the greatest common divisor of given numbers.';

const answer = (coll) => {
  const sorted = coll;
  const compareNumbers = (a, b) => {
    const compare = a - b;
    return compare;
  };
  sorted.sort(compareNumbers);
  let result = 0;
  let count = 1;

  while (count < coll.at(1)) {
    if (coll.at(0) % count === 0 && coll.at(1) % count === 0) {
      result = count;
    }
    count += 1;
  }
  return String(result);
};

export const generateRound = () => {
  const number1 = _.random(1, 100);
  const number2 = _.random(1, 100);
  const expression = `${number1} ${number2}`;
  return [expression, answer([number1, number2])];
};
