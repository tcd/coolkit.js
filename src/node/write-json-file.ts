import { writeFileSync } from "fs"
import { dirname } from "path"

import mkdirp from "mkdirp"
import colorette from "colorette"
const { red, blue } = colorette

/**
 * Write `data` out to a file at the given `path`.
 *
 * Makes parent folders for the path if they don't already exist.
 *
 * @param path Where to write out the file.
 * @param data Data to write to the file. Is passed to `JSON.stringify`.
 * @param pretty Pretty format JSON output.
 */
const writeJsonFile = async (path: string, data: any, pretty = true): Promise<string | null> => {
    try {
        const outData = pretty ? JSON.stringify(data, null, 4) : JSON.stringify(data)
        const parentDir = dirname(path)
        await mkdirp(parentDir)
        writeFileSync(path, outData)
        console.log(`file written: ${blue(path)}`)
        return path
    } catch (error) {
        console.error(red(error.message))
        return null
    }
}

export default writeJsonFile
