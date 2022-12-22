import readlineSync from 'readline-sync';

import greeting from '../src/cli.js';

const generateRandomNumber = () => {
  return Math.round(Math.random() * 100);
};

const even = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello ' + userName + '!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    let randomNumber = generateRandomNumber();
    console.log(`Question: ${randomNumber}`);
    let rightAnswer;
    if (randomNumber % 2 === 0) {
      rightAnswer = 'yes';
    } else {
      rightAnswer = 'no';
    }
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      if (i < 2) {
        console.log('Correct!');
      }
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default even;
