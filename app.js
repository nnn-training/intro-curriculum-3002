'use strict';
const length = process.argv[2] || 0;
const memo = new Map();
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);
function trib(n) {
    if (memo.has(n) === false) {
        // 未計算のため、計算してmemoにセットする
        memo.set(n, memo.get(n-1) + memo.get(n-2) + memo.get(n-3));
    }
    return memo.get(n);

}

for (let i = 0; i <= length; i++) {
    console.log(trib(i));
}