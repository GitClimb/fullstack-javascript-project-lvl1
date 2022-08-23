import readlineSync from 'readline-sync';

const rounds = 3;

const runGameEngine = (descriptString, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const getUserName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getUserName}!`);
  console.log(descriptString);
  let count = 0;

  for (let i = 0; i < rounds; i += 1) {
    console.log(`Question: ${generateRound[0]}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === generateRound[1]) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${question}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${getUserName}!`);
      break;
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${getUserName}!`);
  }
};

export default runGameEngine;
