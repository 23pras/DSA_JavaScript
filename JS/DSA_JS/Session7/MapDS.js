const myMap = new Map()
myMap.set(NaN, 'not a number'); //here nan as a key

//console.log(myMap.get(NaN));
// "not a number"

const otherNaN = Number('foo'); // foo is nan & here as a value
myMap.set('2ndNaN', otherNaN);
//console.log(myMap.get(otherNaN));
// "not a number"
console.log(myMap);