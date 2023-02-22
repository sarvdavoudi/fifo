const mainArray = [1, 2, 3, 4];

//delete last item from array
function pop(arr) {
  let temp = [];
  let deleted_item;

  for (let i = 0; i < arr.length - 1; i++) {
    temp[i] = arr[i];
  }

  //The last item of the array is separated and stored in a separate variable
  for (let j = arr.length; j >= arr.length - 1; j--) {
    deleted_item = arr[j];
  }
  return [temp, deleted_item];
}

// Add to the beginning of the array //unshift method simulated
function unshift(arr, item) {
  let temp = [];
  temp[0] = item;
  for (let i = 0; i <= arr.length; i++) {
    temp[i + 1] = arr[i];
  }
  return temp;
}

let [arrayAfterPop, deletedvalue] = pop(mainArray);
let arrayAfterUnShift = unshift(mainArray, 0);
console.log(`array after pop value is :${[arrayAfterPop]} and deleted item is ${[deletedvalue]}`);
console.log(`array after unshift value is :${arrayAfterUnShift}`);
