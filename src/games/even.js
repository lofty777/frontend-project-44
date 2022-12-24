import readlineSync from 'readline-sync';
import { generateRandomNumber } from '../helper.js';
import baseOfGames from '../index.js';

const even = () => {
  const gameQuestion =
    'Answer "yes" if the number is even, otherwise answer "no".';
  const gameTask = () => {
    const randomNumber = generateRandomNumber();
    let rightAnswer;
    console.log(`Question: ${randomNumber}`);

    return (rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no');
  };
  baseOfGames(gameQuestion, gameTask);
};

export default even;
