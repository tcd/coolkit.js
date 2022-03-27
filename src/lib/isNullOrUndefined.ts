export const isNullOrUndefined = (data: any): boolean => {
    if (data == undefined) { return true }
    if (data == null)      { return true }
    return false
}
