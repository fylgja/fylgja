import { propsBuilder } from "@fylgja/props-builder";
import props from "./index.js";

propsBuilder({ props, filename: "_index.scss" });
propsBuilder({ props, filename: "shadow.css" });
propsBuilder({ props, filename: "shadow.scss", generationSyntax: "css" });
