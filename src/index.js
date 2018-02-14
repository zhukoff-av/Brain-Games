import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const getAnswer = () => readlineSync.question('Your answer: ');

export const startGame = (rule, giveQuestionAnswer) => {
    console.log('Welcome to the Brain Games!');
    console.log('Answer "yes" if number even otherwise answer "no".');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);

    const start = (gameCounter) => {
        if (gameCounter > 0) {
            const giveQA = giveQuestionAnswer();
            const question = car(giveQA);
            console.log(`Question: ${question}`);
            const userAnswer = getAnswer();
            const correctAnswer = String(cdr(giveQA));
            if (userAnswer !== correctAnswer) {
                console.log(`"${userAnswer}", computer says NO. Correct answer was "${correctAnswer}". Let's play again!`);
                return;
            }
            console.log('Correct!');
            start(gameCounter - 1);
        } else {
            console.log(`Congratulations, ${name}!`);
        }
    };
    const count = 3;
    start(count);
};

export default startGame;
