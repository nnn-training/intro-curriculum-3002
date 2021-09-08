'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 0);
memo.set(3, 0);
memo.set(4, 1);
function penta(n) {
  if (memo.has(n)) {
    return memo.get(n);
  }
  const value = penta(n - 1) + penta(n - 2)+ penta(n - 3)+ penta(n - 4)+ penta(n - 5);
  memo.set(n, value);
  return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(penta(i));
}
