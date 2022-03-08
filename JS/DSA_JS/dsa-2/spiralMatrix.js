function spiralMatrixII(n){
    let mat = [];
    for(let i=0; i<=n ; i++){
        let temp = new Array(n);
        mat.push(temp);
    }

    let dir=1 ; 
    let trow=0 , leftcol=0, rightcol=n-1, buttrow=n-1;
    let count=1;

    while(count<=n*n){

            if(dir==1){
                for(let i=leftcol ; i<=rightcol ; i++){
                    mat[trow][i]=count ;
                    count++ ; 
                }
                trow++ ; 
                dir=2  ;
            }

            if(dir==2){
                for(let i=trow ; i<=buttrow ; i++){
                    mat[i][rightcol]=count ;
                    count++ ; 
                }
                rightcol-- ; 
                dir=3  ;
            }

            if(dir==3){
                for(let i=rightcol ; i>=leftcol ; i--){
                    mat[buttrow][i]=count ;
                    count++ ; 
                }
                buttrow-- ; 
                dir=4  ;
            }

            if(dir==4){
                for(let i=buttrow ; i>=trow ; i--){
                    mat[i][leftcol]=count ;
                    count++ ; 
                }
                leftcol++ ; 
                dir=1  ;
            }

        //return mat
    }

return mat
}

let n = 10;
console.log(spiralMatrixII(n));