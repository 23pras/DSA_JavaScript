function getIndexToIns(arr, num) {
  var arr = arr.sort(function(a, b){return a - b});
 
  for(let i=0; i<arr.length; i++){
    
    if(arr[i]>=num){
      //console.log(i);
      return i;
    }
    
  }
  //console.log(arr.length);
  return arr.length;
}

getIndexToIns([2, 5, 10], 15);