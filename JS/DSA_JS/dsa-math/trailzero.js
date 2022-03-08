function trailingZeros(n) {
   function factorial(n) {
    if(n==0 || n==1){
       return 1
    }
    return n*factorial(n-1)
}
  let res = factorial(n);
  console.log(res)
  //const arrayOfDigits = Array.from(String(res), Number);
  // res = res.toString();
  // res = res.split("");
  //console.log(arrayOfDigits);  
  let count = 0;
  
  while(res>0){
    if(res%10==0){
      count++ ;
      res=Math.floor(res/10);
    }
    else{
      break;
    }
  }
  // arrayOfDigits.forEach(function checkCount(ele){
  //    console.log(ele);
  //     //let count = 0;
  //      if(ele === 0){
  //        count++
  //      }
  //   //return count 
  // });
 return count
  //return finalCount
}
let n = 10 ;
console.log(trailingZeros(n))


/////// 25 factorial 

//factorial of 25 = 155112100 43330 985984 000 000



//////////////////////////////////////////



function trailingZeros(n) {
   function factorial(n) {
    if(n==0 || n==1){
       return 1
    }
    return n*factorial(n-1)    
}
  let res = factorial(n);
  const arrayOfDigits = Array.from(String(res), Number);
//   res = res.toString();
//   res = res.split("");
  //console.log(res);  
  let count = 0;

  arrayOfDigits.forEach(function checkCount(ele, i){
      //let count = 0;
       if(ele === 0){
         count++
       }
       else{
         count = 0;
       }
    //return count 
  });
 return count
  //return finalCount
}


