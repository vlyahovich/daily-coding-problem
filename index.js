const {
    numwaysStaircaseR,
    numwaysStaircaseDP,
    numwaysStaircaseRSteps,
    numwaysStaircaseDPSteps
} = require('./numways-staircase/numwaysStaircase');

console.log('staircases:')
console.log('recursive 5 stairs', numwaysStaircaseR(5));
console.log('dp 5 stairs', numwaysStaircaseDP(5));
console.log('recursive 5 stairs 1,2,3 steps', numwaysStaircaseRSteps(5, [1, 2, 3]));
console.log('dp 5 stairs 1,2,3 steps', numwaysStaircaseDPSteps(5, [1, 2, 3]));