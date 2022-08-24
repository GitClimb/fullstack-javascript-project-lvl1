#!/usr/bin/env node
import { descriptionGame, generateRound } from '../../src/games/even.js';
import runGameEngine from '../../src/index.js';

runGameEngine(descriptionGame, generateRound);
