'use strict';
const memo = new Map();
memo.set(0, 0);
//1 番目は 0
memo.set(1, 0);
//2 番目は 1
memo.set(2, 1);
function trib(n) {
  if (memo.has(n)) {
    return memo.get(n);
  }
  // 1 つ前と 2 つ前と 3 つ前の値を足したもの
  const value = trib(n - 1) + trib(n - 2) + trib(n - 3);
  memo.set(n, value);
  return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(trib(i));
}
