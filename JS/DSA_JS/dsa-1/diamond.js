  // Upside pyramid
function pyramid(n){

let string = "";
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = n; j > i; j--) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2*i-1; k++) {
    string += "*";
  }
  string += "\n";
}
// downside pyramid
for (let i = 1; i <= n - 1; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  // printing star
  for (let k = (n - i) * 2 - 1; k > 0; k--) {
    string += "*";
  }
  string += "\n";
}
return string
} 
let n = 5; 
//console.log(pyramid(n));   



/////////////////////////////////////////////

function patternPrintingII(n) {
  let arr=[]
  for(let i=0;i<n;i++){
      let str=""
    for(let j=0;j<n-i-1;j++){
         str+=" "
      }
    for(let k=0;k<=i;k++){
        str+="* "       
        }
        arr.push(str)
}
  for(let i=n;i<2*n-1;i++){
      let str=""
    for(let j=n;j<=i;j++){
         str+=" "
      }
    for(let k=0;k<2*n-1-i;k++){
        str+="* "       
        }
        arr.push(str)
}
return arr;
}

function main() {
    let n = parseInt(readLine());
    let arr = patternPrintingII(n);
    arr.forEach(line => console.log(line, "\n"))
}
console.log(main(5));