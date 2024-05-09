// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import fs from "fs";
import { propsBuilder } from "@fylgja/props-builder";
import props from "./index.js";

// For CommonJs export support
const copy =
    "// Fylgja (https://fylgja.dev)\n// Licensed under MIT Open Source\n";
fs.createWriteStream("index.cjs").write(
    `${copy}\nmodule.exports = ${JSON.stringify(props, null, 2)};\n`
);

// Props, scss
propsBuilder({ props, filename: "_index.scss" });
propsBuilder({ props, filename: "_props.scss", generationSyntax: "css" });

// Props, css
propsBuilder({ props, filename: "easing.css" });

// Props, Shadow dom
propsBuilder({ props, filename: "easing.host.css", selector: ":host" });

// Props, jit-props, e.g. the open-props syntax
propsBuilder({ filename: "jit-props.js", props });
propsBuilder({ filename: "jit-props.cjs", props });
