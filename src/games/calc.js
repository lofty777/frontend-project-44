import { generateRandomNumber } from '../helper.js';
import baseOfGames from '../index.js';

const calc = () => {
  const gameQuestion = 'What is the result of the expression?';
  const gameTask = () => {
    const operator = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * operator.length);
    const randomOperator = operator[randomIndex];
    const randomNumber1 = generateRandomNumber();
    const randomNumber2 = generateRandomNumber();
    let rightAnswer;
    console.log(
      `Question: ${randomNumber1} ${randomOperator} ${randomNumber2}`
    );
    switch (randomOperator) {
      case '+':
        rightAnswer = randomNumber1 + randomNumber2;
        break;
      case '-':
        rightAnswer = randomNumber1 - randomNumber2;
        break;

      default:
        rightAnswer = randomNumber1 * randomNumber2;
    }
    return rightAnswer.toString();
  };
  baseOfGames(gameQuestion, gameTask);
};

export default calc;
