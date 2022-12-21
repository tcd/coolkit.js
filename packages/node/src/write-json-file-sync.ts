import { writeFileSync } from "fs"
import { red, blue } from "colorette"

/**
 * Write `data` out to a file at the given `path` and log it.
 *
 * Stringifies data.
 *
 * @param path Where to write out the file.
 * @param data Data to write to the file. Is passed to `JSON.stringify`.
 * @param pretty Pretty format JSON output.
 */
const writeJsonFileSync = (path: string, data: any, pretty = true): string | null => {
    try {
        const outData = pretty ? JSON.stringify(data, null, 4) : JSON.stringify(data)
        writeFileSync(path, outData)
        console.log(`file written: ${blue(path)}`)
        return path
    } catch (error) {
        console.error(red(error.message))
        return null
    }
}

export default writeJsonFileSync
