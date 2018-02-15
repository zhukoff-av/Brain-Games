import { cons } from 'hexlet-pairs';
import startGame from '..';
import generateRandom from '../calculation';

const rule = 'Find the greatest common divisor of given numbers.';

const gcd = (firstValue, secondValue) => {
    if (secondValue === 0) {
        return firstValue;
    }

    return gcd(secondValue, firstValue % secondValue);
};

const giveQuestionAnswer = () => {
    const firstValue = generateRandom(1, 150);
    const secondValue = generateRandom(1, 150);

    const question = `${firstValue}, ${secondValue}`;
    const answer = gcd(firstValue, secondValue);

    return cons(question, answer);
};

const runGcd = () => startGame(rule, giveQuestionAnswer);

export default runGcd;
