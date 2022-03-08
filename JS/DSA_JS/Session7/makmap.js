function toMap(obj){
   const keys = Object.keys(obj);
   const map = new Map();
   for(let i = 0; i < keys.length; i++){
      //inserting new key value pair inside map
      map.set(keys[i], obj[keys[i]]);
   };
   return map;

}
const charCountInHello = {
  h: 1,
  e: 1,
  l: 2,
  o: 1,
};
console.log(toMap(charCountInHello));


