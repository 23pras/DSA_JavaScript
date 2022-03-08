function bigIntegerAddition(str1, str2) {
    let n = str1.length;
    let k1 = n-1;
    let m = str2.length;
    let k2 = m-1;
    let k = Math.min(n,m);
    let c=0;
    let str3 = "";

    //str3 =str3.split("");
    // str1 = str1.split("");
    // str2 = str2.split("");
    
     while(k>0){
        c+= str1[k1] + str2[k2];
        str3 += Math.floor(c%10);
        c = Math.floor(c/10);
        k-- ; k1-- ; k2-- ;
   }

    while(k1>=0){
        c+= str1[k1] ;
        str3 += Math.floor(c%10);
        c = Math.floor(c/10);
        k1-- ;
   }

     while(k2>=0){
        c+= str2[k2] ;
        str3 += Math.floor(c%10);
        c = Math.floor(c/10);
        k2-- ;
   }

   if(c>0){
       str3 = str3.split("");
       str3 = str3.unshift("c");
       str3 = str3.toString();

   }

   return str3
}

let str1 = "10";
let str2 = "24";

console.log(bigIntegerAddition(str1, str2));