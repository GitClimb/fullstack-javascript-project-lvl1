import _ from 'lodash';
import runGameEngine from '../index.js';

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const getAnswer = (number) => {
  const isEven = (numb) => numb % 2 === 0;
  const numberIsEven = isEven(number) ? 'yes' : 'no';
  return numberIsEven;
};

const generateRound = () => {
  const question = _.random(1, 100);
  const answer = getAnswer(question);
  return [question, answer];
};

export default () => runGameEngine(descriptionGame, generateRound);
