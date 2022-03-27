import { __awaiter } from "tslib";
import { writeFileSync } from "fs";
import { dirname } from "path";
import mkdirp from "mkdirp";
import chalk from "chalk";
const { red, blue } = chalk;
export const writeFile = (path, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const outData = JSON.stringify(data, null, 4);
        const parentDir = dirname(path);
        yield mkdirp(parentDir);
        writeFileSync(path, outData);
        console.log(`file written: ${blue(path)}`);
        return path;
    }
    catch (error) {
        console.error(red(error.message));
        return null;
    }
});
