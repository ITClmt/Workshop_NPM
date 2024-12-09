import chalk from "chalk";

const log = console.log;

// Combine styled and normal strings
log(
  chalk.blue("Julien") +
    chalk.red(" Jonathan") +
    chalk.green(" Lisa") +
    chalk.yellow(" Julian")
);
