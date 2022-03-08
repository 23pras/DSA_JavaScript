function pairElement(str) {
  var arr = str.split("");
  //console.log(arr);
  var arr2 =[];
  for(let i=0; i<arr.length; i++){
   var exp = arr[i];
   switch(exp){
      case 'A':
      arr2.push(["A","T"]);
      break;

      case 'T':
      arr2.push(["T","A"]);
      break;

      case 'C':
      arr2.push(["C","G"]);
      break;

      case 'G':
      arr2.push(["G","C"]);
      break;
    
   }
  }
  console.log(arr2);
  //return arr2;
}
pairElement("ATCGA");
pairElement("TTGAG");
pairElement("CTCTA");