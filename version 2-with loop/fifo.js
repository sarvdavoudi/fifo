const mainArray = [1, 2, 3, 4];

// اضافه کردن به ابتدای آرایه
function unshift(arr, ...items) {
  return [...items, ...arr];
}

//پاک کردن از آخر آرایه
function pop(arr) {
  let temp = [];
  for (let i = 0; i < arr.length - 1; i++) {
    temp[i] = arr[i];
  }

  return temp;
}

let arrayAfterPop = pop(mainArray);
let arrayAfterUnShift = unshift(mainArray, 0);
console.log(`array after pop value is :${arrayAfterPop}`);
console.log(`array after unshift value is :${arrayAfterUnShift}`);
