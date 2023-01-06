import { generateRandomNumber } from '../helper.js';
import baseOfGames from '../index.js';

const gameQuestion = 'What is the result of the expression?';

const calculation = (firstNumber, secondNumber, operator) => {
  let rightAnswer;
  switch (operator) {
    case '+':
      rightAnswer = firstNumber + secondNumber;
      break;
    case '-':
      rightAnswer = firstNumber - secondNumber;
      break;

    default:
      rightAnswer = firstNumber * secondNumber;
  }
  return rightAnswer;
};

const calc = () => {
  const gameTask = () => {
    console.log(gameQuestion);
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

  baseOfGames(gameTask);
};

export default calc;
