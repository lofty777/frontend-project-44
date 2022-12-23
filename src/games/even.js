import readlineSync from 'readline-sync';

import greeting from '../cli.js';

export const generateRandomNumber = () => {
  return Math.round(Math.random() * 100);
};

const even = () => {
  const userName = greeting();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = generateRandomNumber();
    console.log(`Question: ${randomNumber}`);

    const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    const answer = readlineSync.question('Your answer: ');

    if (answer === rightAnswer && i < 3) {
      console.log('Correct!');
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
