function diagonalSum(n, matrix) {
    let sum=0; 
    for(let i=0; i<n; i++){
      //console.log(matrix[i]);
        for(let j=0; j<n; j++){
          //console.log(matrix[j]);
            if(i==j){
                sum = sum  + matrix[i][j];
                //console.log(sum);
            }
        }
    }
  return sum  
}