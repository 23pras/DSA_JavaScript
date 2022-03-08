function filterByCity(arr) {
    
     let output = arr.filter(ele => {

          let lowercase = ele.city.toLowerCase();
          return lowercase=="bangalore" || lowercase=="hyderabad"
          }

          )
     return output
}


arr= [

{name: "John", city: "delhi" },

{name: "Peter", city: "bangalore" },

{name: "Mike", city: "Bangalore" },

{name: "Rachel", city: "Hyderabad" }

]

console.log(filterByCity(arr));