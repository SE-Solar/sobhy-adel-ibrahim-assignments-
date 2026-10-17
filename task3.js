const nums = [1, 2, 2, 3, 4, 4, 5];

const unique1 = nums.filter((n, i) => nums.indexOf(n) === i);
console.log(unique1);

const unique2 = [...new Set(nums)];
console.log(unique2);
