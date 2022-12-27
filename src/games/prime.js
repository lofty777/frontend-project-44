import { generateRandomNumber } from '../helper.js';
import { isPrime } from '../helper.js';
import baseOfGames from '../index.js';

const prime = () => {
  const gameQuestion =
    'Answer "yes" if given number is prime. Otherwise answer "no".';

  const gameTask = () => {
    const randomNumber = generateRandomNumber();
    console.log(`Question: ${randomNumber}`);

    return isPrime(generateRandomNumber);
  };
  baseOfGames(gameQuestion, gameTask);
};

export default prime;
