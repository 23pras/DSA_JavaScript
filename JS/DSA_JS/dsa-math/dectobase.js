function decimalToBaseConversion(n, b) {
    let baseNum = [] ;
  
       if(b>n){
           if(n<=9){return n}
           else if(n===10){return 'A'}
           else if(n===11){return 'B'}
           else if(n===12){return 'C'}
           else if(n===13){return 'D'}
           else if(n===14){return 'E'}
           else if(n===15){return 'F'}

       }
       
      while(n>=b){
        let rem = n%b;
        if(rem<=9){ baseNum.unshift(n%b)}
        else if(rem===10){baseNum.unshift('A')}
        else if(rem===11){baseNum.unshift('B')}
        else if(rem===11){baseNum.unshift('C')}
        else if(rem===13){baseNum.unshift('D')}
        else if(rem===14){baseNum.unshift('E')}
        else if(rem===15){baseNum.unshift('F')}
        n = Math.floor(n/b);
      }
   baseNum.unshift(n);
   return baseNum.join("");
}

///////////   2nd approach 

function convertBase(n, b){
let baseNum = 0;
let p = 1;
let digit = 0;

while(n>0){
  digit = n%b;
  n = Math.floor(n/b);
  baseNum += digit*p;
  p *= 10;
}
return baseNum
}

let n = 17;
let b = 16;
console.log(convertBase(n,b));