#!/usr/bin/env node --experimental-json-modules
import program from 'commander';
import info from '../package.json';
// import genDiff from '../src/index';
const { version, description } = info;

program
  .version(`${version}`)
  .description(`${description}`);

program.parse();
