import _ from 'lodash';
import runGameEngine from '../index.js';

const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }
  let count = 2;

  while (count < number) {
    if (number % count === 0 && count !== number) {
      return false;
    }
    count += 1;
  }
  return true;
};

const generateRound = () => {
  const randomNumber = _.random(1, 100);
  const answer = isPrime(randomNumber) ? 'yes' : 'no';
  const question = String(randomNumber);
  return [question, answer];
};

export default () => runGameEngine(descriptionGame, generateRound);
