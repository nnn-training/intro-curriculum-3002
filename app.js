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
// 出力例: 0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768, 
const assert = require('assert');
assert.equal(trib(5), 4, `トリボナッチ数列の6番目は4ですが、実際は${trib(5) }でした`);
assert.equal(trib(10), 81, `トリボナッチ数列の11番目は81ですが、実際は${trib(10) }でした`);
assert.equal(trib(17), 5768, `トリボナッチ数列の18番目は5,768ですが、実際は${trib(17) }でした`);
console.log('すべてのテストを通過しました');
