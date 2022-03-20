import { propsBuilder } from "@fylgja/props-builder";
import props from "./index.js";

propsBuilder({ props, filename: "_helper.scss" }); // Will become the new index later
propsBuilder({ props, filename: "aspect-ratio.css", props });
propsBuilder({
    props,
    filename: "aspect-ratio.scss",
    props,
    generationSyntax: "css",
});
