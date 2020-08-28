#! /usr/bin/env node

const chalk = require('chalk');
const { getRandomColors } = require('triad-colors');

(async () => {
  const colors = getRandomColors();
  for (const color of colors) {
    console.log(chalk.hex(color)(color));
  }
})();
