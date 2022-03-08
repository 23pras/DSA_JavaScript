// one way to declare matrix or 2-D array 

function spiralMatrixII(n) {
    let mat = [];
    for(let i=0; i<=n ; i++){
        let temp = new Array(n);
        mat.push(temp);
    }