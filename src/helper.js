import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  if (userName === '') {
    console.log('Hello, My friend!');
  } else {
    console.log(`Hello, ${userName}!`);
  }
  return userName;
};

export const generateRandomNumber = (n = 100) => Math.ceil(Math.random() * n);


