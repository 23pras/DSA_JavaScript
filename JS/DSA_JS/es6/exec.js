function isAlphabet(X) {


let n = X.charCodeAt(0);
let strStartsWithALetter = (n>=65 && n < 91) || ( n>=97 && n<123);

	
if (strStartsWithALetter) {

	return "Yes";
}

	throw "Not Alphabet";
 
} ;

console.log(isAlphabet('abs'));
module.exports = isAlphabet;