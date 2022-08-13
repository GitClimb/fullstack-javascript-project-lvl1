#!/usr/bin/env node
import question from '../src/cli.js';
import game from '../src/even.js';

console.log('Welcome to the Brain Games!');
const userName = question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

console.log(game(userName));
