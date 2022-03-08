function largestOfFour(arr) {
  //var i=0;
  //var j=0;
  var newArr=[]
  for(let i=0; i<arr.length;i++){
    for(let j=0; j<arr[i].length;j++){
       if(arr[i][j]>arr[i][j+1]){
          [arr[i],arr[j+1] = arr[i],arr[j]];
          //console.log(arr[i][j]);
          arr[i][j];
       }
      else{
        arr[i][j+1];
        }
  }

  //newArr.push(arr)
  }
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);