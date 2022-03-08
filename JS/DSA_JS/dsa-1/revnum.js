function reverseNum(n) {
    var rem, revNum=0;
    while(n>0){
          rem = n%10;
          revNum = (revNum*10) + rem;
          n = Math.floor(n/10) ;
        }
    return revNum;    
}


// NOTE: Please do not modify this function
function main() {
    let n = 1234;
    //let n = parseInt(readLine(), 10);
    let result = reverseNum(n);
    console.log(result);
}
console.log(main());



//////////////////////////////////////////////

