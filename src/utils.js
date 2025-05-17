function randomizeArray (array) {
  var pointer = Math.floor(Math.random()*array.length);
  //return array;
  const newArray = [];
  while (array.length > 0) {
    console.log(array[pointer]);
    newArray.push(array.splice(pointer,1));
    pointer = Math.floor(Math.random()*array.length);
  }
  return newArray;
  
}
export default randomizeArray;