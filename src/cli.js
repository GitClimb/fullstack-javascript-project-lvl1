import readlineSync from 'readline-sync';

const grettingUser = () => {
  console.log('Welcome to the Brain Games!');
  const getUserName = readlineSync.question('May I have your name? ');
  return `Hello, ${getUserName}!`;
};

export default grettingUser;
