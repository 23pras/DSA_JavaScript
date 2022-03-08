//////     brute force 
//       O(n*n)  TC

function twoSumInSortedArray(n, arr, target_sum) {
    let bigarr = [];
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            if(arr[i]+arr[j]==target_sum){
                bigarr.push([arr[i],arr[j]]);
                // console.log(bigarr);
                return true
            }   
        }
    }
    //console.log(bigarr);
    //return bigarr
}

let n=5;
let arr = [2,4,5,8,9 ];
let target_sum = 7;

console.log(twoSumInSortedArray(n,arr,target_sum));

//////////  tw0-pointers optimized solution 

/// O(n) TC

function twoSumInSortedArray(n, arr, target_sum) {
   let s=0;
   let e=n-1;
   //let val = arr[0]
   while(s<e){
       if(arr[s]+arr[e]>target_sum){
           e--
       }
      else if(arr[s]+arr[e] < target_sum){
          s++
      }
      else{
          return true
      }
   }

}
