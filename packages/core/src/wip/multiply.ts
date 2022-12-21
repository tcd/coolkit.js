/**
 * Multiply all numbers in an array together.
 */
const multiply = (values: number[]): number => {
    return values.reduce(
        (prevValue, curValue) => { return prevValue * curValue },
        1,
    )
}

export default multiply
