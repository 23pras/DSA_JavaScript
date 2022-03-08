function factorial(n) {
    if(n==0 || n==1){
       return 1
    }
    return n*factorial(n-1)
}

// NOTE: Please do not modify this function
function main() {
   let n = parseInt(readLine())
   const result = factorial(n);
   console.log(result)
    
}