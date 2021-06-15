'use strict';
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

const fact = [0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768, 10609, 19513, 35890];
const assert = require('assert');
for (let i = 0; i < fact.length; i++){
    assert.strictEqual(
        trib(i), 
        fact[i],
        `この数列の第\i項は${fact[i]}ですが、実際は${trib(i)}でした`);
}
console.log('第20項までの簡易テストを通過しました');

const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(trib(i));
}
