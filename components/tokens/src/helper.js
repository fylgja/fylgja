// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import fs from "fs";

export const twColorKeysMap = {
    0: 50,
    1: 100,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
    6: 600,
    7: 700,
    8: 800,
    9: 900,
};

export function renameKeys(keysMap, obj) {
    return Object.keys(obj).reduce(
        (acc, key) => ({
            ...acc,
            ...{ [keysMap[key] || key]: obj[key] },
        }),
        {}
    );
}

export function buildJsFile(file, props) {
    const syntax = file.endsWith(".cjs")
        ? "module.exports = "
        : "export default ";
    const copyright =
        "// Fylgja (https://fylgja.dev)\n// Licensed under MIT Open Source\n";

    fs.createWriteStream(file).write(
        `${copyright}\n${syntax}${JSON.stringify(props, null, 2)};\n`
    );
}
