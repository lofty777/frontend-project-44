import { generateFirstNumberProgression } from '../helper.js';
import { generateProgressionDifference } from '../helper.js';
import { generateProgression } from '../helper.js';
import baseOfGames from '../index.js';

const progression = () => {
  const gameQuestion = 'What number is missing in the progression?';

  const gameTask = () => {
    const firstNumberProgression = generateFirstNumberProgression();
    const progressionDifference = generateProgressionDifference();
    const arr = [];
    let rightAnswer;
    for (
      let i = firstNumberProgression;
      i < progressionDifference * 10;
      i += progressionDifference
    ) {
      arr.push(i);
    }
    const randomIndex = Math.ceil(Math.random() * arr.length);
    rightAnswer = arr[randomIndex];
    arr[randomIndex] = '..';

    console.log(`Question: ${arr.join(' ')}`);
    return rightAnswer;
  };
  baseOfGames(gameQuestion, gameTask);
};

export default progression;
