function randomizeArray (array) {
  var pointer = Math.floor(Math.random()*array.length);
  const randomizedArray = [];
  for (let i = 0; i <= array.length ; i++) {
    console.log(array[pointer]);
    randomizedArray.push(...array.splice(pointer,1));
    pointer = Math.floor(Math.random()*array.length);
  }
  return randomizedArray;
  
}
export default randomizeArray;