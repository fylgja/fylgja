// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import { propsBuilder } from "@fylgja/props-builder";
import props from "./index.js";
import propsHsl from "./hsl.js";
import propsOklchHues from "./oklch-hues.js";
import propsOklch from "./oklch.js";

const hslOptions = {
    props: propsHsl,
    suffix: "-hsl",
};

// All colors, scss
propsBuilder({ filename: "_index.scss", props });
propsBuilder({ filename: "_props.scss", props, generationSyntax: "css" });
propsBuilder({
    filename: "_props.hsl.scss",
    ...hslOptions,
    generationSyntax: "css",
});
propsBuilder({
    filename: "_props.oklch.scss",
    props: propsOklch,
    suffix: "-oklch",
    selector: ":where(*)",
    generationSyntax: "css",
});
propsBuilder({
    filename: "_props.oklch-hues.scss",
    props: propsOklchHues,
    selector: ":where(*)",
    generationSyntax: "css",
});

// All colors, css
propsBuilder({ filename: "colors.css", props });
propsBuilder({ filename: "hsl.css", ...hslOptions });
propsBuilder({
    filename: "oklch.css",
    props: propsOklch,
    selector: ":where(*)",
});
propsBuilder({
    filename: "oklch-hues.css",
    props: propsOklchHues,
    selector: ":where(*)",
});

// All colors, Shadow dom
propsBuilder({ filename: "hex.host.css", props, selector: ":host" });
propsBuilder({ filename: "hsl.host.css", ...hslOptions, selector: ":host" });
propsBuilder({
    filename: "oklch.host.css",
    props: propsOklch,
    selector: "*",
});
propsBuilder({
    filename: "oklch-hues.host.css",
    props: propsOklchHues,
    selector: "*",
});

// All colors, jit-props, e.g. the open-props syntax
propsBuilder({ filename: "jit/props.js", props });
propsBuilder({ filename: "jit/props.cjs", props });
propsBuilder({ filename: "jit/props.hsl.js", ...hslOptions });
propsBuilder({ filename: "jit/props.hsl.cjs", ...hslOptions });
propsBuilder({ filename: "jit/props.oklch.js", props: propsOklch });
propsBuilder({ filename: "jit/props.oklch.cjs", props: propsOklch });
propsBuilder({ filename: "jit/props.oklch-hues.js", props: propsOklchHues });
propsBuilder({ filename: "jit/props.oklch-hues.cjs", props: propsOklchHues });

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
Object.entries(propsHsl).map(([key, value]) => {
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
