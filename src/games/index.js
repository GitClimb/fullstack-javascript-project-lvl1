import readlineSync from 'readline-sync';

const rounds = 3;

const runGameEngine = (descriptString, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const getUserName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getUserName}!`);

  for (let i = 0; i < rounds; i += 1) {
    generateRound();
    const [question, answer] = generateRound();
    if (question === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${question}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${getUserName}!`);
      break;
    }
    console.log(`Congratulations, ${getUserName}!`);
  }
};

export default runGameEngine;
