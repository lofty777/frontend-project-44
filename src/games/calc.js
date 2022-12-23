import _ from 'lodash';
import greeting from '../cli.js';
import readlineSync from 'readline-sync';
import { generateRandomNumber } from './even.js';

const operators = ['+', '-', '*'];
const question = 'What is the result of the expression?';

const calc = () => {
  const userName = greeting();
  console.log(question);
  for (let i = 0; i < 3; i += 1) {
    const randomOperator = _.sample(operators);
    const randomNumber1 = generateRandomNumber();
    const randomNumber2 = generateRandomNumber();

    console.log(
      `Question: ${randomNumber1} ${randomOperator} ${randomNumber2}`
    );

    const rightAnswer = eval(randomNumber1 + randomOperator + randomNumber2);
    const answer = +readlineSync.question('Your answer: ');

    if (answer === rightAnswer && i < 3) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default calc;
