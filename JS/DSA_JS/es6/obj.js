function personDetail(a, b) {
     let personData = {
           "firstName": a, "lastName": b, "fullName": a + " " + b
}
   return personData
}

console.log(personDetail("John", "Smith"))