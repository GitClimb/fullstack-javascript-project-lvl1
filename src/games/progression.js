import _ from 'lodash';
import runGameEngine from '../index.js';

export const descriptionGame = 'What number is missing in the progression?';

const generateProgression = (length, start, steps) => {
  const lengthProgression = length;
  const coll = [start];

  for (let i = 0; i <= lengthProgression; i += 1) {
    coll.push(coll[coll.length - 1] + steps);
  }
  return coll;
};

export const generateRound = () => {
  const length = _.random(5, 9);
  const start = _.random(1, 100);
  const steps = _.random(1, 100);
  const progression = generateProgression(length, start, steps);
  const randomValue = progression[_.random(0, progression.length - 1)];
  progression[progression.indexOf(randomValue)] = '..';
  const answer = String(randomValue);
  const question = progression.join(' ');
  return [question, answer];
};

export default () => runGameEngine(descriptionGame, generateRound);
