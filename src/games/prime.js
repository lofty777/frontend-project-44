import { generateRandomNumber } from '../helper.js';
import baseOfGames from '../index.js';

const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const prime = () => {
  const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const gameTask = () => {
    console.log(gameQuestion);
    const randomNumber = generateRandomNumber();
    console.log(`Question: ${randomNumber}`);

    return isPrime(randomNumber) ? 'yes' : 'no';
  };
  baseOfGames(gameTask);
};

export default prime;
