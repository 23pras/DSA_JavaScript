// Constraints
// 1 <= T <= 10

// 1 <= length(S) <= 100000

// Sample Input 1
// 3

// nnaamm

// hello

// Aab

// Sample Output 1
// True

// False

// False

// Explanation 1
// nnaamm is a permutation of namman, which is a palindrome

// hello is not a permutation of any palindrome

// Aab is not a permutation of any palindrome


function isPermutationPalidrome(s){
    let freq  = {};
    for(let i=0 ; i<s.length ; i++){
        if(freq[s[i]]==1){
            freq[s[i]]++ ; 
        }
        else{
            freq[s[i]]=1;
        }
    }
    
    let oddFreq = 0;
    for( let [key, values] of Object.entries(freq)){
      console.log(key,values);
        if(values%2!=0){
            oddFreq++ ; 
        }
    }

    // if(s.length%2!=0){
    //     return oddFreq==1;
    // }
    // return oddFreq==0;
}

let s = "anagram";
console.log(isPermutationPalidrome(s));
