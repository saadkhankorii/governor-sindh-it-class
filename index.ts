import inquirer from "inquirer";

const answer = await inquirer.prompt([{message:"Enter first Number", type:"number", name:"firstNumber"},
{ message:"Enter Second Number", type:"number", name:"secondNumber" },

{ message:"Selet one of the operator to parform the opration", type:"list", name:"operator",
choices: ["addition", "subtraction", "multiplication", "division"]
},
]);

if (answer.operator === "addition") {
    console.log(answer.firstNumber+answer.secondNumber);
} else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
} else {
    console.log("please select a vailed value"); 
};
