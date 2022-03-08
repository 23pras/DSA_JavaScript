// function patternPrintingI(n) {
//   let string = "";
//   for(let i=1; i<=n; i++){
//     for(let j=1; j<=i; j++){
//       string += "* ";
//     }
//     string += "\n";
//   }
//   return string
// }


console.log(patternPrintingI(4));

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
//console.log(string);


function patternPrintingI(n) {
    let string = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            string += "* ";
    }
       string += "\n";
  }
  return string
}

//console.log(patternPrintingI(15));