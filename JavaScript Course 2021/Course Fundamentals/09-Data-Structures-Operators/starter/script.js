'use strict';

// Data needed for a later exercise
let flights =
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

// optional chaining(?.):
const days = ['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri'];

for (const day of days) {
  console.log(
    `On ${day} we open at ${restaurant.openingHours[day]?.open ?? `closed`}`
  );
}

//test of arr
const randomArr = new Array();
const subArr = new Array();
const n = Math.trunc(Math.random() * 5) + 1;

for (let i = 0; i < n; i++) subArr.push('0');
for (let i = 0; i < n; i++) randomArr.push(subArr);
console.log(randomArr);

// challenge 2
/* Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
GOOD LUCK � */

// task 1
for (const player of game.scored) console.log(player);

// task 2
let sum = 0;
const odds = Object.values(game.odds);
for (const odd of odds) sum += odd;
console.log(`The average is ${(sum / odds.length).toFixed(2)}`);

// task 3
for (const [name, odd] of Object.entries(game.odds)) {
  const teamStr = name === 'x' ? 'draw' : `victory for ${game[name]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// task 4
const scorers = new Object();
for (const item of game.scored) {
  scorers[item] = 1;
}
console.log(scorers);

// getting rid of duplicates from an array using a set:
// or making an array from a set and vise versa:
let arrOfDuplicates = [
  'paper',
  'paper',
  'paper',
  'paper',
  'pizza',
  'pizza',
  'pizza',
];

// const tmpSet = new Set(arrOfDuplicates);
// arrOfDuplicates = new Array(...tmpSet);
// or simply:
arrOfDuplicates = [...new Set(arrOfDuplicates)];
console.log(arrOfDuplicates);

// maps
const okNowIsThisMap = new Map();
okNowIsThisMap.set(1, 'nothing');
okNowIsThisMap.set(2, 'hello world');
okNowIsThisMap.set('array', arrOfDuplicates);

// as using set method returns the map itself we can also do this:
okNowIsThisMap
  .set(1, 'nothing')
  .set(2, 'hello world')
  .set('array', arrOfDuplicates);
console.log(okNowIsThisMap);
console.log(okNowIsThisMap.get('array').length);

// another way to declare a map:
const loop = new Map([
  ['hello', 'world'],
  ['world', 'hello'],
]);

console.log(loop.get(loop.get(loop.get('hello'))));

let key = '';
key = loop.get('world');
for (let i = 0; i < 10; i++) {
  console.log(key);
  key = loop.get(key);
}

// challenge 3

/* Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).

Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL */

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

// task 1
const eventsArray = [...new Set(gameEvents.values())];
console.log(eventsArray);

// task 2
gameEvents.delete(64);
console.log(gameEvents);

// task 3
console.log(
  `An event happened, on average, every ${Math.round(
    90 / gameEvents.size
  )} minutes`
);

// task 4
for (const [time, event] of gameEvents.entries()) {
  time <= 45
    ? console.log(`[First Half] ${time}: ${event}`)
    : console.log(`[Last Half] ${time}: ${event}`);
}

// string methods:
const sentenceToArray = sentence => {
  sentence = sentence.trim();
  const array = [];
  while (sentence.includes(' ')) {
    array.unshift(sentence.slice(sentence.lastIndexOf(' ') + 1));
    sentence = sentence.slice(0, sentence.lastIndexOf(' '));
  }
  array.unshift(sentence);
  return array;
};

const firstLetterUpper = string => {
  string = sentenceToArray(string);
  let newName = '';
  string.forEach(
    element =>
      (newName +=
        element[0].toUpperCase() + element.slice(1).toLowerCase() + ' ')
  );
  return newName.slice(0, -1);
};

const capitalizeName = normalName => {
  const capitalArray = [];
  normalName
    .trim()
    .split(' ')
    .forEach(word =>
      capitalArray.push(word.replace(word[0], word[0].toUpperCase()))
    );
  return capitalArray.join(' ');
};

const normalSentence = 'this is a tittle format';
console.log(firstLetterUpper(normalSentence));
console.log(capitalizeName(normalSentence));

// there's actually a replaceALl method:
console.log(
  'me is me and me is not actually me'.replaceAll(
    'me',
    firstLetterUpper('john')
  )
);

const underscoreToCammel = sentence => {
  const tmpArray = [];
  sentence
    .trim()
    .split('_')
    .forEach((word, index) =>
      index !== 0
        ? tmpArray.push(word.replace(word[0], word[0].toUpperCase()))
        : tmpArray.push(word)
    );
  return tmpArray.join('');
};

console.log(underscoreToCammel('underscore_case to cammel_case'));

// challenge 5?
// flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const airSeparator = string => {
//   const tmpArray = [];
//   string.split('+').forEach(subString => {
//     const tmpArray2 = subString.split(';');
//     tmpArray.push(`${tmpArray2[0].slice(1).split('_')}`);
//   });
//   return tmpArray.join('');
// };

// console.log(airSeparator(flights));
