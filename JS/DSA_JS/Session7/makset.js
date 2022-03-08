function getUnique(arr){
let set = new Set();
arr.map(item => set.add(item));

return set;
//console.log(set);
}

const ids = ["6awwby61l", "4pg04jthz", "6awwby61l", "4ncg1rbrw", "4ncg1rbrw"];

console.log(getUnique(ids));