/**
 * Generate a range of numbers from `start` to `end`.
 */
const range = (start: number, end: number): number[] => {
    return Array.from(
        (function* () {
            while (start <= end) {
                yield start++
            }
        })(),
    )
}

export default range
