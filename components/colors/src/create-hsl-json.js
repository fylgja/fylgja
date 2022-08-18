// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import fs from "fs";
import hexToHsl from "./hexToHsl.js";
import props from "../index.js";

// Loop trough each color from props and convert it to hsl and add it to propsHsl
const propsHsl = {};
Object.keys(props).forEach((color) => {
    propsHsl[color] = {};

    Object.keys(props[color]).forEach((key) => {
        propsHsl[color][key] = hexToHsl(props[color][key]);
    });
});

// Write the propsHsl to a temp json file
const file = fs.createWriteStream("temp/index-hsl.json");
file.write(JSON.stringify(propsHsl, null, 2));
file.end();
