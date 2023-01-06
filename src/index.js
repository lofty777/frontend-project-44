import readlineSync from 'readline-sync';
import { greeting } from './helper.js';

const baseOfGames = (task) => {
  const userName = greeting();

  const GAME_ROUNDS = 3;
  for (let i = 0; i < GAME_ROUNDS; i += 1) {
    const rightAnswer = task();

    let answer = readlineSync.question('Your answer: ');

    if (typeof rightAnswer === 'number') {
      answer = Number(answer);
    }

    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default baseOfGames;
