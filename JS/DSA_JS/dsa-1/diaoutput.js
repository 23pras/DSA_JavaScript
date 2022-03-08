    *
   ***
  *****
 *******
*********
 ******* 

    *
   ***
  *****
 *******
*********
 *******  ***** 

    *
   ***
  *****
 *******
*********
 *******  *****   *** 

    *
   ***
  *****
 *******
*********
 *******  *****   ***    * 



////////////////////////

* *  

* * * * *  

* * * * * * * * *  

* * * * * * * * * * * * * *  

* * * * * * * * * * * * * * * * * * * *  

* * * * * * * * * * * * * * * * * * * *  * * * * * * * * *  

* * * * * * * * * * * * * * * * * * * *  * * * * * * * * *   * * * * * * * * *  

* * * * * * * * * * * * * * * * * * * *  * * * * * * * * *   * * * * * * * * *    * * * * * * * * *  

* * * * * * * * * * * * * * * * * * * *  * * * * * * * * *   * * * * * * * * *    * * * * * * * * *     * * * * * * * * *  


/////

function patternPrintingII(n) {
        let arr = [];
        
        for (let i =0 ; i < n; i++) {
        // printing spaces
        let string = "";
        for (let j =0 ; j<n-i-1; j++) {
            string += " ";
        }
        // printing star
        for (let k = 0; k <=i; k++) {
            string += "* ";
        }
           arr.push(string)
        }
        // downside pyramid
        for (let i = n ; i < 2*n-1; i++) {
        // printing spaces
        let string = "";
        for (let j =n ; j <= i; j++) {
            string += " ";
        }
        // printing star
        for (let k = 0 ; k<2*n-1 ; k++) {
            string += "* ";
        }
        arr.push(string)
        }
        return arr
}
