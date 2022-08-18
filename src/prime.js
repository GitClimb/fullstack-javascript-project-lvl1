import _ from 'lodash';
import readlineSync from 'readline-sync';

const question = (text) => readlineSync.question(text);

const brainPrime = (userName) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = _.random(1, 100);
    console.log(`Question: ${number}`);
    question('Your answer: ');
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default brainPrime;
