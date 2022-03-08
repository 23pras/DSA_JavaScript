function bigIntegerAddition(str1, str2) {
    // let num1 = parseInt(str1);
    // let num2 = parseInt(str2);
    // let sum =  num1 + num2 ;
    // return sum 
   if (str1.length > str2.length)
    {
        let t = str1;
        str1 = str2;
        str2 = t;
    }
     
    // Take an empty String for storing result
    let str = "";
     
    // Calculate length of both String
    let n1 = str1.length, n2 = str2.length;
     
    // Reverse both of Strings
    str1 = str1.split("").reverse().join("");
    str2 = str2.split("").reverse().join("");
     
    let carry = 0;
    for(let i = 0; i < n1; i++)
    {
         
        // Do school mathematics, compute sum of
        // current digits and carry
        let sum = ((str1[i].charCodeAt(0) -
                        '0'.charCodeAt(0)) +
                   (str2[i].charCodeAt(0) -
                        '0'.charCodeAt(0)) + carry);
        str += String.fromCharCode(sum % 10 +
                        '0'.charCodeAt(0));
     
        // Calculate carry for next step
        carry = Math.floor(sum / 10);
    }
     
    // Add remaining digits of larger number
    for(let i = n1; i < n2; i++)
    {
        let sum = ((str2[i].charCodeAt(0) -
                        '0'.charCodeAt(0)) + carry);
        str += String.fromCharCode(sum % 10 +
                        '0'.charCodeAt(0));
        carry = Math.floor(sum / 10);
    }
     
    // Add remaining carry
    if (carry > 0)
        str += String.fromCharCode(carry +
                       '0'.charCodeAt(0));
     
    // reverse resultant String
    str = str.split("").reverse().join("");
     
    return str;

}