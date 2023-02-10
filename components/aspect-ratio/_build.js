// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import fs from "fs";
import { propsBuilder } from "@fylgja/props-builder";
import props from "./index.js";

// For CommonJs export support
const file = fs.createWriteStream("index.cjs");
file.write(`// Fylgja (https://fylgja.dev)\n// Licensed under MIT Open Source\n
module.exports = ${JSON.stringify(props, null, 4)};\n`);
file.end();

// Props, scss
// TODO: Make this the new `_index.scss` in v2
propsBuilder({ filename: "_helper.scss", props });
propsBuilder({ filename: "_props.scss", props, generationSyntax: "css" });

// Props, css
// TODO: Make this the new `aspect-ratio.css` in v2
propsBuilder({ filename: "props.css", props });

// Props, Shadow dom
// TODO: rename props to aspect-ratio in v2
propsBuilder({ filename: "props.host.css", props, selector: ":host" });

// Props, jit-props, e.g. the open-props syntax
propsBuilder({ filename: "jit-props.js", props });
propsBuilder({ filename: "jit-props.cjs", props });
