function numberOfDivisorsAndSum(n) {
    let count= 0;
    let sum = 0;
    //let arr
    for(let i = 1; i<=n; i++){
        if(n%i==0){
           count++;
           sum+=i;
        }
    }
    //let obj = {count, sum};
    let obj = [];
    obj.push(count, sum);
    return obj
}

console.log(numberOfDivisorsAndSum(4));