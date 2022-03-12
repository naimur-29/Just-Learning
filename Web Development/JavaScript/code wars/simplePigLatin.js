function pigIt(str) {
  const strArr = str.split(" ");
  let returnStr = "";
  for (const word of strArr)
    word.toLowerCase() !== word.toUpperCase()
      ? (returnStr += `${word.slice(1)}${word[0]}ay `)
      : (returnStr += `${word} `);
  return returnStr.trim();
}

console.log(pigIt("Pig latin is cool"));
