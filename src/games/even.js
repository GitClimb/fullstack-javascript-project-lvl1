import _ from 'lodash';

export const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

export const answer = (number) => {
  const isEven = (numb) => numb % 2 === 0;
  const expectedAnswer = isEven(number) ? 'yes' : 'no';
  return expectedAnswer;
};

export const generateRound = () => {
  const randomNumb = _.random(1, 100);
  return [randomNumb, answer(randomNumb)];
};
