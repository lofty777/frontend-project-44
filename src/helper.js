import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const generateRandomNumber = (n = 100) => Math.ceil(Math.random() * n);

export const greatestCommonDivisor = (a, b) => {
  if (a === 0) {
    return b;
  }
  let x = a;
  let y = b;
  while (y !== 0) {
    if (x > y) {
      x -= y;
    } else {
      y -= x;
    }
  }

  return x;
};

export const isPrime = (num) => {
  if (num <= 1) return 'no';

  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
};
