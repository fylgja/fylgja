// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import { propsBuilder } from "@fylgja/props-builder";
import props, { staticShadows } from "./index.js";

propsBuilder({ props, filename: "_index.scss" });
propsBuilder({ props, filename: "_props.scss", generationSyntax: "css" });
propsBuilder({ props, filename: "shadowdom.css", selector: ":host" });
propsBuilder({ props: staticShadows, filename: "safe.css" });
propsBuilder({ props, filename: "shadow.css" });
