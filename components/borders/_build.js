// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import fs from "fs";
import { propsBuilder } from "@fylgja/props-builder";
import props from "./index.js";

// For CommonJs export support
fs.createWriteStream("index.cjs").write(`// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

module.exports = ${JSON.stringify(props, null, 2)}
`);

propsBuilder({ props, filename: "_index.scss" });
propsBuilder({ props, filename: "borders.css" });

// ShadowDom
propsBuilder({ props, filename: "borders.host.css", selector: ":host" });

// CSS syntax via SCSS
propsBuilder({ props, filename: "_props.scss", generationSyntax: "css" });

// Support for jit-props, e.g. the open-props syntax
propsBuilder({ props, filename: "jit-props.js" });
propsBuilder({ props, filename: "jit-props.cjs" });
