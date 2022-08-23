import readlineSync from 'readline-sync';

const rounds = 3;

const runGameEngine = (descriptString, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const getUserName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getUserName}!`);
  console.log(descriptString);
  let count = 0;

  for (let i = 0; i < rounds; i += 1) {
    const question = generateRound[0];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const answer = generateRound[1](generateRound[0]);

    if (userAnswer === answer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${getUserName}!`);
      break;
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${getUserName}!`);
  }
};

export default runGameEngine;
