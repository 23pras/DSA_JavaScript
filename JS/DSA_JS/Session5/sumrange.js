function sumAll(arr) {
  let max = Math.max(arr[0],arr[1]);
  let min = Math.min(arr[0],arr[1]);
  let sum= 0;
  for(let i=min; i<=max; i++){
     sum =sum + i ;
     console.log(sum);
}
//console.log(sum);
return sum;
}

sumAll([1, 4]);


