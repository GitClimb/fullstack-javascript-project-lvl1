import _ from 'lodash';

export const descriptionGame = 'What is the result of the expression?';

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
  return String(result);
};

export const generateRound = () => {
  const number1 = _.random(1, 100);
  const number2 = _.random(1, 100);
  const symbol = mathSymb.at(_.random(0, 2));
  const expression = `${number1} ${symbol} ${number2}`;
  return [expression, answer(number1, number2, symbol)];
};
