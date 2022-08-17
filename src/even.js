import _ from 'lodash';
import { game } from './index.js';

export const answer = (number) => {
  const isEven = (numb) => numb % 2 === 0;
  const expectedAnswer = isEven(number) ? 'yes' : 'no';
  return expectedAnswer;
};

export const brainEven = (userName) => {
  for (let i = 0; i < 3; i += 1) {
    const numb = _.random(1, 100);
    if (game(userName, numb, answer(numb)) === false) {
      break;
    }
  }
};
