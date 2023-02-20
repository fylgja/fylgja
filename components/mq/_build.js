// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import fs from "fs";
import props from "./index.js";

// For CommonJs export support
const copy =
    "// Fylgja (https://fylgja.dev)\n// Licensed under MIT Open Source\n";
fs.createWriteStream("index.cjs").write(
    `${copy}\nemodule.exports = ${JSON.stringify(props, null, 2)};\n`
);

function createMqProps(props, filename) {
    const mqList = ["xs", "sm", "md", "lg", "xl", "xxl"];
    const file = fs.createWriteStream(filename);

    for (const key in props) {
        if (mqList.includes(key)) continue;
        const mqKey = key.endsWith("Min") ? key.replace("Min", "") : key;
        file.write(`@custom-media --${mqKey}: ${props[key]};\n`);
    }
}

// Props, scss
// propsBuilder({ props, filename: "_index.scss" });
createMqProps(props, "_props.scss");

// Props, css
createMqProps(props, "mq.css");
