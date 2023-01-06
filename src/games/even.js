import { generateRandomNumber } from '../helper.js';
import baseOfGames from '../index.js';

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const even = () => {
  const gameTask = () => {
    console.log(gameQuestion);
    const randomNumber = generateRandomNumber();
    console.log(`Question: ${randomNumber}`);

    return randomNumber % 2 === 0 ? 'yes' : 'no';
  };
  baseOfGames(gameTask);
};

export default even;
