// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import { propsBuilder } from "@fylgja/props-builder";
import props from "./index.js";
import propsHSL from "./index-hsl.js";

// All colors
propsBuilder({ filename: "_index.scss", props });
propsBuilder({ filename: "_props.scss", props, generationSyntax: "css" });
propsBuilder({
    filename: "_props.hsl.scss",
    props: propsHSL,
    generationSyntax: "css",
});
propsBuilder({ filename: "colors.css", props });
propsBuilder({ filename: "colors.shadow.css", props, selector: ":host" });
propsBuilder({ filename: "colors.hsl.css", props: propsHSL });
propsBuilder({
    filename: "colors.hsl.shadow.css",
    props: propsHSL,
    selector: ":host",
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
    });
    propsBuilder({
        filename: `hsl/${key}.shadow.css`,
        props: { [key]: value },
        selector: ":host",
    });
});
