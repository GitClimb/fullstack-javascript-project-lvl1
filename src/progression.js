import _ from 'lodash';
import { game } from './index.js';

const progressio = (length, start, steps) => {
  const result = [start];

  for (let i = 0; i < length; i += 1) {
    result.push(result[result.length - 1] + steps);
    i += 1;
  }

  return result;
};

const answer = (coll, value) => {
  const result = [];
  for (let i = 0; i < coll.length; i += 1) {
    if (i === value) {
      result.push(coll[i]);
    } 
  }
  return String(result);
};

const replValue  = (coll, value) => {
  const result = [];
  for (let i = 0; i < coll.length; i += 1) {
    if (coll[i] === Number(value)) {
      result.push('..');
    } else {
      result.push(coll[i]);
    }
  }
  return result.join(' ');
};

const brainProgression = (userName) => {
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    const length = _.random(5, 10);
    const firstNum = _.random(1, 100);
    const steps = _.random(1, 100);
    const rightAnswer = answer(progressio(length, firstNum, steps), _.random(0, progressio.length - 1));
    const questi = replValue(progressio(length, firstNum, steps), rightAnswer );

    if (game(userName, questi, rightAnswer) === false) {
      break;
    } else if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default brainProgression;
