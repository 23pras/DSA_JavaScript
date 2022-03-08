function isValidPayload(files = []){
  // restricted files
  const restrictedFileExt = ["exe", "zip"];

  // second func
  function getCheckResult(){
    //return true / false;
    for(let i = 0; i< files.length; i++){
      // console.log(files[i].fileName);
      let temp = files[i].split('.'); // ['test', 'zip']
      if(restrictedFileExt.includes(temp[1])){
        console.log(files[i] + ' is a restricted file');
      } else {
        console.log(files[i] + ' is not a restricted file');
      }
    }

  }

  return getCheckResult(); 
};

let userFiles = ['test.zip', 'music.mp3'];


isValidPayload(userFiles);