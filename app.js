'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);
mainTask();
selfCheck()
function mainTask(){
  const length = 40;
  for (let i = 0; i <= length; i++) {
    console.log(`trib(${i}) = ${trib(i)}`);
  }
}
function trib(n) {
  if (memo.has(n) === true) {
    return memo.get(n);
  }
  const value = trib(n - 1) + trib(n - 2) + trib(n - 3);
  memo.set(n, value);
  return value;
}
function selfCheck(){
  const answerTable = [
    [0,0], [1,0], [2,1], [3,1], [4,2], [5,4], [6,7], [7,13], [10,81], [40,7046319384]
  ]
  for (let i = 0; i < answerTable.length; i++) {
    let j = answerTable[i][0];
    let k = answerTable[i][1];
    console.assert(trib(j) === k, `trib(${j})は${k}ですが、実際は${trib(j)}でした`);
  }
}