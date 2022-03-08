function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
   for(let i=0; i<collection.length; i++){
    if(source.hasOwnProperty(collection)){
        console.log(source);
    }
  }

  // Only change code above this line
  //return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));