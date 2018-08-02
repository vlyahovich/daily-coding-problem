const {
    numwaysStaircaseR,
    numwaysStaircaseDP,
    numwaysStaircaseRSteps,
    numwaysStaircaseDPSteps
} = require('./numways-staircase/numwaysStaircase');
const {longestSubstringK} = require('./lingest-substring/longestSubstring');

// console.log('staircases:');
// console.log('recursive 5 stairs', numwaysStaircaseR(5));
// console.log('dp 5 stairs', numwaysStaircaseDP(5));
// console.log('recursive 5 stairs 1,2,3 steps', numwaysStaircaseRSteps(5, [1, 2, 3]));
// console.log('dp 5 stairs 1,2,3 steps', numwaysStaircaseDPSteps(5, [1, 2, 3]));

console.log('longest substring:');
console.log(longestSubstringK('abcba', 2));
console.log(longestSubstringK('aabbcc', 2));
console.log(longestSubstringK('aabbcc', 3));