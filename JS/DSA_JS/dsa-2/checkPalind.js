

function checkPalin(str){
  let s=0;
  let e = str.length - 1;
  while(s<e){
  if(str[s]!=str[e]){
    return "Not Palindrome"
  }

  else{
    return "Palindrome"
  }
  s++ ;
  e-- ; 
}
}

let str = "racecaree";
console.log(checkPalin(str));

