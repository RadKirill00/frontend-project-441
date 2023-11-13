#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { playBrainEven } from '../games/brain-even';
import { playBrainCalc } from '../games/brain-calc';
import { playBrainGCD } from '../games/brain-gcd';
import { playBrainProgression } from '../games/brain-progression';
import { playBrainPrime } from '../games/brain-prime';

console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}!\n`);

// Play each game
playBrainEven();
playBrainCalc();
playBrainGCD();
playBrainProgression();
playBrainPrime();



