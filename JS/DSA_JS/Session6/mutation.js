function mutation(arr) {
  var arr0= arr[0].toLowerCase();
  var arr1= arr[1].toLowerCase();
  for(let i=0; i<arr1.length; i++){
    //console.log(arr1[i]);
    let flag = false;
    for(let j=0; j<arr0.length; j++){
      //console.log(arr0[j]);
      if(arr0[j]==arr1[i]){
          //return true;
          flag= true;
      }
      
      //return false;
    }
    if(flag==false){
        return false;
      }
      
  }
return true;
}

mutation(["hello", "hey"]);