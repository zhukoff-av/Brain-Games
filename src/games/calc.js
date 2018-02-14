import { cons } from 'hexlet-pairs';
import startGame from '..';

const rule = 'What is the result of the expression?';

const generateRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const generateRandomOperator = () => {
    const possible = '+-*';
    return possible.charAt(Math.floor(Math.random() * possible.length));
};

const giveQuestionAnswer = () => {
    const firstValue = generateRandom(0, 20);
    const secondValue = generateRandom(0, 20);
    const operator = generateRandomOperator();

    const question = `${firstValue} ${operator} ${secondValue}`;
    let answer = '';

    switch (operator) {
    case '+': answer = firstValue + secondValue; break;
    case '-': answer = firstValue - secondValue; break;
    case '*': answer = firstValue * secondValue; break;
    default:
    }

    return cons(question, answer);
};

const runCalculator = () => startGame(rule, giveQuestionAnswer);

export default runCalculator;
