// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import { propsBuilder } from "@fylgja/props-builder";
import props from "./index.js";
import propsHSL from "./index-hsl.js";

propsBuilder({ filename: "_index.scss", props });
propsBuilder({ filename: "_hex.scss", props, generationSyntax: "css" });
propsBuilder({ filename: "colors.css", props });
propsBuilder({ filename: "hsl.css", props: propsHSL });
propsBuilder({
    filename: "_hsl.scss",
    props: propsHSL,
    generationSyntax: "css",
});
