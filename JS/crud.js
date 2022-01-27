let todoDB = []

function addTodo(item, priority){
   if(priority==='high'){             // == ?
     todoDB.unshift(item);
     return todoDB;
   }
   return todoDB.push(item);
}

function clearTodo(index) {
 return todoDB[index]=null;    // = or == ?
}

function updateTodo(index, newItem){
  return todoDB[index]=newItem;
}

function getTodo(index) {
  if(index){
    return todoDB[index];
  }
  return todoDB;
}


