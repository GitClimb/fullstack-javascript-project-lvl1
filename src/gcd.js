import _ from 'lodash';
import readlineSync from 'readline-sync';
import runGameEngine from './index.js';


const generateRound = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return [userAnswer, '1'];
  };

const brainGcd = () => {
  runGameEngine('sdjflskj', generateRound());
};

export default brainGcd;

