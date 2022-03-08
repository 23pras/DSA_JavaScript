const mySet = new Set([1, "b", "b"]);
mySet.add("address");
const o = {a: 1, b: 2} // add a object in Set
mySet.add(o)
//console.log(mySet.Keys);
//console.log(mySet.entries);
console.log(mySet);
for (let item of mySet.keys()){
   //console.log(item);
}
 

for (let [key, value] of mySet.entries()) {
   //console.log(key, value);
}

