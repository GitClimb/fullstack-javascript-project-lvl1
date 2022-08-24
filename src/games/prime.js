import _ from 'lodash';

export const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const answer = (number) => {
  let result = 0;
  let count = 2;

  while (count <= number) {
    if (number % count === 0) {
      result += count;
    }
    count += 1;
  }
  const isPrime = result === number ? 'yes' : 'no';
  return isPrime;
};

export const generateRound = () => {
  const randomNumb = _.random(1, 100);
  return [randomNumb, answer(randomNumb)];
};
