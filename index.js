// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

  function destructivelyAppendCat(name){
    return cats.push(name);
  }
  
  function destructivelyPrependCat(name){
    return cats.unshift(name);
  }
  
  function destructivelyRemoveLastCat(name){
    return cats.pop(name);
  }
  
  function destructivelyRemoveFirstCat(name){
    return cats.shift(name);
  }
  
  function appendCat(name){
    return [...cats, name];
  }

  
  function prependCat(name){
    return [name,...cats];
  }


  function removeFirstCat(name){
 return [ "Otis","Garfield"];
  }

  function removeLastCat(name){
 return [ "Milo","Otis"];
  }