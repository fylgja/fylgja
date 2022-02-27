import { propsBuilder } from "@fylgja/props-builder";
import props from "./index.js";

propsBuilder({ filename: "shadow.scss", props });
propsBuilder({ filename: "_index.scss", props });
propsBuilder({ filename: "_helper.scss", props, varOnly: true });
propsBuilder({ filename: "tokens.json", props, selector: "json" });
