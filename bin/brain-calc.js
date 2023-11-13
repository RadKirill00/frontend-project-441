#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateExpression = () => {
  const num1 = getRandomNumber(1, 20);
  const num2 = getRandomNumber(1, 20);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  return `${num1} ${operator} ${num2}`;
};

const calculateExpression = (expression) => {
  const [num1, operator, num2] = expression.split(' ');
  const a = parseInt(num1, 10);
  const b = parseInt(num2, 10);

  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return NaN;
  }
};

const playBrainCalc = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log('What is the result of the expression?');

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const expression = generateExpression();
    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = calculateExpression(expression);

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};

playBrainCalc();
