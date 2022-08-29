import _ from 'lodash';
import runGameEngine from '../index.js';

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const randomNumber = _.random(1, 100);
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  const question = String(randomNumber);
  return [question, answer];
};

export default () => runGameEngine(descriptionGame, generateRound);
