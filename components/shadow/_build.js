// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import fs from "fs";
import { propsBuilder } from "@fylgja/props-builder";
import props, { staticShadows } from "./index.js";

// For CommonJs export support
const file = fs.createWriteStream("index.cjs");
file.write(`// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

const shadows = ${JSON.stringify(props, null, 4)};

const staticShadows = ${JSON.stringify(staticShadows, null, 4)};

module.exports = { ...shadows, staticShadows };
`);
file.end();

// The Props 😎
propsBuilder({
    props,
    filename: "_index.scss",
    safeMode: false, // the `/` is not part of a calc so we don't need to escape it
});
propsBuilder({
    props,
    filename: "_props.scss",
    generationSyntax: "css",
});
propsBuilder({ props, filename: "shadow.css" });
propsBuilder({
    props,
    filename: "host.css",
    selector: ":host",
});
propsBuilder({
    props: staticShadows,
    filename: "safe.css",
});

// postcss-jit-props syntax
propsBuilder({ props, filename: "props.cjs" });
propsBuilder({ props, filename: "props.js" });
