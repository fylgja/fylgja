// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import fs from "fs";
import { propsBuilder } from "@fylgja/props-builder";
import props from "./index.js";
import propsHSL from "./hsl.js";

const hslOptions = {
    props: propsHSL,
    suffix: "-hsl",
};

// For CommonJs export support
const file = fs.createWriteStream("index.cjs");
file.write(`// Fylgja (https://fylgja.dev)\n// Licensed under MIT Open Source\n
module.exports = ${JSON.stringify(props, null, 4)};\n`);
file.end();

// All colors, scss
propsBuilder({ filename: "_index.scss", props });
propsBuilder({ filename: "_props.scss", props, generationSyntax: "css" });
propsBuilder({ filename: "_hsl.scss", ...hslOptions, generationSyntax: "css" });

// All colors, css
propsBuilder({ filename: "colors.css", props });
propsBuilder({ filename: "hsl.css", ...hslOptions });

// All colors, Shadow dom
propsBuilder({ filename: "hex.host.css", props, selector: ":host" });
propsBuilder({ filename: "hsl.host.css", ...hslOptions, selector: ":host" });

// All colors, jit-props, e.g. the open-props syntax
propsBuilder({ filename: "jit-props.js", props });
propsBuilder({ filename: "jit-props.hsl.js", ...hslOptions });
propsBuilder({ filename: "jit-props.cjs", props });
propsBuilder({ filename: "jit-props.hsl.cjs", ...hslOptions });

// Only one color set, hex syntax
Object.entries(props).map(([key, value]) => {
    propsBuilder({
        filename: `hex/${key}.css`,
        props: { [key]: value },
    });
    propsBuilder({
        filename: `hex/${key}.host.css`,
        props: { [key]: value },
        selector: ":host",
    });
});

// Only one color set, hsl syntax
Object.entries(propsHSL).map(([key, value]) => {
    propsBuilder({
        filename: `hsl/${key}.css`,
        props: { [key]: value },
        suffix: hslOptions.suffix,
    });
    propsBuilder({
        filename: `hsl/${key}.host.css`,
        props: { [key]: value },
        selector: ":host",
        suffix: hslOptions.suffix,
    });
});
