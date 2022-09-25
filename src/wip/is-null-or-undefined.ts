/**
 * Returns `true` if `arg` is `null` or `undefined`
 */
const isNullOrUndefined = (arg: any): boolean => {
    if (arg === undefined) { return true }
    if (arg === null)      { return true }
    return false
}

export default isNullOrUndefined
