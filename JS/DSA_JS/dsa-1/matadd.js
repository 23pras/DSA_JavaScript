function additionOfMatrix(matrix1, matrix2) {
   let matrix = [];
    for( let i = 0; i <matrix1.length; i++){
         matrix[i] = [];
        for( let j =0; j < matrix1[i].length; j++){

            matrix[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }
    return matrix
}



// my solution 


function additionOfMatrix(matrix1, matrix2) {
    let finalMatrix = [ [], [], [], []] ;

    for( let i = 0; i <matrix1.length; i++){
        for( let j =0; j < matrix1[i].length; j++){
            finalMatrix[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }
    //return finalMatrix
}


///////////////////////////////////////////

function additionOfMatrix(matrix1, matrix2) {

    for( let i = 0; i <matrix1.length; i++){
        for( let j =0; j < matrix1[i].length; j++){
            matrix1[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }
    return matrix1 
    
}