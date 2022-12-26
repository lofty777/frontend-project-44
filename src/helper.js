import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello ' + userName + '!');
  return userName;
};

export const generateRandomNumber = () => {
  return Math.round(Math.random() * 5);
};

const generateProgressionDifference = () => {
  return Math.round(Math.random() * 10);
};

const firstNumberProgression = generateRandomNumber();
const progressionDifference = generateProgressionDifference();

// export const greatestCommonDivisor = (a, b) => {
//   if (a == 0) return b;

//   while (b != 0) {
//     if (a > b) a = a - b;
//     else b = b - a;
//   }

//   return a;
// };

export const generateProgression = (
  firstNumberProgression,
  progressionDifference,
  length
) => {
  const arr = [];
  for (
    let i = firstNumberProgression;
    i < progressionDifference * length;
    i += progressionDifference
  ) {
    arr.push(i);
  }
  arr[4] = '..';
  console.log(arr.join(' '));
};

generateProgression(firstNumberProgression, progressionDifference, 10);
