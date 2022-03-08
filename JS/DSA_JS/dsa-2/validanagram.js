function validAnagram(s, t) { 
        let len1=s?.length || 0;  // optional chaining 
        let len2=t?.length || 0;
        if(len1==0 && len2==0){  
            return true
        }
    
        if(len1==0 || len2==0){
            return false
        }
    
        let freq1  = {};  
        for(let i=0 ; i<s.length ; i++){
            if(freq1[s[i]]){
                freq1[s[i]]++ ; 
            }
            else{
                freq1[s[i]]=1;
            }
        }
      //console.log(freq1);
    
        let freq2  = {};
        for(let i=0 ; i<t.length ; i++){
            if(freq2[t[i]]){
                freq2[t[i]]++ ; 
            }
            else{
                freq2[t[i]]=1;
            }
        }
      //console.log(freq2);
    let res = 0;
    for(let [keys1, value1] of Object.entries(freq1)){
       // console.log(keys1,value1);
        if(value1===freq2[keys1]){
             
             res+=1;
        }
        else{
            res =  0;
        }
       
    }
    
    if(res==Object.keys(freq1).length && res==Object.keys(freq2).length){
        return true
    }
    else{
        return false
    }

}
