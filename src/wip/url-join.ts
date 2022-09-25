const LEADING_PROTOCOL  = /^[^/:]+:\/*$/
const FILE_PROTOCOL  = /^file:\/\/\//
const PROTOCOL = /^([^/:]+):\/*/
const LEADING_SLASH  = /^[\/]+/
const TRAILING_SLASH = /[\/]+$/
const HASH = /\/(\?|&|#[^!])/g

const normalize = (strArray: string[]): string => {
    const resultArray = []
    if (strArray.length === 0) { return "" }

    if (typeof strArray[0] !== "string") {
        throw new TypeError("Url must be a string. Received " + strArray[0])
    }

    // If the first part is a plain protocol, we combine it with the next part.
    if (strArray[0].match(LEADING_PROTOCOL) && strArray.length > 1) { // /^[^/:]+:\/*$/
        let first = strArray.shift()
        strArray[0] = first + strArray[0]
    }

    // There must be two or three slashes in the file protocol, two slashes in anything else.
    if (strArray[0].match(FILE_PROTOCOL)) { // ^file:\/\/\/
        strArray[0] = strArray[0].replace(PROTOCOL, "$1:///") // ^([^/:]+):\/*
    } else {
        strArray[0] = strArray[0].replace(PROTOCOL, "$1://") // ^([^/:]+):\/*
    }

    for (let i = 0; i < strArray.length; i++) {
        let component = strArray[i]

        if (typeof component !== "string") {
            throw new TypeError("Url must be a string. Received " + component)
        }

        if (component === "") {
            continue
        }

        if (i > 0) {
            // Removing the starting slashes for each component but the first.
            component = component.replace(LEADING_SLASH, "") // ^[\/]+
        }

        if (i < strArray.length - 1) {
            // Removing the ending slashes for each component but the last.
            component = component.replace(TRAILING_SLASH, "") // [\/]+$
        } else {
            // For the last component we will combine multiple slashes to a single one.
            component = component.replace(TRAILING_SLASH, "/") // [\/]+$
        }

        resultArray.push(component)
    }

    let str = resultArray.join("/")
    // Each input component is now separated by a single slash except the possible first plain protocol part.

    // remove trailing slash before parameters or hash
    str = str.replace(HASH, "$1") // \/(\?|&|#[^!])

    // replace ? in parameters with &
    const parts = str.split("?")
    str = parts.shift() + (parts.length > 0 ? "?" : "") + parts.join("&")

    return str
}

/**
 * A modified version of [jfromaniello/url-join](https://github.com/jfromaniello/url-join).
 *
 * Join all arguments together and normalize the resulting URL.
 *
 * This is similar to [`path.join`](https://nodejs.org/api/path.html#pathjoinpaths).
 *
 * `path.join` isn't ideal for joining urls for a number of reasons:
 * - its output varies by operating system
 * - it doesn't always handle protocols correctly
 * - its not what it was made for
 */
const urlJoin = (...args: string[]): string => {
    const input = Array.from(Array.isArray(args[0]) ? args[0] : args)
    return normalize(input)
}

export default urlJoin
