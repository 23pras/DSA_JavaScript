function validAnagram(s, t) {
    //let res;
    let freq1  = {};   
    for(let i=0 ; i<=s.length-1 ; i++){
        if(freq1[s[i]]==1){
            freq1[s[i]]++ ; 
        }
        else{
            freq1[s[i]]=1;
        }
    }

    let freq2  = {};
    for(let i=0 ; i<=t.length-1 ; i++){
        if(freq2[t[i]]==1){
            freq2[t[i]]++ ; 
        }
        else{
            freq2[t[i]]=1;
        }
    }


function compareMaps(freq1, freq2) {
    var testVal;
    if (freq1.size !== freq2.size) {
        return false;
    }
    for (var [key, val] of freq1) {
        testVal = freq2.get(key);
      
        if (JSON.stringify(testVal) !== JSON.stringify(val) || (testVal === undefined && !freq2.has(key))) {
            return false;
        }
    }
    return true;
}
let res = compareMaps(freq1, freq2);
return res;

  
}

let s="anagram";
let t = "anaccam";
console.log(validAnagram(s, t));


