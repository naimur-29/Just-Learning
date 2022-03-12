// let a = "hello world";
// const b = "hello world";
// // var c = "hello world";

// b = "bolo world";
// console.log(b);

// camel case
// let randomNumberForThis = 'whatever';

// // string
// const stringData = "billal's world";

// console.log(typeof stringData, stringData);

// // undefined
// let a;
// console.log(typeof a);

// operator
// a % 2

// // boolean
// let a = 0;
// console.log(Boolean(a));

// // data type conversion
// let a = "10";
// a = Boolean(a);

// console.log(typeof a);

// // string manipulation
// let str = "hello world";
// console.log(str[0]);

// if statement
// let num = 15;

// console.log(typeof num);

// // no. 1
// if (num === 15) {
//   console.log("hello world");
//   console.log('world');
// } else {
//   console.log("bolo world");
// }

// // no.2
// if (num === 15) console.log("hello world");

// no.3
// num === 15 ? console.log('hello world') : console.log('bolo world');

// challenge 1:
// temperature1 = 32(C), temperature2 = 102(F)
// if temperature1 > temperature2 then, log (temperature1 is greater than temperature2)
// vise versa

// // template string
// let a = "32";
// let b = "43";

// console.log(b + " is greater than " + a);

// console.log(`${b} is greater than ${a}`);

// // getting the bigger num
// const num1 = prompt("Enter the first number");
// const num2 = prompt("Enter the second number");

// num1 > num2
//   ? console.log(`${num1} is the bigger one`)
//   : console.log(`${num2} is the bigger one`);

// const isEligible = true;
// if (!isEligible) console.log("Is eligible");

// // n <= 0;

// const firsName = "Moniruj";
// const lastName = "Jaman";

// console.log(firsName.slice(-3));

// loop
// for loop
// for (let i = 1; i < 11; i++) {
//   console.log(i);
//   console.log("hello");
// }

// while loop
// let i = 1;
// while (i < 11) {
//   console.log(i);
//   i++;
// }

// // for (let i = 0; i < 10; i++) {
//   let num = Number(prompt("Enter the number"));
//   if (num % 5 === 0 || num % 2 === 0) {
//     if (num % 5 === 0) console.log("multiple of 5");
//     if (num % 2 === 0) console.log("multiple of 2");
//   }
// }

// let num = "";

// while (num !== "done") {
//   num = prompt("enter num");
//   num = Number(num);
//   if (num % 5 === 0 || num % 2 === 0) {
//     if (num % 5 === 0) console.log("multiple of 5");
//     if (num % 2 === 0) console.log("multiple of 2");
//   }
// }

//array
// num = [2, 3, 4, 5, 6, 10, 15, 22];
// console.log(num);
// console.log(num.length);
// console.log(num[2]);

// for (let i = 0; i < num.length; i++) console.log(num[i]);

// console.log("hello world");

// triangle
// let i, n, j;
// n = Number(prompt("Enter the number"));

// for (i = 1; i <= n; i++) {
//   let str = "";
//   for (j = 1; j <= i; j++) {
//     str += j;
//   }
//   console.log(str);
// }

// rectangle

// for (let i = 1; i <= 5; i++) {
//   let string1 = "";
//   for (let j = 5; j >= 1; j--) {
//     string1 += j;
//   }
//   console.log(string1);
//   console.log(" ");
// }

// objects-------------------------------------------------
// const human1 = {
//   age: 18,
//   firstName: "Billal",
//   lastName: "Hossain",
//   isAdult: true,
// };

// const human2 = {
//   age: 65,
//   firstName: "John",
//   lastName: "Hossain",
//   isAdult: true,
// };

// const human3 = {
//   age: 2,
//   firstName: "Rocky",
//   lastName: "Hossain",
//   isAdult: true,
// };

// console.log(
//   `${human2.firstName} ${human2.lastName} is ${human2.age} years old...`
// );

// DOM: document object model------------------------------
// document.querySelector(".mainHeading").textContent = "This is a paragraph";

// // document.querySelector("body").style.backgroundColor = "pink";

// const mainHeading = document.querySelector(".mainHeading");

// mainHeading.style.fontSize = "4rem";
// mainHeading.textContent = "This is a paragraph";

// const body = document.querySelector("body");
// const btn = document.querySelector(".btn");

// body.addEventListener("click", function () {
//   //   body.style.backgroundColor === "black"
//   //     ? (body.style.backgroundColor = "white")
//   //     : (body.style.backgroundColor = "black");
//   body.style.backgroundColor === "red"
//     ? (body.style.backgroundColor = "white")
//     : (body.style.backgroundColor = "red");
// });

// template literal = ``
// / = forward slash
// \ = backward slash

// functions--------------------------------------------
// 1. function declaration
// function biggestNum(num1, num2) {
//   num1 > num2
//     ? console.log(`${num1} is the biggest number`)
//     : console.log(`${num2} is the biggest number`);
// }

// // 2. function expression
// const smallestNum = function (num1, num2) {
//   num1 < num2
//     ? console.log(`${num1} is the smallest number`)
//     : console.log(`${num2} is the smallest number`);
// };

// // 3. arrow function
// const smallest = (num1, num2) => {
//   num1 < num2
//     ? console.log(`${num1} is the smallest number`)
//     : console.log(`${num2} is the smallest number`);

//   console.log("hello world");
// };

// smallest(5, 10);
// smallest(5, 1);
// smallest(500, 130);
// smallest(50, 10);
