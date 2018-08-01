/**
 * There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time.
 * Given N, write a function that returns the number of unique ways you can climb the staircase.
 * The order of the steps matters.
 */

/**
 * Recursive solution
 * 
 * @param {number} n number of staircases
 */
function numwaysStaircaseR(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return numwaysStaircaseR(n - 1) + numwaysStaircaseR(n - 2);
}

/**
 * Dynamic programming solution. Linear complexity
 * 
 * @param {number} n number of staircases
 */
function numwaysStaircaseDP(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    let ways = new Array(n);

    ways[0] = 1;
    ways[1] = 1;

    for (let i = 2; i <= n; i++) {
        ways[i] = ways[i - 1] + ways[i - 2];
    }

    return ways[n];
}

/**
 * What if, instead of being able to climb 1 or 2 steps at a time,
 * you could climb any number from a set of positive integers X?
 * For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.
 */

/**
 * Recursive solution for n steps
 * 
 * @param {number} n number of staircases
 * @param {number[]} steps set of steps
 */
function numwaysStaircaseRSteps(n, steps) {
    if (n === 0) {
        return 1;
    }

    let result = 0;

    for (let i = 0; i < steps.length; i++) {
        if (n - steps[i] >= 0) {
            result += numwaysStaircaseRSteps(n - steps[i], steps);
        }
    }

    return result;
}

/**
 * Dynamic programming solution for n steps
 * 
 * @param {number} n number of staircases
 */
function numwaysStaircaseDPSteps(n, steps) {
    if (n === 0) {
        return 1;
    }

    let ways = new Array(n);

    ways[0] = 1;

    for (let i = 1; i <= n; i++) {
        let result = 0;

        for (let j = 0; j < steps.length; j++) {
            if (i - steps[j] >= 0) {
                result += ways[i - steps[j]];
            }
        }

        ways[i] = result;
    }

    return ways[n];
}

module.exports = {
    numwaysStaircaseR,
    numwaysStaircaseDP,
    numwaysStaircaseRSteps,
    numwaysStaircaseDPSteps
};