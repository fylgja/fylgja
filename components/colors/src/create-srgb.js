// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import oklchToSrgb from "./oklchToSrgb.js";
import buildJsFile from "./buildJsFile.js";
import props from "./create-oklch.js";

// Loop trough each color from props and convert it to Hsl and Hex
const propsHsl = {};
const propsHex = {};
Object.keys(props).forEach((color) => {
    propsHsl[color] = {};
    propsHex[color] = {};

    Object.keys(props[color]).forEach((key) => {
        propsHsl[color][key] = oklchToSrgb(props[color][key]);
        propsHex[color][key] = oklchToSrgb(props[color][key], "hex");
    });
});

buildJsFile("hsl.js", propsHsl);
buildJsFile("hsl.cjs", propsHsl);
buildJsFile("index.js", propsHex);
buildJsFile("index.cjs", propsHex);
