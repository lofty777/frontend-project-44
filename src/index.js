import readlineSync from 'readline-sync';
// import { greeting } from './helper.js';

const baseOfGames = (gameQuestion, task) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameQuestion);

  for (let i = 0; i < 3; i += 1) {
    const rightAnswer = task();

    let answer = readlineSync.question('Your answer: ');
    // console.log(typeof answer);
    // console.log(typeof rightAnswer);

    if (typeof rightAnswer === 'number') {
      answer = +answer;
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
