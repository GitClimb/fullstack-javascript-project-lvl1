import _ from 'lodash';
import { game } from './index.js';

const answer = (number) => {
  let result = 0;
  let count = 2;

  while (count <= number) {
    if (number % count === 0) {
      result += count;
    }
    count += 1;
  }
  const isPrime = result === number ? 'yes' : 'no';
  return isPrime;
};

const brainPrime = (userName) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = _.random(1, 100);

    if (game(userName, number, answer(number)) === false) {
      break;
    } else if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default brainPrime;
