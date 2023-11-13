#!/usr/bin/env node
import readlineSync from 'readline-sync';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const playBrainPrime = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const question = `Question: ${randomNumber}`;
    console.log(question);

    const userAnswer = readlineSync.question('Your answer: ');

    if ((isPrime(randomNumber) && userAnswer.toLowerCase() === 'yes') ||
        (!isPrime(randomNumber) && userAnswer.toLowerCase() === 'no')) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};

playBrainPrime();
