let unshiftArray = [1, 2, 3, 4, 5];
let popAray = [1, 2, 3, 4, 5];
let variable;

//به اول آرایه اضافه میکند
function unshift(variable) {
  let temp = unshiftArray.unshift(variable);
  return temp;
}

//از آخر آرایه حذف میکند
function pop() {
  let temp = popAray.pop();
  return temp;
}

unshift(0);
pop();

console.log(unshiftArray);
console.log(popAray);
