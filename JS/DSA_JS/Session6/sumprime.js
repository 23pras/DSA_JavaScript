function sumPrimes(num) {
  let sum=0;
  for(let i=2; i<=num; i++){
    if(isPrime(i)){
    sum=sum + i;
  }
  }
  console.log(sum);
  return sum;
}

//sumPrimes(977);

 

function isPrime(num){
  if (num === 1 || num===0) {
      return false;
      }

  for(let i=2; i<Math.floor(Math.sqrt(num)); i++){
    if(num%i===0){
        return false;
    }
    //return true
  }
  return true;
}

console.log(isPrime(10));