let mainArrayForPop = [1, 2, 3, 4, 5];
let mainArrayForUnshift = [1, 2, 3, 4, 5];

//به اول آرایه اضافه میکند
function unshift(variable) {
  let temp = mainArrayForUnshift.unshift(variable);
  return temp;
}

//از آخر آرایه حذف میکند
function pop() {
  let temp = mainArrayForPop.pop();
  return temp;
}
let showAfterUnshift = unshift(0);
let showAfterpop = pop();

console.log(`array after pop is: ${mainArrayForPop} and deleted item is :${showAfterpop}`);
console.log(`array after unshift is ${mainArrayForUnshift}`);
