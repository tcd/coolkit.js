import { readFileSync } from "fs"
import chalk from "chalk"
const { red } = chalk

export const readFile = (path: string): string => {
    try {
        const result = readFileSync(path).toString()
        return result
    } catch (error) {
        if (error.code == "ENOENT") {
            console.log(red(`[readFile] file not found: '${path}'`))
        } else {
            console.log(red(`unable to read file at path '${path}'`))
            console.log(red(error.message))
        }
    }
}
