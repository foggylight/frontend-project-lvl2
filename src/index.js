import { readFileSync } from 'fs';
import _ from 'lodash';

const getKeys = (filepath) => {
  const content = readFileSync(filepath, 'utf-8');
  const obj = JSON.parse(content);
  const keys = Object.keys(obj);
  return keys;
};

const genDiff = (filepath1, filepath2) => {
  const content1 = readFileSync(filepath1, 'utf-8');
  const content2 = readFileSync(filepath2, 'utf-8');
  const obj1 = JSON.parse(content1);
  const obj2 = JSON.parse(content2);
  const entries1 = Object.entries(obj1);
  const keys2 = Object.keys(obj2);

  const res1 = entries1.map(([key, val]) => ((_.has(obj2, key) && obj2[key] === val) ? [key, val] : [`- ${key}`, val]));
  const res2 = keys2.filter((key) => !_.has(obj1, key)).map((key) => `+ ${key}`);
  const res = [...res1, ...res2].reduce((obj, [key, val], {}) => (obj[key] = val));
  return console.log(res);
};

genDiff('file1.json', 'file2.json');

export default genDiff;
