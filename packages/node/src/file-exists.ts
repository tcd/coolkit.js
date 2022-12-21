import { access } from "fs/promises"

/**
 * Async function to check if a file exists.
 */
const fileExists = async (path: string): Promise<boolean> => {
    try {
        await access(path)
        return true
    } catch {
        return false
    }
}

export default fileExists
