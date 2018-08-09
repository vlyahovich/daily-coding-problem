const LinkedList = require('./util/linked-list/LinkedList');
const {
    numwaysStaircaseR,
    numwaysStaircaseDP,
    numwaysStaircaseRSteps,
    numwaysStaircaseDPSteps
} = require('./numways-staircase/numwaysStaircase');
const {longestSubstringK} = require('./lingest-substring/longestSubstring');
const {estimatePi} = require('./area-of-circle/areaOfCircle');
const {logRecords} = require('./log-records/logRecords');
const {subarraySumm} = require('./subarray-summ/subarraySumm');
const {listsIntersection} = require('./lists-intersection/listsIntersection');

// console.log('staircases:');
// console.log('recursive 5 stairs', numwaysStaircaseR(5));
// console.log('dp 5 stairs', numwaysStaircaseDP(5));
// console.log('recursive 5 stairs 1,2,3 steps', numwaysStaircaseRSteps(5, [1, 2, 3]));
// console.log('dp 5 stairs 1,2,3 steps', numwaysStaircaseDPSteps(5, [1, 2, 3]));

// console.log('longest substring:');
// console.log(longestSubstringK('abcba', 2));
// console.log(longestSubstringK('aabbcc', 2));
// console.log(longestSubstringK('aabbcc', 3));

// console.log('estimate pi:');
// console.log(estimatePi(1000));

// console.log('log records:');

// let records = logRecords(10);

// for (let i = 0; i < 20; i++) {
//     records.record(i);
// }

// console.log(records.getLast(0));
// console.log(records.getLast(1));
// console.log(records.getLast(3));
// console.log(records.getLast(10));

// records.record(20);
// records.record(21);

// console.log(records.getLast(1));
// console.log(records.getLast(5));

// console.log('subarray summ:');
// console.log(subarraySumm([10, 5, 2, 7, 8, 7], 3));

console.log('lists intersection:');
console.log(listsIntersection(new LinkedList([3, 7, 8, 10]), new LinkedList([99, 1, 8, 10])));