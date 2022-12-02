/**
 * Pick `n` random elements from `array`
 *
 * [source](https://bobbyhadz.com/blog/javascript-get-multiple-random-elements-from-array)
 */
const pickRandom = <T>(array: T[], n: number): T[] => {
    const shuffled = [...array].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, n)
}

export default pickRandom
