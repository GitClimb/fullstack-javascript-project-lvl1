import _ from 'lodash';
import runGameEngine from '../index.js';

const descriptionGame = 'What is the result of the expression?';

const operators = ['/'];

const getAnswer = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return String(num1 + num2);
    case '-':
      return String(num1 - num2);
    case '*':
      return String(num1 * num2);
    default:
      throw new Error(`Operator ${operator} - doesn't supported`);
  }
};

const generateRound = () => {
  const number1 = _.random(1, 100);
  const number2 = _.random(1, 100);
  const randomOperator = operators.at(_.random(0, 2));
  const question = `${number1} ${randomOperator} ${number2}`;
  const answer = getAnswer(number1, number2, randomOperator);
  return [question, answer];
};

export default () => runGameEngine(descriptionGame, generateRound);
