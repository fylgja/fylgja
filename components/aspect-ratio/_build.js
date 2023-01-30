// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import { propsBuilder } from "@fylgja/props-builder";
import props from "./index.js";

// TODO: Make this the new `_index.scss` in v2
propsBuilder({ filename: "_helper.scss", props });
// TODO: Make this the new `aspect-ratio.css` in v2
propsBuilder({ filename: "props.css", props });
// TODO: rename props to aspect-ratio in v2
propsBuilder({ filename: "props.host.css", props, selector: ":host" });
propsBuilder({ filename: "_props.scss", props, generationSyntax: "css" });
