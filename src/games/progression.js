import { generateRandomNumber } from '../helper.js';
import baseOfGames from '../index.js';

const progression = () => {
  const gameQuestion = 'What number is missing in the progression?';

  const gameTask = () => {
    const firstNumberProgression = generateRandomNumber(5);
    const progressionDifference = generateRandomNumber(10);
    const arr = [];
    let rightAnswer;
    for (
      let i = firstNumberProgression;
      i < progressionDifference * 10;
      i += progressionDifference
    ) {
      arr.push(i);
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    rightAnswer = arr[randomIndex];
    arr[randomIndex] = '..';

    console.log(`Question: ${arr.join(' ')}`);
    return rightAnswer;
  };
  baseOfGames(gameQuestion, gameTask);
};

export default progression;
