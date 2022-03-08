function firstMissingPositive(n, arr) {
    let i=0;
    while(i<n){
        if(arr[i]>=1 && arr[i]<=n && (arr[i]-1)!= i){
            let pos = arr[i]-1 ; 
            // let temp = arr[i];
            // arr[i] = arr[pos];
            // arr[pos] = temp;
           [arr[pos], arr[i]] = [arr[i], arr[pos]];
        }

        else{
            i++ ;
        }

    }

    for(let i=0; i<n; i++){
        if(arr[i]!=i+1){
            return i+1
        }
    }

    return i+1
}
