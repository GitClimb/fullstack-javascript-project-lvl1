import _ from 'lodash';
import { game } from './index.js';

export const answer = (number) => {
  const isEven = (numb) => numb % 2 === 0;
  const expectedAnswer = isEven(number) ? 'yes' : 'no';
  return expectedAnswer;
};

export const brainEven = (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const numb = _.random(1, 100);
    if (game(userName, numb, answer(numb)) === false) {
      break;
    } else if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
