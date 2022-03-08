let modify = (array) => {
    for(let x in array){
        if(isPrime(array[x]))
            array[x]++;
        else
            array[x]*=2;
    }
    return array;
}


function isPrime(n) {

if(n == 0 || n == 1) {

    return false;

}

for(let i = 2 ; i*i <= n ; i++) {

    if(n%i == 0) {

        return false;

    }

}

return true;

}

arr = [1, 2, 3, 4, 5];

console.log(modify(arr));

// op [2, 3, 4, 8, 6]