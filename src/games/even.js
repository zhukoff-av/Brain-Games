import { cons } from 'hexlet-pairs';
import startGame from '..';
import generateRandom from '../calculation';

const isEven = num => num % 2 === 0;

const rule = 'Answer "yes" if number even otherwise answer "no".';

const startPoint = () => startGame(rule, giveQuestionAnswer);

export default startPoint;

export const giveQuestionAnswer = () => {
    const question = generateRandom(0, 115);
    const answer = isEven(question) ? 'yes' : 'no';

    return cons(question, answer);
};
