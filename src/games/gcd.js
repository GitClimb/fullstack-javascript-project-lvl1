import _ from 'lodash';
import runGameEngine from '../index.js';

const descriptionGame = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  return String(getGcd(num2 % num1, num1));
};

const generateRound = () => {
  const number1 = _.random(1, 100);
  const number2 = _.random(1, 100);
  const question = `${number1} ${number2}`;
  const answer = getGcd(number1, number2);
  return [question, answer];
};

export default () => runGameEngine(descriptionGame, generateRound);
