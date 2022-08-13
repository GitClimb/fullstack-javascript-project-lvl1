import readlineSync from 'readline-sync';

const question = (text) => readlineSync.question(text);

export default question;
