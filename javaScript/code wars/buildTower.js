function towerBuilder(nFloors) {
  const mainArr = [];
  let n1 = 1,
    n2 = nFloors - 1;
  for (let i = 1; i <= nFloors; i++) {
    mainArr.push(`${" ".repeat(n2)}${"*".repeat(n1)}${" ".repeat(n2)}`);
    n1 += 2;
    n2 -= 1;
  }
  return mainArr;
}

console.log(towerBuilder(3));

// fibonacci sequence with recursion(don't use it though):
// function fibonacci(n) {
//     if(n==0 || n == 1)
//         return n;
//     return fibonacci(n-1) + fibonacci(n-2);
// }

// for (let i = 0; i < 5; i++) console.log(fibonacci(i));
