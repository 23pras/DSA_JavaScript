function numberOfPrimesInARange(l, r) {
    let count = 0;
    for(let i=l ; i<=r ; i++){
        if(isPrime(i)){
            count++ ;
        }
    }
    return count
}

function isPrime(n){
    if(n==0 || n==1){
        return false
    }
  
   else{
      for(let i=2 ; i<=n ; i++){
        if(n%i==0){
            return false
        }
        return true
    }
     //return true
   }
}

console.log(numberOfPrimesInARange(1,5));