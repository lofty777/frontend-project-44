import { generateRandomNumber } from '../helper.js';
import baseOfGames from '../index.js';

const even = () => {
  // eslint-disable-next-line no-use-before-define
  const gameQuestion =
    'Answer "yes" if the number is even, otherwise answer "no".';

  const gameTask = () => {
    const randomNumber = generateRandomNumber();
    console.log(`Question: ${randomNumber}`);

    return randomNumber % 2 === 0 ? 'yes' : 'no';
  };
  baseOfGames(gameQuestion, gameTask);
};

export default even;
