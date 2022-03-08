const varMap = new Map([
  ['a', 1],
  [4, 5],
  [true, 1],
]);
//varMap.delete("a");
// console.log(varMap.get(4));
// console.log(varMap.size);
// console.log(varMap.has('a'));

varMap.set('false', "this is false value");
console.log(varMap);