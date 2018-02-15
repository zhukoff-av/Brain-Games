import { cons } from 'hexlet-pairs';
import startGame from '..';
import generateRandom from '../calculation';

const rule = 'Balance the given number.';

export const balanceSort = (array) => {
    const min = Math.min.apply(null, array);
    const max = Math.max.apply(null, array);
    const delta = Math.floor((max - min) / 2);
    if (delta > 0) {
        const minValue = array.lastIndexOf(min);
        const maxValue = array.indexOf(max);
        const newArray = array;
        newArray[minValue] += delta;
        newArray[maxValue] -= delta;
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
