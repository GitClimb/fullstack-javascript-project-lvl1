import readlineSync from 'readline-sync';

const grettingUser = () => {
  const getUserName = readlineSync.question('May I have your name? ');
  return `Hello, ${getUserName}!`;
};

export default grettingUser;
