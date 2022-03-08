function mergeSortedArray(m, nums1, n, nums2) {
    let finalArr = [];
    let i=0;
    let j=0;
    while(i<m && j<n){
        if(nums1[i]>nums2[j]){
            finalArr.push(nums2[j]);
            j++;
        }
        else{
            finalArr.push(nums1[i]);
            i++
        }
    }

    while(i<m){
      finalArr.push(nums1[i]);
      i++
    }

    while(j<n){
      finalArr.push(nums2[j]);
      j++;
    }


return finalArr
}
