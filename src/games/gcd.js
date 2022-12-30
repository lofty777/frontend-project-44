import { generateRandomNumber } from '../helper.js';
import baseOfGames from '../index.js';

const greatestCommonDivisor = (a, b) => {
  if (a === 0) {
    return b;
  }
  let x = a;
  let y = b;
  while (y !== 0) {
    if (x > y) {
      x -= y;
    } else {
      y -= x;
    }
  }

  return x;
};

const gcd = () => {
  const gameQuestion = 'Find the greatest common divisor of given numbers.';

  const gameTask = () => {
    const firstNumber = generateRandomNumber();
    const secondNumber = generateRandomNumber(50);
    console.log(`Question: ${firstNumber} ${secondNumber}`);

    return greatestCommonDivisor(firstNumber, secondNumber);
  };
  baseOfGames(gameQuestion, gameTask);
};

export default gcd;
