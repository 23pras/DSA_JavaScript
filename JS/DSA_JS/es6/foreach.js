function convertArray(arr) {
     const arr2 = [];
     arr.forEach(function (ele,i){
        arr2.push(ele*(i+1));
        
     }

     );
     return arr2
}

arr = [1, 2, 2, 3, 1, 2];
console.log(convertArray(arr));

// output [1, 4, 6, 12, 5, 12]