function errorHandler(x) {
  try{
        let res = getX(x);

        return res
  }
  
  catch(err){
    return err
  }

}

function getX(x) {
    if(x == 5) {
        return new Error("Error Occured");
    }
    return x;
}

module.exports = errorHandler;

console.log(errorHandler(5));