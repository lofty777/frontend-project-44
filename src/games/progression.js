import { generateRandomNumber } from '../helper.js';
import baseOfGames from '../index.js';

const progressionForGame = (firstNumberProgression, progressionDifference, count = 10) => {
  const arr = [];
  for (
    let i = firstNumberProgression;
    i < progressionDifference * count;
    i += progressionDifference
  ) {
    arr.push(i);
  }
  return arr;
};

const progression = () => {
  const gameQuestion = 'What number is missing in the progression?';

  const gameTask = () => {
    console.log(gameQuestion);
    const firstNumberProgression = generateRandomNumber(5);
    const progressionDifference = generateRandomNumber(10);
    const arr = progressionForGame(firstNumberProgression, progressionDifference);
    const randomIndex = generateRandomNumber(arr.length - 1);
    const rightAnswer = arr[randomIndex];
    arr[randomIndex] = '..';

    console.log(`Question: ${arr.join(' ')}`);
    return rightAnswer;
  };
  baseOfGames(gameTask);
};

export default progression;
