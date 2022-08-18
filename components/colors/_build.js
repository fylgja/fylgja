// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import { propsBuilder } from "@fylgja/props-builder";
import props from "./index.js";
import propsHSL from "./hsl.js";

// All colors
propsBuilder({ filename: "_index.scss", props });
propsBuilder({ filename: "_props.scss", props, generationSyntax: "css" });
propsBuilder({
    filename: "_hsl.scss",
    props: propsHSL,
    generationSyntax: "css",
    suffix: "-hsl",
});
propsBuilder({ filename: "colors.css", props });
propsBuilder({ filename: "shadowdom.css", props, selector: ":host" });
propsBuilder({ filename: "hsl.css", props: propsHSL, suffix: "-hsl" });
propsBuilder({
    filename: "hsl/shadowdom.css",
    props: propsHSL,
    selector: ":host",
    suffix: "-hsl",
});

// Only 1 color set for each color group
Object.entries(props).map(([key, value]) => {
    propsBuilder({
        filename: `hex/${key}.css`,
        props: { [key]: value },
    });
    propsBuilder({
        filename: `hex/${key}.shadow.css`,
        props: { [key]: value },
        selector: ":host",
    });
});

Object.entries(propsHSL).map(([key, value]) => {
    propsBuilder({
        filename: `hsl/${key}.css`,
        props: { [key]: value },
        suffix: "-hsl",
    });
    propsBuilder({
        filename: `hsl/${key}.shadow.css`,
        props: { [key]: value },
        selector: ":host",
        suffix: "-hsl",
    });
});
