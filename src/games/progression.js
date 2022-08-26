import _ from 'lodash';
import runGameEngine from '../index.js';

export const descriptionGame = 'What number is missing in the progression?';

const getQuestion = (length, start, steps) => {
  const lengthProgression = length;
  const coll = [start];

  for (let i = 0; i <= lengthProgression; i += 1) {
    coll.push(coll[coll.length - 1] + steps);
  }
  const answer = coll[_.random(0, coll.length - 1)];
  coll[coll.indexOf(answer)] = '..';
  return [coll.join(' '), String(answer)];
};

export const generateRound = () => {
  const length = _.random(5, 9);
  const start = _.random(1, 100);
  const steps = _.random(1, 100);

  const [question, answer] = getQuestion(length, start, steps);
  return [question, answer];
};

export default () => runGameEngine(descriptionGame, generateRound);
