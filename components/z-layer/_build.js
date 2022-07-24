// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import { propsBuilder } from "@fylgja/props-builder";
import props from "./index.js";

propsBuilder({ props, filename: "_index.scss" });
propsBuilder({ props, filename: "_props.scss", generationSyntax: "css" });
propsBuilder({ props, filename: "z-layer.shadow.css", selector: ":host" });
propsBuilder({ props, filename: "z-layer.css" });
