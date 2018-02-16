import { cons } from 'hexlet-pairs';
import startGame from '..';
import generateRandom from '../calculation';

const rule = 'Is this number prime?';

const isPrime = number => {
    for (let i = 2; i < number; i += 1) {
        if (number % i === 0) {
            return false;
        }
    }
    return number > 1;
};

const giveQuestionAnswer = () => {
    const question = generateRandom(1, 20);
    const answer = isPrime(question) ? 'yes' : 'no';

    return cons(question, answer);
};

const startPrime = () => startGame(rule, giveQuestionAnswer);

export default startPrime;
