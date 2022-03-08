// show element except without w 

function removeListedValues(arr, without) {
  let newArr=[];
  for(let i=0; i<arr.length; i++){
    let isMatch = false;

    for(let j=0; j<without.length; j++){
       if(arr[i]==without[j]){
          isMatch = true;
         }
    }

    if(isMatch==false){
      newArr.push(arr[i])
    }
  }
  return newArr  
}


a =  [1, 2, 2, 3, 1, 2];
w = [2, 3];

console.log(removeListedValues(a,w)); 

// 2nd approach with built-in function 

// function removeListedValues(arr, without) {
//    let result = [];
//     for(var i = 0; i< arr.length ;i++) {
//         if(!without.includes(arr[i])){
//            // console.log(arr[i])
//             result.push(arr[i]);
//         }
    
//     }
//     //return result;
// }