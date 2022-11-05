// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import { propsBuilder } from "@fylgja/props-builder";
import props from "./index.js";
import propsHSL from "./hsl.js";

const hslSuffix = "-hsl";

// All colors, scss
propsBuilder({ filename: "_index.scss", props });
propsBuilder({ filename: "_props.scss", props, generationSyntax: "css" });
propsBuilder({
    filename: "_hsl.scss",
    props: propsHSL,
    generationSyntax: "css",
    suffix: "-hsl",
});

// All colors, css
propsBuilder({ filename: "colors.css", props });
propsBuilder({ filename: "hsl.css", props: propsHSL, suffix: hslSuffix });

// All colors, Shadow dom
propsBuilder({ filename: "hex.host.css", props, selector: ":host" });
propsBuilder({
    filename: "hsl.host.css",
    props: propsHSL,
    selector: ":host",
    suffix: hslSuffix,
});

// Only 1 color set for each color group
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

Object.entries(propsHSL).map(([key, value]) => {
    propsBuilder({
        filename: `hsl/${key}.css`,
        props: { [key]: value },
        suffix: hslSuffix,
    });
    propsBuilder({
        filename: `hsl/${key}.host.css`,
        props: { [key]: value },
        selector: ":host",
        suffix: hslSuffix,
    });
});
