/**
 * The area of a circle is defined as πr^2. Estimate π to 3 decimal places using a Monte Carlo method.
 * 
 * @param {number} iterations number of iterations for the algorithm
 */
function estimatePi(iterations) {
    /**
     * Area of circle π * (1/2) ^ 2 = π/4
     * (Area of circle) / (Area of square) = (# of pts. generated inside circle) / (# of pts. generated inside square)
     * π = 4 * (# of pts. generated inside circle) / (# of pts. generated inside square)
     * point inside circle if x^2 + y^2 <= 1
     */
    let circlePts = 0,
        squarePts = 0,
        pi = 0;

    for (let i = 0; i < iterations * iterations; i++) {
        let x = Math.random(),
            y = Math.random();

        if (x * x + y * y <= 1) {
            circlePts++;
        }

        squarePts++;

        pi = (4 * circlePts) / squarePts;
    }

    return pi;
}

module.exports = {
    estimatePi
};