///// My solution pending 
function maxSumTriplet(n, nums) {
    
   let s=0;
   let e=n-1;
   let val = nums[0]
   while(i<(n-2)){
       let t1 = 
       if(nums[s]+nums[e]>target_sum){
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

////// Optimised 

function maxSumTriplet(n, nums) {
    let ans = 0;
 
    for (let i = 1; i < n - 1; ++i) {
        let max1 = 0, max2 = 0;
 
        // find maximum value(less than arr[i])
        // from 0 to i-1
        for (let j = 0; j < i; ++j)
            if (nums[j] < nums[i])
                max1 = Math.max(max1, nums[j]);
 
        // find maximum value(greater than arr[i])
        // from i+1 to n-1
        for (let j = i + 1; j < n; ++j)
            if (nums[j] > nums[i])
                max2 = Math.max(max2, nums[j]);
 
        // store maximum answer
        if(max1 && max2)
            ans=Math.max(ans,max1+nums[i]+max2);
    }
 
    return ans;
}

