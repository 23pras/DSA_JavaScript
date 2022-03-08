

function rightRotateByOne(A){
   let temp = A[A.length-1];
   for(let i=A.length-1; i>0; i--){
   A[i] = A[i-1];
  }
  A[0] = temp;
  //console.log(A);
  return A
}
// let  A = [1, 2, 3, 4, 5, 6, 7];
// console.log(rightRotateByOne(A));

function rightRotateKtimes(A,k){
  if(k>A.length || k<0){
    return 
  }
  for(i=0; i<k; i++){
    A = rightRotateByOne(A);
  }
  return A
}

let  A = [1, 2, 3, 4, 5, 6, 7];
let k=3
  
console.log(rightRotateKtimes(A,k));



/////////////////////////////////////////

function cyclicRotation(n, arr, k) {
    let temp=0;
    for(let i=0;i<k;i++){
        temp=arr[n-1]
          for(let j=n-2;j>=0;j--){
              arr[j+1]=arr[j]
      }
      arr[0]=temp;
    } return arr;
}

