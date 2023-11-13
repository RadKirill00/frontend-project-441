#!/usr/bin/env node
import readlineSync from 'readline-sync';

const generateProgression = () => {
  const length = Math.floor(Math.random() * 6) + 5; 
  const start = Math.floor(Math.random() * 50) + 1;
  const difference = Math.floor(Math.random() * 10) + 1;
  const hiddenIndex = Math.floor(Math.random() * length);
  
  const progression = [];
  for (let i = 0; i < length; i++) {
    if (i === hiddenIndex) {
      progression.push('..');
    } else {
      progression.push(start + i * difference);
    }
  }

  return { progression, hiddenNumber: start + hiddenIndex * difference };
};

const playBrainProgression = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log('What number is missing in the progression?');

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const { progression, hiddenNumber } = generateProgression();
    const question = `Question: ${progression.join(' ')}`;
    console.log(question);
    
    const userAnswer = readlineSync.question('Your answer: ');

    if (parseInt(userAnswer, 10) === hiddenNumber) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenNumber}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};

playBrainProgression();
