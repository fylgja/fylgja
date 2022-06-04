// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import { propsBuilder } from "@fylgja/props-builder";
import props from "./index.js";

propsBuilder({ props, filename: "_index.scss" });
propsBuilder({ props, filename: "z-layer.css" });
propsBuilder({ props, filename: "z-layer.scss", generationSyntax: "css" });
