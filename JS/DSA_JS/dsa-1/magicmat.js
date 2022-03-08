function checkMagicSquare(n, matrix) {
  let sumd1=0, sumd2=0;
   for(let i=0; i<n; i++){
  
    sumd1 = sumd1 + matrix[i][i];
    sumd2 = sumd2 + matrix[i][n-1-i];
              
   }

   if(sumd1!=sumd2){
     return false
   }

  
  for(let i=0; i<n; i++){
      //console.log(matrix[i]);
      //sumr+= matrix[i][j];
        let sumr=0, sumc=0 ; 
        for(let j=0; j<n; j++){
          //console.log(matrix[i][j]);
          sumr+= matrix[i][j];
          sumc+= matrix[j][i];
        }
         if (sumr != sumc || sumc != sumd1){
            return false
         }
            
    }
  return true
}

a = [[ 4,9,2 ],
     [ 3,5,7 ],
     [ 8,1,6 ]];

console.log(checkMagicSquare(3,a));

// 4 9 2

// 3 5 7

// 8 1 6

// function checkMagicSquare(n, matrix) {
// var sumd1 = 0,sumd2 =0;
//     for (var i = 0; i < n; i++)
//     {
//         // (i, i) is the diagonal from top-left -> bottom-right
//         // (i, N - i - 1) is the diagonal from top-right -> bottom-left
//         sumd1 = sumd1 + matrix[i][i];
//         sumd2 = sumd2 + matrix[i][n-1-i];
//     }
//     // if the two diagonal sums are unequal then it is not a magic square
//     if(sumd1!=sumd2)
//         return false;
 
     
//     for (var i = 0; i < n; i++) {
//         var colSum = 0;
//         var rowSum = 0;   
//         for (var j = 0; j < n; j++)
//         {
//             rowSum += matrix[i][j];
//             colSum += matrix[j][i];
//         }
//         if (rowSum != colSum || colSum != sumd1)
//             return false;
//     }
//     return true;
//     }

    