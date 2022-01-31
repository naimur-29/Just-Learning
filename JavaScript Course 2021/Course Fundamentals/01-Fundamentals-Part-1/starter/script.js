function print(anything) {
    console.log(anything)
}


// const marksHeight = 1.69;
// const marksWeight = 78;
// const johnsHeight = 1.95;
// const johnsWeight = 92;

// function bmi(weight, height) {
//     return weight / height ** 2;
// }

// // let markHigherBMI = bmi(marksWeight, marksHeight) > bmi(johnsWeight, johnsHeight);
// // console.log(markHigherBMI);

// // console.log(`hello world is actually not ${marksWeight} but ${johnsWeight} years old`);
// // console.log(`string with
// // multiple
// // lines?`)

// if (bmi(marksWeight, marksHeight) > bmi(johnsWeight, johnsHeight)) {
//     console.log(`Mark's BMI (${bmi(marksWeight, marksHeight)}) is higher than John's BMI (${bmi(johnsWeight, johnsHeight)})`);
// } else {
//     console.log(`John's BMI (${bmi(johnsWeight, johnsHeight)}) is higher than Mark's BMI (${bmi(marksWeight, marksHeight)})`);
// }

// const money = 0
// if (money) {
//     console.log(`Don't spend it all...`);
// } else {
//     console.log(`You should get a job!!`);
// }

// const age = Number(prompt("How old are you?"));
// if (age >= 18) {
//     print(`You're an adult...`);
// } else if (age < 18) {
//     print(`Sorry you're not an adult yet!`);
// } else {
//     print(`Please enter a valid input which is number...`);
// }
// // console.log(typeof (Number('nine') + 1))
// // print(typeof (null))

// const dolphinsScore = (96 + 108 + 89) / 3
// const koalasScore = (88 + 91 + 110) / 3

// if (dolphinsScore > koalasScore) {
//     print(`Dolphins who's score is ${Math.round(dolphinsScore)}, is the winner!`);
// } else if (dolphinsScore < koalasScore) {
//     print(`Koalas who's score is ${Math.round(koalasScore)}, is the winner!`);
// } else {
//     print(`It's a draw...`);
// }


// number = Number(prompt("Enter your favorite number"))
// print(`${number} is ${number % 2 === 0 ? 'even' : 'odd'}`)


const bill = Number(prompt("Enter the bill amount"));
const tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;
print(`The bill was ${bill}, the tip was ${tip} and the total amount is ${bill + tip}`);