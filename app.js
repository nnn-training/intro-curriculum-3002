'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 0);
memo.set(3, 0);
memo.set(4, 0);
memo.set(5, 1);
function hexa(n) {
  if (memo.has(n)) {
    return memo.get(n);
  }
  const value = hexa(n - 1) + hexa(n - 2)+ hexa(n - 3)
  + hexa(n - 4) + hexa(n - 5) + hexa(n - 6);
  memo.set(n, value);
  return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(hexa(i));
}
