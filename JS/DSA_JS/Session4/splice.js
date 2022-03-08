function frankenSplice(arr1, arr2, n) {
   let copy2=arr2.slice();
   //arr2 = copy2.splice(n,0,arr1);
   for(let i=0;i<arr1.length;i++){
       copy2.splice(n,0,arr1[i]);
       n++;

   }
   return copy2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);