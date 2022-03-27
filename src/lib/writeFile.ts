import { writeFileSync } from "fs"
import { dirname } from "path"

import mkdirp from "mkdirp"
import chalk from "chalk"
const { red, blue } = chalk

/**
 * Write `data` out to a file at the given `path`.
 *
 * Makes parent folders for the path if they don't already exist.
 *
 * @param path Where to write out the file.
 * @param data Data to write to the file. Is passed to `JSON.stringify`.
 */
export const writeFile = async (path: string, data: any): Promise<string> => {
    try {
        const outData = JSON.stringify(data, null, 4)
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
