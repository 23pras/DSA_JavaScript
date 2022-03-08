const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
      var copy = arr.slice();
      //console.log(copy);
      return copy.sort(function(a,b){
            return a-b
      });
      console.log(a,b);

  // Only change code above this line
}

nonMutatingSort(globalArray);