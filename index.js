#! /usr/bin/env node


import inquirer from 'inquirer';
export const answer = await inquirer.prompt([
    { message: 'Enter first number,', type: 'number', name: 'firstnumber' },
    { message: 'Enter secound number', type: 'number', name: 'secoundnumber' },
    {
        message: 'select one of the operators to perform operation',
        type: 'list',
        name: 'operator',
        choices: ['addition', 'supraction', 'multipliction', 'division'],
    },
]);
if (answer.operator === 'addition') {
    console.log(answer.firstnumber + answer.secoundnumber);
}
else if (answer.operator === 'supraction') {
    console.log(answer.firstnumber - answer.secoundnumber);
}
else if (answer.operator === 'multipliction') {
    console.log(answer.firstnumber * answer.secoundnumber);
}
else if (answer.operator === 'division') {
    console.log(answer.firstnumber / answer.secoundnumber);
}
else {
    console.log('plses enter the void number');
}
