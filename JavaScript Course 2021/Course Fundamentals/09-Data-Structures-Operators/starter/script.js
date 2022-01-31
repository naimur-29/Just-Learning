'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  names: 'Classico Italiano',
  locations: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// // object destructing
// const { names, locations, openingHours } = restaurant;
// console.log(names, locations, openingHours);

// // with variable
// const {
//   names: restaurantName,
//   locations: locationOfRestaurants,
//   mainMenu: menus,
// } = restaurant;
// console.log(restaurantName, locationOfRestaurants, menus);
// console.log(menus[2]);

// // default value
// const { diningMenus = [], categories: foodCats = [] } = restaurant;
// console.log(diningMenus, foodCats);

// // array destructing
// const arr = [
//   [1, 2],
//   [3, 4],
//   [`hello`, `world`],
// ];
// const [[a1, a2], [b1, b2], [c1, c2]] = arr;
// console.log(a1, a2, b1, b2, c1, c2);
// console.log(c1.concat(' ' + c2));

// let [, , [first, second]] = arr;
// console.log(first, second);
// [first, second] = [second, first];
// console.log(first, second);

// // default value
// const [p = 1, q = 1, r = 1] = [5, 6];
// console.log(p, q, r);

// // array sort numbers manual
// const arrOfNum = [23, 34, 5, 12, 33, 66, 33, 4];
// const tempArr = [...arrOfNum];
// const lenOfArr = arrOfNum.length;

// for (let i = 0; i < lenOfArr; i++) {
//   let min = Math.min(...tempArr);
//   tempArr.splice(tempArr.indexOf(min), 1);

//   [arrOfNum[arrOfNum.indexOf(min)], arrOfNum[i]] = [
//     arrOfNum[i],
//     arrOfNum[arrOfNum.indexOf(min)],
//   ];

//   console.log(arrOfNum);
// }

// challenge 1 for this session
/* Coding Challenge #1
We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
GOOD LUCK � */

// data
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// task 1-------------------------------------------------
/* 1. Create one player array for each team (variables 'players1' and
'players2') */

const {
  players: [players1, players2],
} = game;
// console.log(players1, players2);

// task 2-------------------------------------------------
/* 2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players */

// const [gk, ...fieldPlayers] = players1;
// or
const {
  players: [[gk, ...fieldPlayers]],
} = game;
// console.log(gk, fieldPlayers);

// task 3--------------------------------------------------
/* 3. Create an array 'allPlayers' containing all players of both teams (22
players) */

const allPlayers = [...players1, ...players2];
// or
// const tmpPlayers = [...game.players];
// const allPlayers = [...tmpPlayers[0], ...tmpPlayers[1]];
// console.log(allPlayers);

//task 4--------------------------------------------------
/* 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic' */

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// task 5--------------------------------------------------
/* 5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2') */

const {
  odds: { team1, x: draw, team2 },
} = game;
// console.log(team1, draw, team2);

// task 6-------------------------------------------------
/* 6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in) */

const printGoals = (...players) => {
  for (let i = 0; i < players.length; i++)
    console.log(players[i], players.length);
};
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

//task 7---------------------------------------------------
/* 7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
GOOD LUCK � */

// // '??' is nullish something operator...
// team1 < team2 && console.log(`Team 1 is more likely to win...`);
// team1 < team2 || console.log(`Team 2 is more likely to win...`);

// a new power
// for of loop to iterate through the items of an array directly
for (const player of players1) console.log(players1.indexOf(player), player);

// arr.entries() function:
console.log(players1);
for (const [index, player] of players1.entries())
  console.log(`${index + 1}. ${player}`);
