function palindrome(str) {
  str = str.toLowerCase();
  //let arr = [...str];
  let arr =str.split("");
  console.log(arr);
  let j = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) // between 0 and 9
    {
      j++;
      continue;
    }
    else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) // between a and z
    {
      j++;
      continue;
    }
    else {
      arr.splice(j, 1);
    }
  }
  str = arr.join("");
  // console.log(str); //prints string without special characters
  for (let i = 0; i < str.length; i++) {
    if (str[i] != str[str.length - 1 - i]) {
      // console.log(str[i]); //prints the element that does not match
      //return false;
    }
  }
  //return true;
}


palindrome("1 eye for 0_0 of 1 eye.");