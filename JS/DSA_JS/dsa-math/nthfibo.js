//// ---- brute force approach ---///

function nthFibo(n){
  let a=0; b=1;
  let sum, i;
  if(i==0 || i==1){
    return i
  }
  for(i=2; i<=n; i++){
    sum = a+b;
    a = b;
    b = sum;
  }
  return b;
}

let n = 7;
console.log(nthFibo(n));

///////--------- With recursion ----------///////
function nthFibonacciNumber(n) {
    if(n==0 || n==1){
        return n
    }

    return nthFibonacciNumber(n-1)+ nthFibonacciNumber(n-2)
}
 //console.log(nthFibonacciNumber(6));