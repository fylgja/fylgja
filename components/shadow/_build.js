// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import fs from "fs";
import { propsBuilder } from "@fylgja/props-builder";
import props, { staticShadows } from "./index.js";

// For CommonJs export support
fs.createWriteStream("index.cjs").write(`// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

const shadows = ${JSON.stringify(props, null, 4)};

const staticShadows = ${JSON.stringify(staticShadows, null, 4)};

module.exports = { ...shadows, staticShadows };
`);

// * 1: the `/` is not part of a calc so we don't need to escape it
propsBuilder({ props, filename: "_index.scss", safeMode: false }); // *1
propsBuilder({ props, filename: "shadow.css" });

// ShadowDom
propsBuilder({ props, filename: "shadow.host.css", selector: ":host" });

// CSS syntax via SCSS
propsBuilder({ props, filename: "_props.scss", generationSyntax: "css" });

// Support for jit-props, e.g. the open-props syntax
propsBuilder({ props, filename: "jit-props.js" });
propsBuilder({ props, filename: "jit-props.cjs" });

// Safe shadows
propsBuilder({ props: staticShadows, filename: "shadow.static.css" });
