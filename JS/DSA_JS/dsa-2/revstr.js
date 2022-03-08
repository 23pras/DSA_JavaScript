function revstr(s){
  let rev = "";
  for(let i=s.length-1 ; i>=0 ; i--){
      rev += s[i];
  }
  return rev;
}

function reverseWordsInAString(s) {
    let p = revstr(s);
    let start = 0;
    let ans = "";
    for(let i=0 ; i<=p.length ; i++){
        if(p[i]==" "){
           let str = p.substring(start, i);
           ans += revstr(str) + " ";
           start=i+1;
        }

        else if(i==p.length-1){
           let str = p.substring(start, i+1);
           ans += revstr(str) ;
        }
    }
    return ans
}

