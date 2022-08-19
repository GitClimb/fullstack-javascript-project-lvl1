import _ from 'lodash';
import { game } from './index.js';

const mathSymb = ['+', '-', '*'];

const answer = (num1, num2, symbol) => {
  let result = 0;

  if (symbol === '+') {
    result = num1 + num2;
  } else if (symbol === '-') {
    result = num1 - num2;
  } else {
    result = num1 * num2;
  }
  return result;
};

const brainCalc = (userName) => {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const number1 = _.random(1, 100);
    const number2 = _.random(1, 100);
    const symbol = mathSymb.at(_.random(0, 2));

    const expression = `${number1} ${symbol} ${number2}`;
    if (game(userName, expression, String(answer(number1, number2, symbol))) === false) {
      break;
    } else if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default brainCalc;
