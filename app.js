'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 0);
memo.set(3, 1);
function tetra(n) {
  if (memo.has(n)) {
    return memo.get(n);
  }
  const value = tetra(n - 1) + tetra(n - 2)+ tetra(n - 3)+ tetra(n - 4);
  memo.set(n, value);
  return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(tetra(i));
}
