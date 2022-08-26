import _ from 'lodash';
import runGameEngine from '../index.js';

const descriptionGame = 'Find the greatest common divisor of given numbers.';

const getAnswer = (coll) => {
  coll.sort(((a, b) => a - b));
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

const generateRound = () => {
  const number1 = _.random(1, 100);
  const number2 = _.random(1, 100);
  const question = `${number1} ${number2}`;
  const answer = getAnswer([number1, number2]);
  return [question, answer];
};

export default () => runGameEngine(descriptionGame, generateRound);
