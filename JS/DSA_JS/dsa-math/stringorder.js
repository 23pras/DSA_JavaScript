 function stringPermutation(n, s, arr) {
    let newOrder =[];
    s=s.split("");
    for(let i=0; i<n; i++){
       newOrder[arr[i]-1] = s[i];
       //arr.toString();
    }
    return newOrder.join("")
 }


function main() {
    let n = parseInt(readLine())
    let s = readLine()
    let arr = readIntArr()
    const result = stringPermutation(n, s, arr)
    console.log(result)
}

let n = 4;
let s ="abcd";                    // output   dacb .  
let arr = [2,4,3,1];

console.log(stringPermutation(n,s,arr));
