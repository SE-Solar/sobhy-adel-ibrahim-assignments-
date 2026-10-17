function getFirst(arr) {
  return arr[0];
}

function getLast(arr) {
  return arr[arr.length - 1];
}

// بتغير في array الأصلية
function removeAt(arr, i) {
  arr.splice(i, 1);
  return arr;
}

function insertAt(arr, i, value) {
  arr.splice(i, 0, value);
  return arr;
}

// من غير ما تغير الأصلية
function removeAtCopy(arr, i) {
  return arr.filter((item, index) => index !== i);
}

function insertAtCopy(arr, i, value) {
  let copy = arr.slice();
  copy.splice(i, 0, value);
  return copy;
}

let nums = [10, 20, 30, 40, 50];

console.log(getFirst(nums));
console.log(getLast(nums));

console.log(removeAtCopy(nums, 1));
console.log(insertAtCopy(nums, 2, 99));
console.log(nums);

removeAt(nums, 1);
console.log(nums);

insertAt(nums, 2, 99);
console.log(nums);
