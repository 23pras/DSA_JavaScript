function revstr(str){
  var revstr="";
  for(var i=str.length-1; i>=0; i--){
    revstr+=str[i];
  }
console.log(revstr);  
return revstr

}

revstr("hello world")