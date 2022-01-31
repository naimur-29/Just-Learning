'use strict';


// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log(`You've passed the test...`);

// let age = 10;
// if (age === 18) console.log(`hello world`);
// else console.log('dumb');

// console.log('hello world');

// // arrow function::
// const printOut = code => console.log(code);
// printOut('hello world');

// const textSplitter = text => {
//     for (let i = 0; i < text.length; i++) {
//         console.log(text[i], i);
//     }
// textSplitter('hello world');
// }

// const text = 'hello';
// console.log(text[0]);

// challenge_1
// const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         return `Team Dolphins wins the game`;
//     } else if (avgKoalas >= avgDolphins * 2) {
//         return `Team Koalas wins the game`;
//     } else {
//         return `Nobody wins... It's a draw`;
//     }
// }

// let avgDolphins = calcAverage(85, 54, 41);
// let avgKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(avgDolphins, avgKoalas));

// const word = 'Thanatos IS DUMB?';
// for (let i = 0; i < word.length; i++) {
//     console.log(word[i]);
//     // console.log(i);
// }

// const element = prompt("Enter your name");
// const arr = new Array();
// for (let i = 0; i < element.length; i++) {
//     arr.push(element[i]);
// }
// let newElement = '';
// for (let i = arr.length - 1; i >= 0; i--) {
//     newElement += arr[i];
// }
// console.log(newElement);

// challenge_2
// function tipCalc(bill) {
//     return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
// }

// let bill;
// let bills = new Array();
// let tips = new Array();
// let totals = new Array();
// const numOfBills = prompt(`Enter the number of bills`)

// for (let i = 0; i < numOfBills; i++) {
//     bill = Number(prompt("Enter the amount of bill"));
//     bills.push(bill);
//     tips.push(tipCalc(bill));
//     totals.push(bills[i] + tips[i]);
// }

// console.log(bills, tips, totals);


// test
// const box = document.getElementById('box');
// let num = 40;
// while (1 === 1) {
//     for (let i = 0; i < 10; i++) {
//         box.style.height = String(num) + 'px';
//         if (i < 5) {
//             num += 100;
//         } else {
//             num -= 100;
//         }
//     }
// }
// box.style.marginLeft = '0px';

// challenge
// Jonas is a 46-years old teacher, and he has a drivers license.

// const jonas = {
//     firstName: 'Jonas',
//     job: 'teacher',
//     currentYear: 2022,
//     birthYear: 1991,
//     driversLicense: true,
//     calcAge: function () {
//         return this.currentYear - this.birthYear;
//     }
// };

// console.log(`${jonas.firstName} is a ${jonas.calcAge()}-years old ${jonas.job}, and he has ${jonas.driversLicense ? 'a' : 'no'} drivers license.`);


// // challenge_3:
// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = (this.mass / this.height ** 2).toFixed(2);
//         return this.bmi;
//     }
// };

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = (this.mass / this.height ** 2).toFixed(2);
//         return this.bmi;
//     }
// };

// mark.calcBMI();
// john.calcBMI();

// mark.bmi > john.bmi ? console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})!`) : console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})!`);


// a function that first takes an array and calculates the average. Then it removes the closest number to the average and repeat the same process till it ends up with one element...
// yea I know that there's no point but I still wanna do it... good luck me!!
const arr = [23, 43, 54, 66, 23, 6, 12];
arr.sort(function (a, b) { return a - b });

function calcAvg() {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return (sum / arr.length).toFixed(2);
}
// console.log(calcAvg());

function getClosestNum(avg) {
    let min = Math.max(...arr);
    let closestNum;
    for (let i = 0; i < arr.length; i++) {
        if (Math.abs(avg - arr[i]) < min) {
            min = Math.abs(avg - arr[i]);
            closestNum = arr[i];
        }
    }
    return closestNum;
}

const new_arr = new Array();
console.log(arr);
while (arr.length !== 0) {
    let erased = getClosestNum(calcAvg());
    new_arr.push(erased);
    arr.splice(arr.indexOf(erased), 1);
}
console.log(new_arr);