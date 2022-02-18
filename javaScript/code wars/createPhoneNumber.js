function createPhoneNumber(numbers) {
  let strNum = "";
  for (const num of numbers) strNum += num;
  return `(${strNum.slice(0, 3)}) ${strNum.slice(3, 6)}-${strNum.slice(
    6,
    strNum.length
  )}`;
}

// test
// demo result: (123) 456-7890
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
