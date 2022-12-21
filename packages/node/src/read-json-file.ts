import { readFileSync } from "fs"
import { red } from "colorette"

const readJsonFile = <T = any>(path: string): T | null => {
    try {
        const result = JSON.parse(readFileSync(path).toString())
        return result
    } catch (error) {
        if (error.code == "ENOENT") {
            console.log(red(`[readJsonFile] file not found: '${path}'`))
        } else {
            console.log(red(`unable to read JSON from path '${path}'`))
            console.log(red(error.message))
        }
        return null
    }
}

export default readJsonFile
