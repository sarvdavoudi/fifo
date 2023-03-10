const mainArray = [1, 2, 3, 4];

//پاک کردن از آخر آرایه
function pop(arr) {
  let temp = [];
  let deleted_item;

  for (let i = 0; i < arr.length - 1; i++) {
    temp[i] = arr[i];
  }

  // آخرین عنصر از آرایه جدا شده و در متغیر جداگانه نگهداری میشود
  for (let j = arr.length; j >= arr.length - 1; j--) {
    deleted_item = arr[j];
  }
  return [temp, deleted_item];
}

// اضافه کردن به ابتدای آرایه
function unshift(arr, ...items) {
  return [...items, ...arr];
}

let [arrayAfterPop, deletedvalue] = pop(mainArray);
let arrayAfterUnShift = unshift(mainArray, 0);
console.log(`array after pop value is :${[arrayAfterPop]} and deleted value is ${[deletedvalue]}`);
console.log(`array after unshift value is :${arrayAfterUnShift}`);
