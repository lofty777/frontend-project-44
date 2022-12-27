import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello ' + userName + '!');
  return userName;
};

export const generateRandomNumber = (n = 100) => {
  return Math.ceil(Math.random() * n);
};

export const greatestCommonDivisor = (a, b) => {
  if (a == 0) return b;

  while (b != 0) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }

  return a;
};

export const isPrime = (num) => {
  if (num <= 1) return 'no';

  for (let i = 2; i * i <= num; i++) {
    if (num % i == 0) return 'no';
  }
  return 'yes';
};
