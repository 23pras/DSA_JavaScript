function reverseString(str){
var arr1 = str.split("");
var arr2=[];
//console.log(arr1);
for(var i=arr1.length -1 ; i>=0 ;i--){
  //var arr2=[];
  //console.log(arr1[i]);
  arr2.push(arr1[i]);
  //console.log(arr2);
  // arr2.join("");
  //   console.log(arr2);
}
let string=""
string= arr2.join("");
console.log(string);
// return arr2
}

reverseString("hello")