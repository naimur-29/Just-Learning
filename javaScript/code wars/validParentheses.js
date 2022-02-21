// my solution:
function validParentheses(parens) {
  if (parens.startsWith(")") || parens.endsWith("(")) return false;
  if (parens.length === 1) return false;
  if ([...parens].filter((x) => x === "(").length !== parens.length / 2)
    return false;
  parens = [...parens];
  for (const paren of parens)
    if (paren === "(") parens.splice(parens.indexOf(")"), 1);
  if (parens.includes(")")) return false;
  else return true;
}

// best practice:
function validParentheses(parens) {
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == "(") n++;
    if (parens[i] == ")") n--;
    if (n < 0) return false;
  }

  return n == 0;
}
console.log(validParentheses("(())()"));
