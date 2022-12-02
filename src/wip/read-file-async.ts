import { readFile as _readFile } from "fs/promises"
import colorette from "colorette"
const { red } = colorette

const readFileAsync = async (path: string): Promise<string | null> => {
    try {
        const result = (await _readFile(path)).toString()
        return result
    } catch (error) {
        if (error.code == "ENOENT") {
            console.log(red(`[readFile] file not found: '${path}'`))
        } else {
            console.log(red(`unable to read file at path '${path}'`))
            console.log(red(error.message))
        }
        return null
    }
}

export default readFileAsync
