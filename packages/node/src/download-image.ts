import { dirname } from "path"
import { createWriteStream } from "fs"
import mkdirp from "mkdirp"

import axios from "axios"

/**
 * @param link link to the image to download
 * @param path where to place the resulting file
 */
const downloadImage = async (link: string, path: string): Promise<void> => {
    const parentDir = dirname(path)
    await mkdirp(parentDir)

    const response = await axios.get(link, { responseType: "stream" })

    const writer = createWriteStream(path)
    response.data.pipe(writer)

    return new Promise((resolve, reject) => {
        writer.on("finish", resolve)
        writer.on("error", reject)
    })
}

export default downloadImage
