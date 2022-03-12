function disemvowel(str) {
  const vowels = "AaEeIiOoUu";
  const isVowel = (letter) => {
    for (const vowel of vowels)
      if (letter === vowel) {
        return true;
      }
  };

  let newStr = "";
  for (const letter of str) if (!isVowel(letter)) newStr += letter;
  return newStr;
}

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}

// test
console.log(
  disemvowel("This website is for losers LOL!")
  //   "Ths wbst s fr lsrs LL!"
);
console.log(
  disemvowel("No offense but,\nYour writing is among the worst I've ever read")
  //   "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
);
console.log(
  disemvowel("What are you, a communist?")
  //   "Wht r y,  cmmnst?"
);
