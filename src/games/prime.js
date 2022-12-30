import { generateRandomNumber } from '../helper.js';
import baseOfGames from '../index.js';

const prime = () => {
  const gameQuestion =
    'Answer "yes" if given number is prime. Otherwise answer "no".';

  const gameTask = () => {
    const randomNumber = generateRandomNumber();
    console.log(`Question: ${randomNumber}`);

    const isPrime = (num) => {
      if (num <= 1) return false;

      for (let i = 2; i * i <= num; i += 1) {
        if (num % i === 0) return false;
      }
      return true;
    };
    return isPrime(randomNumber) ? 'yes' : 'no';
  };
  baseOfGames(gameQuestion, gameTask);
};

export default prime;
