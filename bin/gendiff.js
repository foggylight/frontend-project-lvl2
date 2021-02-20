#!/usr/bin/env node --experimental-json-modules
import program from 'commander';
import packageInfo from '../package.json';
// import genDiff from '../src/index';

const { version, description } = packageInfo;

program
  .arguments('<filepath1> <filepath2>')
  .version(`${version}`)
  .description(`${description}`)
  .option(' -f, --format [type]', 'output format');

program.parse();
