function countVowels(word) {
  let count = 0;
  word = word.toLowerCase();
  for(let i=0; i<word.length; i++){
    if(word[i]=='a'|| word[i]=='e'|| word[i]=='i'|| word[i]=='o'|| word[i]=='u'){
      count+=1;
    }
  }
  return count
}

console.log(countVowels('language'));