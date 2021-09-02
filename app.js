'use strict';
/*
// Mapの連想配列を使った場合
const memo = new Map();
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);
function trib(n) {
  if (memo.has(n)) {
    return memo.get(n);
  }
  const value = trib(n - 1) + trib(n - 2) + trib(n - 3);
  memo.set(n, value);
  return value;
}
*/

// オブジェクトの連想配列を使った場合
/*
const memo = {
  0: 0,
  1: 0,
  2: 1
};
function trib(n) {
  if (n in memo) {
    return memo[n];
  }
  const value = trib(n - 1) + trib(n - 2) + trib(n - 3);
  memo[n] = value;
  return value;
}
*/

// 配列を使った場合
const memo = [];

function trib(n) {
  if (n == 0) {
    memo.push(0);
    return 0;
  } else if (n == 1) {
    memo.push(0);
    return 0;
  } else if (n == 2) {
    memo.push(1);
    return 1;
  }

  const value = memo[n - 1] + memo[n - 2] + memo[n - 3];
  memo[n] = value;
  return value;
}

const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(trib(i));
}
