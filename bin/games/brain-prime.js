#!/usr/bin/env node
import { descriptionGame, generateRound } from '../../src/games/prime.js';
import runGameEngine from '../../src/index.js';

runGameEngine(descriptionGame, generateRound);
