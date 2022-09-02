import _ from 'lodash';
import runGameEngine from '../index.js';

export const descriptionGame = 'What number is missing in the progression?';

const generateProgression = (lengthProgression, start, steps) => {
  const coll = [start];

  for (let i = 0; i < lengthProgression - 1; i += 1) {
    coll.push(coll.at(-1) + steps);
  }
  return coll;
};

export const generateRound = () => {
  const length = _.random(5, 10);
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
