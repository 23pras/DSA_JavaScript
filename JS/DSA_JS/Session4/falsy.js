function bouncer(arr) {
  var newArr=[];
  for(let i=0; i<arr.length;i++){
    if(arr[i]==false||arr[i]===null||arr[i]===0||arr[i]===""||arr[i]===undefined|| isNaN(arr[i])){
       //act as pass
    }
    else{
        newArr.push(arr[i]);
        //console.log(newArr);
    }
  }
  console.log(newArr);
  // return newArr;

}
bouncer(["a", "b", "c"]);
//bouncer([false, null, 0, NaN, undefined, ""]);
//bouncer([null, NaN, 1, 2, undefined]);
//bouncer([7, "ate", "", false, 9]) ;


// function bouncer(arr) {
//   var newArr=[];
//   for(let i=0; i<arr.length;i++){
//     if(arr[i]){
//        //act as pass
//        newArr.push(arr[i]);
//     }
    
//   }
//   //console.log(newArr);
//    return newArr;

// }
// bouncer(["a", "b", "c"]);
// //bouncer([7, "ate", "", false, 9]);