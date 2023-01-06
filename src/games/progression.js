import { generateRandomNumber } from '../helper.js';
import baseOfGames from '../index.js';

const gameQuestion = 'What number is missing in the progression?';

const progressionForGame = (
  firstNumberProgression,
  progressionDifference,
  count = 10,
) => {
  const progres = [];
  for (
    let i = firstNumberProgression;
    i < progressionDifference * count;
    i += progressionDifference
  ) {
    progres.push(i);
  }
  return progres;
};

const progression = () => {
  const gameTask = () => {
    console.log(gameQuestion);
    const firstNumberProgression = generateRandomNumber(5);
    const progressionDifference = generateRandomNumber(10);
    const gameProgression = progressionForGame(
      firstNumberProgression,
      progressionDifference,
    );
    const randomIndex = generateRandomNumber(gameProgression.length - 1);
    const rightAnswer = gameProgression[randomIndex];
    gameProgression[randomIndex] = '..';

    console.log(`Question: ${gameProgression.join(' ')}`);
    return rightAnswer;
  };
  baseOfGames(gameTask);
};

export default progression;
