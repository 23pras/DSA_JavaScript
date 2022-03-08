function palindrome(str) {
 str = str.replace(/[^a-zA-Z0-9]/g, "");
 //console.log(str);
  str = str.toLowerCase();
  // console.log(str);
  let i=0 , j=str.length-1;
  while(i<=j)
  {
      if(str[i]!==str[j])
      {
          return false;
      }
      i++;
      j--;
  }
 return true;
}
console.log(palindrome("1 eye for 0_0 of 1 eye."));
//palindrome("eye");



