import { cons } from 'hexlet-pairs';
import startGame from '..';

const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

export const generateRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const rule = 'Answer "yes" if number even otherwise answer "no".';

const startPoint = () => startGame(rule, giveQuestionAnswer);

export default startPoint;

export const giveQuestionAnswer = () => {
    const question = generateRandom(0, 115);
    const answer = isEven(question);

    return cons(question, answer);
};
