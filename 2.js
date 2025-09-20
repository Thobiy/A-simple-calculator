// local (built-in) module.
import readline from 'node:readline/promises';
import {stdin as input, stdout as output } from 'node:process';

//Third party modules
import chalk from 'chalk';

//custom modules
import{add, subtract, multiply,divide} from './my_module/calculator.js';
import { getMatricNumber } from './my_module/my_matricNo.js';

const r1 = readline.createInterface({ input, output });

async function askNumber(prompt) {
    while (true) {
        const ans = await r1.question(prompt);
        const n = parseFloat(ans);
        if (!Number.isNaN(n)) return n;
        console.log('Not a number - try again.');

    }
}

async function main() {
    console.log('1) Add 2) Sub 3) Mul 4) Div 5) Exit');
    const choice = await r1.question('Pick between option 1-5: ');
    if (choice === '5') {r1.close(); return; }

    const a = await askNumber('First: ');
    const b = await askNumber('Second: ');

      let result;
  switch (choice) {
    case '1': result = add(a, b); break;
    case '2': result = subtract(a, b); break;
    case '3': result = multiply(a, b); break;
    case '4': result = divide(a, b); break;
    default:  
        console.log('Invalid choice'); 
        rl.close(); return;
  }

  console.log(chalk.green(`Result: ${result}`));
  rl.close();
}

main();


//call the function to obtain the and display matric
const matricNumber = getMatricNumber();
console.log(`Your matriculation number is: ${matricNumber}`);




//To access the metadata about the module
//console.log(chalk.yellow (import.meta.url));

// console.log(chalk.red (`Addition is: ${add(5,3)}`));
// console.log(chalk.green (`Subtraction is: ${subtract(5,3)}`));
// console.log(chalk.blue (`multiplication is: ${multiply(5,3)}`));
// console.log(chalk.magenta (`Division is: ${divide(5,3).toFixed(2)}`));
