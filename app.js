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
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(trib(i));
}

const assert = require('assert');
assert.deepEqual(trib(4), 2, `trib(4)の計算結果は2になるはずですが、${trib(4)}でした`);
assert.deepEqual(trib(7), 13, `trib(7)の計算結果は13になるはずですが、${trib(7)}でした`);
