import _ from 'lodash';
import question from './cli.js';

const checkEven = (number) => {
  const isEven = (numb) => numb % 2 === 0;
  const expectedAnswer = isEven(number) ? 'yes' : 'no';
  return expectedAnswer;
};

const game = (Name) => {
  let result = '';
  let i = 0;

  while (i < 3) {
    const randomNumb = _.random(1, 100);
    console.log(`Question: ${randomNumb}`);
    const userAnswer = question('Your answer: ');
    const correctAnswer = checkEven(randomNumb);
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      const defeatMassage = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${Name}!`;
      return defeatMassage;
    }
    const victoryMassage = `Congratulations, ${Name}!`;
    result = victoryMassage;
  }
  return result;
};

export default game;
