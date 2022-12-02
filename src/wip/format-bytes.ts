/**
 * [Correct way to convert size in bytes to KB, MB, GB in JavaScript](https://stackoverflow.com/a/18650828/7687024)
 */
export const formatBytes = (bytes: number, decimals = 2): string => {
    if (!+bytes) return "0 Bytes"

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}
