function randomizeArray (array) {
  var pointer = Math.floor(Math.random()*array.length);
  const randomizedArray = [];
  for (let i = 0; i <= array.length ; i++) {
    randomizedArray.push(createCategories(...array.splice(pointer,1)));
    pointer = Math.floor(Math.random()*array.length);
  }
  return randomizedArray;
}

function createCategories (pun) {
  pun.category = pun.category.split(',');
  return pun
}
export default randomizeArray;