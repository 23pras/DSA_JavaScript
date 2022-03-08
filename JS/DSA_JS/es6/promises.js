// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('foo');
//   }, 300);
// });

// myPromise
//   .then(handleResolvedA, handleRejectedA)
//   .then(handleResolvedB, handleRejectedB)
//   .then(handleResolvedC, handleRejectedC);


// function getLastNames(firstName, people){
//      const myPromise = new Promise((resolve, reject) =>{
     

//      });
//     function resolve(){

//     }
//      myPromise.then(resolve, reject);
// }

////////////////////////////////////////////

//solution 2

// function getLastNames(firstName, people){
//      let myPromise = new Promise((resolve, reject) => {
//          let firstNames = people.filter(value =>firstName===value.firstName);
//          if(firstNames.length==0){
//               reject("Invalid")
//          }
//          else{
//               let lastNameArr = [];
//               firstNames.forEach(value =>{lastNameArr.push(value.lastName)}
//            );
//            lastNameArr.sort();
//            resolve(lastNameArr);
//          }
//      })

  
   
//    return myPromise

// }

// firstName = 'David'

// people = [

//         {

//             firstName: 'David',

//             lastName: 'Dobrick'

//         },

//         {

//             firstName: 'David',

//             lastName: 'Beckham'

//         },

//         {

//             firstName: 'Chris',

//             lastName: 'Lee'

//         },

//         {

//             firstName: 'James',

//             lastName: 'Bond'

//         },

//     ]

 

// getLastNames("David", people).then(resp=>console.log(resp)).catch(err=>console.log(err))
// module.exports = getLastNames;



/////////////////////////////

// solution 3 

