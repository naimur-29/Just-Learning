function duplicateEncode(word) {
  word = word.toLowerCase();
  let newWord = "";

  for (const letter of word) {
    let tmpSymbol = "(";
    let count = 0;
    for (const tmpLetter of word) {
      if (letter === tmpLetter) count++;
      if (count >= 2) tmpSymbol = ")";
    }
    newWord += tmpSymbol;
  }
  return newWord;
}

// test
console.log(duplicateEncode("din")); //,"(((");
console.log(duplicateEncode("recede")); //,"()()()");
console.log(duplicateEncode("Success")); //,")())())","should ignore case");
console.log(duplicateEncode("(( @")); //,"))((");
