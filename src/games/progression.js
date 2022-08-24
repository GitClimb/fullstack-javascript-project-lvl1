import _ from 'lodash';

export const descriptionGame = 'What number is missing in the progression?';

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

const replValue = (coll, value) => {
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

export const generateRound = () => {
  const length = _.random(6, 10);
  const firstNum = _.random(1, 100);
  const steps = _.random(1, 100);
  const lengthColl = (coll) => _.random(0, coll.length - 1);
  const rightAnswer = answer(progressio(length, firstNum, steps), lengthColl(progressio));
  const question = replValue(progressio(length, firstNum, steps), rightAnswer);
  return [question, rightAnswer];
};
