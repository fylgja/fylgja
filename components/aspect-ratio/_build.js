import { propsBuilder } from "@fylgja/props-builder";
import props from "./index.js";

// TODO: Make this the new `_index.scss` in v2
propsBuilder({ filename: "_helper.scss", props });
// TODO: Make this the new `aspect-ratio.css` in v2
propsBuilder({ filename: "props.css", props });
propsBuilder({ filename: "_props.scss", props, generationSyntax: "css" });
