import { readdirSync, lstatSync } from "fs"
import { join } from "path"

/**
 * List all files in `folderPath`
 */
const readFolder = (folderPath: string, fullPath = false): string[] => {
    const paths = readdirSync(folderPath).filter((file) => lstatSync(join(folderPath, file)).isFile())
    if (fullPath === false) {
        return paths
    } else {
        return paths.map(p => join(folderPath, p))
    }
}

export default readFolder
