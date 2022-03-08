// function with switch cases

function getGreekString(val){
    switch(val){
    case 'a':
    case 'A':
    case 1: 
      return 'alpha';
      break;
    case 'b': 
    case 'B': 
    case 2:
      return 'beta';
      break;
    default: 
      return null;
  }
}

console.log(getGreekString('B'));