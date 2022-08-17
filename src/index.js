import readlineSync from 'readline-sync';

const question = (text) => readlineSync.question(text);

export const gretting = () => {
  console.log('Welcome to the Brain Games!');

  const getUserName = question('May I have your name? ');
  const userGreting = (text) => `Hello, ${text}!`;
  console.log(userGreting(getUserName));
  return getUserName;
};

export const game = (userName, questionToUser, answer) => {
  console.log(`Question: ${questionToUser}`);
  const userAnswer = question('Your answer: ');
  const correctAnswer = answer;
  let result = '';
  if (correctAnswer === userAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    result = false;
  }
  return result;
};
