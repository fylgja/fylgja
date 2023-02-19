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

propsBuilder({ props, filename: "_index.scss" });
propsBuilder({ props, filename: "sizes.css" });

// ShadowDom
propsBuilder({ props, filename: "sizes.host.css", selector: ":host" });

// CSS syntax via SCSS
propsBuilder({ props, filename: "_props.scss", generationSyntax: "css" });

// Support for jit-props, e.g. the open-props syntax
propsBuilder({ props, filename: "jit-props.js" });
propsBuilder({ props, filename: "jit-props.cjs" });
