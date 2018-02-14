import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';
import { cons } from 'hexlet-pairs';

const getAnswer = () => readlineSync.question('Your answer: ');

export const generateRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

export const giveQuestionAnswer = () => {
    const question = generateRandom(0, 115);
    const answer = isEven(question);

    return cons(question, answer);
};

export const startGame = () => {
    console.log('Welcome to the Brain Games!');
    console.log('Answer "yes" if number even otherwise answer "no".');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);

    const start = (namberOfGames) => {
        if (namberOfGames > 0) {
            const giveQA = giveQuestionAnswer();
            const question = car(giveQA);
            console.log(`Question: ${question}`);
            const userAnswer = getAnswer();
            const correctAnswer = String(cdr(giveQA));
            if (userAnswer !== correctAnswer) {
                console.log(`"${userAnswer}", computer says NO. Correct answer was "${correctAnswer}". You have one more try.`);
                return;
            }
            console.log('Correct!');
            start(namberOfGames - 1);
        } else {
            console.log(`Congratulations, ${name}!`);
        }
    };
    const count = 3;
    start(count);
};
