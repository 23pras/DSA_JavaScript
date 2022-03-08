const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

//console.log(map1);


let numbers = [1, 4, 9]
let roots = numbers.map(function(num) {
    return Math.sqrt(num)
})

//console.log(numbers);
//console.log(roots); // here we are using map function to iterate over every element of array(numbers).

let kvArray = [{key: 1, value: 10},
               {key: 2, value: 20},
               {key: 3, value: 30}];

let reformattedArray = kvArray.map(obj => {
   let rObj = {}
   rObj[obj.key] = obj.value
   //console.log(rObj);
   //return rObj
})

let map = Array.prototype.map
let a = map.call('Hello World', function(x) {
  return x.charCodeAt(0)
})

console.log(a);

