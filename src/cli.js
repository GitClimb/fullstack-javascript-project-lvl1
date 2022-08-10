import readlineSunc from 'readline-sync';

const acquaintance = () => {
  const userName = readlineSunc.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default acquaintance;
