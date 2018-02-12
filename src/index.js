import readlineSync from 'readline-sync';

// const actual = readlineSync.question('Your answer: ');
export const sayHello = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
