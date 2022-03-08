function findLength(arr) {
    arr = arr.map((str) => {
        if(str==undefined || str==null)
            return 0
        else
            return str.length 
    })
    return arr;
}

arr = ["hello","world", 0, undefined];
console.log(findLength(arr));