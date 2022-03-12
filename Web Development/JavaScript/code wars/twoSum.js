function twoSum(numbers, target) {
  for (const number of numbers) {
    for (const number1 of numbers) {
      if (number + number1 === target)
        return [numbers.indexOf(number), numbers.lastIndexOf(number1)];
    }
  }
}

console.log(twoSum([2, 2, 3], 4));
