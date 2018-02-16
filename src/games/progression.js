import { cons } from 'hexlet-pairs';
import startGame from '..';
import generateRandom from '../calculation';

const rule = 'What number is missing in this progression?';

export const makeProgression = (firstValue, diff) => {
    const array = [];

    let nextValue = firstValue;

    for (let i = 1; i <= 10; i += 1) {
        array.push(nextValue);
        nextValue += diff;
    }
    return array;
};

const giveQuestionAnswer = () => {
    const firstValue = generateRandom(0, 10);
    const diff = generateRandom(1, 10);
    const progression = makeProgression(firstValue, diff);

    const index = generateRandom(0, 10);

    const correctAnswer = progression[index];
    progression[index] = '..';

    const expression = progression.map(value => `${value} `).join('');

    return cons(expression, String(correctAnswer));
};

const runProgression = () => startGame(rule, giveQuestionAnswer);

export default runProgression;
