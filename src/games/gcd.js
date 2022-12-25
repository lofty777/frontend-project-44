import { generateRandomNumber } from '../helper.js';
import baseOfGames from '../index.js';
import { greatestCommonDivisor } from '../helper.js';

const gcd = () => {
  const gameQuestion = 'Find the greatest common divisor of given numbers.';

  const gameTask = () => {
    let randomNumber1 = generateRandomNumber();
    let randomNumber2 = generateRandomNumber();
    console.log(`Question: ${randomNumber1} ${randomNumber2}`);

    return greatestCommonDivisor(randomNumber1, randomNumber2);
  };
  baseOfGames(gameQuestion, gameTask);
};

export default gcd;
