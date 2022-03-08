// function largeFactorial(n) {
//     if(n==0 || n==1){
//        return 1
//     }
    
//     let num = n*largeFactorial(n-1);
//     let str = num.toString();
//     //str = str.split("");
//     let arr = [];
//     arr.push(str);
//     //console.log(arr);
//     return arr
//     //return n*largeFactorial(n-1)
// }

// NOTE: Please do not modify this function
// function main() {
//     let n = parseInt(readLine(), 10);
//     let result = largeFactorial(n);
//     for (const i of result) {
//         print(i);
//     }
// }

//console.log(largeFactorial(5));



/////////////////////////////////////////////////

// function largeFactorial(n) {
//     let arr = [];
//     let c = 0;
//     for(let i=n; i>1; i--){
//        i = i*(i-1);
//        c = Math.floor(i/10);
//        i = i%10;
//        arr.push(i);
//       console.log(arr)
//     }

    // if(c>0){
    //     arr.unshift(c);
    // }

    //console.log(arr);
    //return arr 
// }

//let n = 10;
//console.log(largeFactorial(n))


// var factorial = function(n){
//   n=BigInt(n);
//   return (n==0n||n==1n)?1n:factorial(n-1n)*n;}
// //can be print this way
// console.log(factorial(n));

///////////////////////////////////////

// function largeFactorial(n){
//    let arr = new Array(500);
//    arr[0] = 1;

//    let carry = 0;
//    for(let i=2 ; i<=n ; i++){
//        for(let j=0; j<=arr.length-1 ; j++){
//            //if(carry==0){
//              carry += arr[j]*i;
//              arr[j] = carry%10;
//              arr.push(arr[j]);
//              carry  = Math.floor(carry/10);
//            //}

//        }
//    }
   
//    while(carry>0){
//        arr.unshift(carry%10);
//        carry  = Math.floor(carry/10);
//    }

//    return arr
// }

// let n=100;
// console.log(largeFactorial(n));


//////////////////////////////////////////////////////////////


function factorial(arr,x){

    let c=0;
    let n=arr.length;
    for(let i=n-1;i>=0;i--){
      arr[i]= arr[i]*x+c;
      c= Math.floor(arr[i]/10);
      arr[i]=arr[i]%10;

   }
   while(c!=0){
       arr.unshift(c%10);
       c=Math.floor(c/10);
   }

}
// TODO: Implement this method
function largeFactorial(n) {
    let arr=[1];
    for(let i=2;i<=n;i++){
      factorial(arr,i);
    }
return arr;
}
let n = 100;
console.log(largeFactorial(n))