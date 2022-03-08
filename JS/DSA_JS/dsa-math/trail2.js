function trailingZeros(n) {
  let c= 5;
  let count = 0;

   if(n<0){
       return -1;
   }
   
   while(n>=c){
       
       count+= Math.floor(n/c);
       c*=5;
    }
  
    return count
}


//////////////////////////

function trailingZeros(n) {
  let c= 5;
  let count = BigInt(0);
   
//    if(n<0){
//        return - 1
//    }

//    if(n>=0 && n<c){
//        return count;
//    }
   
   while(n>=c){
       
       count+= BigInt(Math.floor(n/c));
       
       c*=5;
       
    }
  
    return count.toString();
}
