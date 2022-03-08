function myReplace(str, before, after) {
  let arr=str.split(" "); 
  for(let i=0; i<arr.length; i++){
     //console.log(arr[i]);
    if(arr[i]===before && arr[i][0]===arr[i].charAt(0).toUpperCase()){
      arr[i]=after.charAt(0).toUpperCase() + after.substring(1);
      //arr.push(arr[i]);
      //console.log(arr);
    }
    else if(arr[i]===before && arr[i].charAt(0)===arr[i].charAt(0).toLowerCase()){
      arr[i]=after.charAt(0).toLowerCase() + after.substring(1);
      //arr.push(arr[i]);
    }
  }
  //arr.push(arr[i]);

  let finalstr= arr.join(" ");
  console.log(finalstr);
  //return finalstr;
}
 
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

//output ("A quick brown fox leaped over the lazy dog ")

//Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

