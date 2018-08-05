/**
 * You run an e-commerce website and want to record the last N order ids in a log. Implement a data structure to accomplish this, with the following API:
 *  - record(order_id): adds the order_id to the log
 *  - get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.
 * 
 * @param {number} n length of log
 */
function logRecords(n) {
    /**
     * We doing circular buffer as a data structure https://en.wikipedia.org/wiki/Circular_buffer
     */
    let buffer = new Array(n),
        index = 0;

    return {
        record(orderId) {
            buffer[index++] = orderId;

            if (index === buffer.length) {
                index = 0;
            }
        },

        getLast(i) {
            let startIndex = index - i;

            if (startIndex < 0) {
                return buffer.slice(n + startIndex, n).concat(buffer.slice(0, index));
            }

            return buffer.slice(startIndex, index);
        }
    };
}

module.exports = {
    logRecords
};