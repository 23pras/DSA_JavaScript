function diffArray(arr1, arr2) {
  const newArr = [];
  for(let i=0; i<arr1.length; i++){
      if(!arr2.includes(arr1[i])){
          newArr.push(arr1[i]);
      }
    }

  for(let i=0; i<arr2.length; i++){
      if(!arr1.includes(arr2[i])){
          newArr.push(arr2[i]);
      }
    }

    // newArr.push(arr2[j]);
    // console.log(newArr);
  return newArr;
}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],

["diorite", "andesite", "grass", "dirt", "dead shrub"]));




// for(let i =0; i<arr1.length; i++){
//   for(let j =0; j<arr2.length; j++){
//     if(arr1[i]!=arr2[j]){
//        newArr.push(arr1[i], arr2[j]);
//        newArr.push(arr2[j]);
//     }
//   }
// }