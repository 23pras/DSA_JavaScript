function func1(func2){ // its naming conv
  func2();
}


function printFun(arg2){
  console.log('Hello From Function B!!!');
}

func1(printFun);

// function add(val1, val2){
//   console.log(val1 + val2);
// }

// add(2, 3);