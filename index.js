const {
    numwaysStaircaseR,
    numwaysStaircaseDP,
    numwaysStaircaseRSteps,
    numwaysStaircaseDPSteps
} = require('./numways-staircase/numwaysStaircase');
const {longestSubstringK} = require('./lingest-substring/longestSubstring');
const {estimatePi} = require('./area-of-circle/areaOfCircle');
const {logRecords} = require('./log-records/logRecords');

// console.log('staircases:');
// console.log('recursive 5 stairs', numwaysStaircaseR(5));
// console.log('dp 5 stairs', numwaysStaircaseDP(5));
// console.log('recursive 5 stairs 1,2,3 steps', numwaysStaircaseRSteps(5, [1, 2, 3]));
// console.log('dp 5 stairs 1,2,3 steps', numwaysStaircaseDPSteps(5, [1, 2, 3]));

//console.log('longest substring:');
//console.log(longestSubstringK('abcba', 2));
//console.log(longestSubstringK('aabbcc', 2));
//console.log(longestSubstringK('aabbcc', 3));

//console.log('estimate pi:');
//console.log(estimatePi(1000));

console.log('log records:');

let records = logRecords(10);

for (let i = 0; i < 20; i++) {
    records.record(i);
}

console.log(records.getLast(0));
console.log(records.getLast(1));
console.log(records.getLast(3));
console.log(records.getLast(10));

records.record(20);
records.record(21);

console.log(records.getLast(1));
console.log(records.getLast(5));