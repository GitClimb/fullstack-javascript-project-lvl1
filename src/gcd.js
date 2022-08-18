import _ from 'lodash';
import { game } from './index.js';

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

const brainGcd = (userName) => {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const number1 = _.random(1, 100);
    const number2 = _.random(1, 100);
    const expression = `${number1} ${number2}`;
    if (game(userName, expression, answer([number1, number2])) === false) {
      break;
    } else if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default brainGcd;
