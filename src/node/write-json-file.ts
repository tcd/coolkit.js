import { writeFileSync } from "fs"
import { dirname } from "path"
import mkdirp from "mkdirp"
import { red, blue } from "colorette"

export type WriteJsonFileOptions = {
    /**
     * Pretty format JSON output.
     * @default true
     */
    pretty?: boolean
    /**
     * Log out `path` after writing.
     * @default true
     */
    log?: boolean
}

/**
 * Write `data` out to a file at the given `path` and log it.
 *
 * Stringifies data.
 *
 * Makes parent folders for the path if they don't already exist.
 *
 * @param path Where to write out the file.
 * @param data Data to write to the file. Is passed to `JSON.stringify`.
 * @param options Additional options.
 */
const writeJsonFile = async (path: string, data: any, options: WriteJsonFileOptions = {}): Promise<string | null> => {
    const {
        pretty = true,
        log = true,
    } = options
    try {
        const outData = pretty ? JSON.stringify(data, null, 4) : JSON.stringify(data)
        const parentDir = dirname(path)
        await mkdirp(parentDir)
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

export default writeJsonFile
