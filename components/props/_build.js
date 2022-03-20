// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import { propsBuilder } from "@fylgja/props-builder";
import props from "./index.js";

propsBuilder({ props, filename: "_index.scss" });
propsBuilder({ props, filename: "props.css" });
propsBuilder({ props, filename: "props.scss", generationSyntax: "css" });
propsBuilder({ props, filename: "fylgja.tokens.json" });
propsBuilder({ props, filename: "fylgja.figma-tokens.json" });
