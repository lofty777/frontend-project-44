import { generateRandomNumber } from '../helper.js';
import baseOfGames from '../index.js';

const calculation = (num1, num2, operator) => {
  let rightAnswer;
  switch (operator) {
    case '+':
      rightAnswer = num1 + num2;
      break;
    case '-':
      rightAnswer = num1 - num2;
      break;

    default:
      rightAnswer = num1 * num2;
  }
  return rightAnswer;
};

const calc = () => {
  const gameQuestion = 'What is the result of the expression?';

  const gameTask = () => {
    const operators = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * operators.length);
    console.log(randomIndex);
    const randomOperator = operators[randomIndex];
    const firstNumber = generateRandomNumber(25);
    const secondNumber = generateRandomNumber(25);
    console.log(
      `Question: ${firstNumber} ${randomOperator} ${secondNumber}`,
    );
    return calculation(firstNumber, secondNumber, randomOperator);
  };

  baseOfGames(gameQuestion, gameTask);
};

export default calc;
