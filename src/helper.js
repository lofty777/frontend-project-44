import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello ' + userName + '!');
  return userName;
};

export const generateRandomNumber = () => {
  return Math.ceil(Math.random() * 50);
};

export const generateFirstNumberProgression = () => {
  return Math.ceil(Math.random() * 5);
};

export const generateProgressionDifference = () => {
  return Math.floor(Math.random() * 10);
};

export const greatestCommonDivisor = (a, b) => {
  if (a == 0) return b;

  while (b != 0) {
    if (a > b) a = a - b;
    else b = b - a;
  }

  return a;
};

export const generateProgression = (
  firstNumberProgression,
  progressionDifference,
  length
) => {
  const arr = [];
  let rightAnswer;
  for (
    let i = firstNumberProgression;
    i < progressionDifference * length;
    i += progressionDifference
  ) {
    arr.push(i);
  }
  const randomIndex = Math.ceil(Math.random() * arr.length);
  console.log(randomIndex);
  rightAnswer = arr[randomIndex];
  console.log(arr[randomIndex]);
  arr[randomIndex] = '..';

  return arr.join(' ');
};
