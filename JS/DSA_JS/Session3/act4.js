let empty = [];

empty[0] = 1 ;
empty[1] = "Hello" 
empty[2] = null 
empty[5] = { name: "Vivek"}

//console.log(empty);

//empty[5].name = "Prashant";
console.log(empty);

function insertTodo(item, index) {
 empty[index]=item;
 return empty;
}

//console.log(empty);

// let update = insertTodo("three",3);
// console.log(update);


function removeTodo(index) {
  empty.splice(index,1);
  return empty;
}

let latest = removeTodo(2);
console.log(latest);