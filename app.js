// local (built-in) module.
import readline from 'node:readline/promises';
import {stdin as input, stdout as output } from 'node:process';

//Third party modules
import chalk from 'chalk';

//custom modules
import{add, subtract, multiply,divide} from './my_module/calculator.js';
import { getMatricNumber } from './my_module/my_matricNo.js';


const rl = readline.createInterface({ input, output });

const a  = parseFloat(await rl.question('First number: '));
const operator = await rl.question('Operator (+ - * /): ');
const b  = parseFloat(await rl.question('Second number: '));

rl.close();

let result;
try {
    switch (operator) {
        case '+': result = add(a, b); break;
        case '-': result = subtract(a, b); break;
        case '*': result = multiply(a, b); break;
        case '/': result = divide(a, b); break;
        default:
            console.log(chalk.red('Invalid operator'));
            process.exit(1);
    }

    // 
    console.log(
        chalk.cyan(`${a}`) + ' ' +
        chalk.yellow(`${operator}`) + ' ' +
        chalk.cyan(`${b}`) + ' = ' +
        chalk.green(`${result}`)
    );
} catch (err) {
    console.log(chalk.red(`Error: ${err.message}`));
}

//call the function to obtain the and display matric
const matricNumber = getMatricNumber();
console.log(chalk.red(`My matriculation number is: ${matricNumber}`));




//To access the metadata about the module
//console.log(chalk.yellow (import.meta.url));

// console.log(chalk.red (`Addition is: ${add(5,3)}`));
// console.log(chalk.green (`Subtraction is: ${subtract(5,3)}`));
// console.log(chalk.blue (`multiplication is: ${multiply(5,3)}`));
// console.log(chalk.magenta (`Division is: ${divide(5,3).toFixed(2)}`));
