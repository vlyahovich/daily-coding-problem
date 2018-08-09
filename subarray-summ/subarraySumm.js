/**
 * Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.
 * For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:
 *
 * 10 = max(10, 5, 2)
 * 7 = max(5, 2, 7)
 * 8 = max(2, 7, 8)
 * 8 = max(7, 8, 7)
 * 
 * @param arr input array
 * @param k length of subarray
 */
function subarraySumm(arr, k) {
    if (k <= 0) {
        throw new Error('k must be gt or eqt 1');
    }

    if (k > arr.length) {
        throw new Error('k must be lt array lenth');
    }

    let i = 0,
        j = k,
        result = [];

    while (j <= arr.length) {
        result[i] = Math.max(...arr.slice(i, j));

        i++;
        j++;
    }

    return result;
}

module.exports = {
    subarraySumm
};