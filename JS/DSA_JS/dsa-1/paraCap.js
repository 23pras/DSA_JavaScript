//function capitalise(paragraph) {
//    var CapitalizeWords = paragraph[0].toUpperCase();  
//     for (var i = 1; i <= paragraph.length - 1; i++) {  
//         let currentCharacter,  
//             previousCharacter = paragraph[i - 1];  
//         if (previousCharacter == ' ') {  
//             currentCharacter = paragraph[i].toUpperCase();  
//         } else {  
//             currentCharacter = paragraph[i];  
//         }  
//         CapitalizeWords = CapitalizeWords + currentCharacter;  
//     }  
//     return CapitalizeWords;  
  
// }

console.log(capitalise("the quick Brown fox jumps over The lazy dog."));
// 2nd method 
function capitalise(paragraph) {
  let res="";
  for(let i=0; i<paragraph.length; i++){
    if(i==0){
    res+= paragraph[i].toUpperCase();
    }
    else if(paragraph[i-1]==' ' && paragraph[i]!=' '){
      res+= paragraph[i].toUpperCase();
    }
    else{
      res+= paragraph[i];
    }

  }
  return res
}


