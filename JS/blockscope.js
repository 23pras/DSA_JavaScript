// block scope example
// let loc = 'test2';

function test2() {         
  var loc = 'test2';       //here loc have function scope
}

// if(true){
//   let loc = 'test'; // local scope
// }

test2();

console.log(loc);
