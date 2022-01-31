// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// challenge 1
// done: first we need to iterate through all the element of the array
// we need to find how to remove a line break from a console.log()
// and then we will create a template for the required string and save and add it in a new string and return it...

const temps = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let return_str = "";

  for (let i = 0; i < arr.length; i++) {
    i !== arr.length - 1
      ? (return_str += `... ${arr[i]}c in ${i + 1} days `)
      : (return_str += `... ${arr[i]}c in ${i + 1} days ...`);
  }
  return return_str;
}

console.log(printForecast(temps));
