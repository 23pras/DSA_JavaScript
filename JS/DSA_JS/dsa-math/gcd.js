function gcd(a,b){
  if(a%b==0){
    return b
  }
  return gcd(b,a%b)
}

//console.log(gcd(4,16));


///// if gcd of two number is 1 then they are co-prime 

function numofPrime(n){
  let count = 0;
  for(let i=1; i<=n ;i++){
    if(gcd(n,i)==1){
      count++
    }
  }
  return count
}

console.log(numofPrime(9))