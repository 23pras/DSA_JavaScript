// function gradingSystem(score){
//     let x = ""; 
//     switch(score){
//         case score<0 || score>100 :
//           x = "invalid";
//           break

//         case score>0 && score<25:
//           x = "F";
//           break

//         case score>=25 && score<45:
//           x = "E";
//           break

//         case score>=45 && score<50:
//           x = "D";
//           break

//         case score>=50 && score<60:
//           x = "C";
//           break
        
//         case score>=60 && score<80:
//           x = "B";
//           break

//         case score>=80 && score<=100 :
//           x = "A";
//           break
          
//     }
//     console.log(x);
//     return x
// }

//console.log(gradingSystem(835));


///--- if else ///

function gradingSystem(score){
  if(score<0 || score>100){
    return "Invalid"
  }
  else if(score>0 && score<25){
    return "F"
  }
  else if(score>=25 && score<45){
    return "E"
  }
  else if(score>=45 && score<50){
    return "D"
  }

  else if(score>=50 && score<60){
    return "C"
  }

  else if(score>=60 && score<80){
    return "B"
  }

  else if(score>=80 && score<=100){
    return "A"
  }

}
console.log(gradingSystem(83.5));