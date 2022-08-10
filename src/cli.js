import readlineSunc from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSunc.question('May I have your name? ');
console.log('Hello,' + userName + '!');

