import { writeFileSync } from "fs"
import { red, blue } from "colorette"

import type { WriteJsonFileOptions } from "./types"

/**
 * Write `data` out to a file at the given `path` and log it.
 *
 * Stringifies data.
 *
 * @param path Where to write out the file.
 * @param data Data to write to the file. Is passed to `JSON.stringify`.
 * @param options Additional options.
 */
const writeJsonFileSync = (path: string, data: any, options: WriteJsonFileOptions = {}): string | null => {
    const {
        pretty = true,
        log    = true,
    } = options
    try {
        const outData = pretty ? JSON.stringify(data, null, 4) : JSON.stringify(data)
        writeFileSync(path, outData)
        if (log) {
            console.log(`file written: ${blue(path)}`)
        }
        return path
    } catch (error) {
        console.error(red(error.message))
        return null
    }
}

export default writeJsonFileSync
