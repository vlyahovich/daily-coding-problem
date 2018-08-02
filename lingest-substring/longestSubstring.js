/**
 * Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.
 * 
 * @param {string} str string to search from
 * @param {number} k length of unique characters
 */
function longestSubstringK(str, k) {
    if (k === 0) {
        return '';
    }

    let substring = '',
        updateNewStr = (start, end) => {
            let newStr = str.substring(start, end);

            if (newStr.length > substring.length) {
                substring = newStr;
            }
        };

    for (let i = 0; i < str.length; i++) {
        let hash = {},
            count = 1,
            start = i,
            end = i + 1;

        hash[str[start]] = 1;

        while (end < str.length && count <= k) {
            if (!hash[str[end]]) {
                hash[str[end]] = 1;
                count++;

                // overflow, check last end point
                if (count > k) {
                    updateNewStr(start, end);
                }
            }

            end++;
        }

        // check end of string
        if (end <= str.length && count === k) {
            updateNewStr(start, end);
        }
    }

    return substring;
}

module.exports = {
    longestSubstringK 
};
