function getNumberOfDays(date) {

     let dateArray = date.split("/");

     dd = parseInt(dateArray[0]);
     mm = parseInt(dateArray[1]);
     yyyy = parseInt(dateArray[2]);

     let dateObject = new Date(yyyy, mm-1, dd); // coz js have y-m-d order 

     let todaysdate = new Date();

     let miliSecDiff = todaysdate.getTime() - dateObject.getTime();

     let daysdiff = miliSecDiff/(1000*60*60*24);

     return Math.floor(daysdiff);
}

let date = "10/02/2022" ;
console.log(getNumberOfDays(date));