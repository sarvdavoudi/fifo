const mainArray = [1, 2, 3, 4, 5];

//delete last item from array
function popFromLastOfArray(inputArray) {
  let tempArray = [];
  let deleted_item;

  for (let i = 0; i < inputArray.length - 1; i++) {
    tempArray[i] = inputArray[i];
  }

  //The last item of the array is separated and stored in a separate variable
  deleted_item = inputArray[inputArray.length - 1];

  return [tempArray, deleted_item];
}

// Add to the beginning of the array //unshift method simulated
function pushInFistOfArray(inputArray, item) {
  let tempArray = [];
  tempArray[0] = item;
  for (let i = 0; i < inputArray.length; i++) {
    tempArray[i + 1] = inputArray[i];
  }
  return tempArray;
}

let [arrayAfterPop, deletedvalue] = popFromLastOfArray(mainArray);
let arrayAfterpushInfirst = pushInFistOfArray(mainArray, 0);
console.log(`after pop value from last of array :${[arrayAfterPop]} and deleted item is ${[deletedvalue]}`);
console.log(`after push value in first of array :${arrayAfterpushInfirst}`);
