import readlineSync from 'readline-sync';
import { greeting } from './helper.js';

const baseOfGames = (gameQuestion, task) => {
  const userName = greeting();

  console.log(gameQuestion);

  for (let i = 0; i < 3; i += 1) {
    const rightAnswer = task();

    const answer = readlineSync.question('Your answer: ');

    if (answer === rightAnswer) {
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

export default baseOfGames;
