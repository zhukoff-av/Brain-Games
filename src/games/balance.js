import { cons } from 'hexlet-pairs';
import startGame from '..';
import generateRandom from '../calculation';

const rule = 'Balance the given number.';

export const balanceSort = (array) => {
    const max = Math.max.apply(null, array);
    const min = Math.min.apply(null, array);

    const delta = Math.floor((max - min) / 2);

    if (delta > 0) {
        const iMin = array.lastIndexOf(min);
        const iMax = array.indexOf(max);

        const newArray = array;

        newArray[iMin] += delta;
        newArray[iMax] -= delta;

        balanceSort(newArray);
    }
    return array.sort((a, b) => a - b);
};

const giveQuestionAnswer = () => {
    const number = generateRandom(100, 200);
    const array = String(number).split('').map(Number);
    const result = balanceSort(array).join('');

    return cons(number, result);
};

const runBalance = () => startGame(rule, giveQuestionAnswer);

export default runBalance;
