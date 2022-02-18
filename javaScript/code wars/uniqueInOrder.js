const uniqueInOrder = function (iterable) {
  const arr = [];
  for (let i = 0; i < iterable.length; i++) {
    if (i === 0) {
      arr.push(iterable[i]);
    } else if (iterable[i] !== iterable[i - 1]) arr.push(iterable[i]);
  }
  return arr;
};

console.log(uniqueInOrder("ABBCcAD"));
