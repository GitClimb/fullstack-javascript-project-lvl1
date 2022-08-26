import _ from 'lodash';
import runGameEngine from '../index.js';

const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getAnswer = (number) => {
  if (number === 1) {
    return 'no';
  }
  let count = 2;

  while (count < number) {
    if (number % count === 0 && count !== number) {
      return 'no';
    }
    count += 1;
  }
  return 'yes';
};

const generateRound = () => {
  const question = _.random(1, 100);
  const answer = getAnswer(question);
  return [question, answer];
};

export default () => runGameEngine(descriptionGame, generateRound);
