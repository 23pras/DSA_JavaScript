function findElementQuery(n, arr, x) {
    let ans= -1;
    let l=0, r=n-1;

    while(l<=r){
        let mid = Math.floor((l+r)/2);

        if(arr[mid]==x){
            ans=mid;
            r=mid-1;
        }
        else if(arr[mid]>x){
            r=mid-1;
        }
        else if(arr[mid]<x){
            l=mid+1;
        }
    }
    return ans
}


///// --------------- My Solution ------------//////////////

///////// TC : O(n)

function findEle(n,arr,x){

  for(let i=0; i<n; i++){
    if(arr[i]==x){
      return i
    }
  }
  return -1
}

let arr = [1,2,9,9,10,10,10,2,2];

let n = arr.length;

let x = 233;

console.log(findEle(n,arr,x));