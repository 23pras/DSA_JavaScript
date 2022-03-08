function titleCase(str) {
  str=str.toLowerCase();
  str=str.split(" ");
  var f="";
  var upstr="";
  let newarr=[];
  
 for(var i=0; i<str.length;i++){
   f=str[i].charAt(0).toUpperCase();
   upstr=f + str[i].substring(1);
   newarr.push(upstr);
   }

let final = newarr.join(" ");
console.log(final);
return final;
}
titleCase("I'm a Little tea pot");