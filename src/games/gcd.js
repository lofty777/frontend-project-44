import { generateRandomNumber, greatestCommonDivisor } from '../helper.js';
import baseOfGames from '../index.js';

const gcd = () => {
  const gameQuestion = 'Find the greatest common divisor of given numbers.';

  const gameTask = () => {
    const randomNumber1 = generateRandomNumber();
    const randomNumber2 = generateRandomNumber(50);
    console.log(`Question: ${randomNumber1} ${randomNumber2}`);

    return greatestCommonDivisor(randomNumber1, randomNumber2);
  };
  baseOfGames(gameQuestion, gameTask);
};

export default gcd;
