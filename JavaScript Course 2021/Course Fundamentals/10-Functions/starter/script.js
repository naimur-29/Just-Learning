'use strict';

// higher order functions
const greet = greeting => name => {
  return `${greeting} ${name}`;
};
console.log(greet('Hello')('World'));
