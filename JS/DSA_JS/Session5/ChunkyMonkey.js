function chunkArrayInGroups(arr, size) {
  var newArr=[];
  for(let i=0; i<arr.length ; i+=size){
    newArr.push(arr.slice(i, i + size));
    console.log(newArr);
  }
  return newArr;
}

//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
chunkArrayInGroups(["a", "b", "c", "d"], 2);

// should return [["a", "b"], ["c", "d"]] 