import { propsBuilder } from "@fylgja/props-builder";
import props from "./index.js";

propsBuilder({ props, filename: "_index.scss" });
propsBuilder({ props, filename: "easing.css" });
propsBuilder({ props, filename: "_props.scss", generationSyntax: "css" });
