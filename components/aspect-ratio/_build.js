import { propsBuilder } from "@fylgja/props-builder";
import props from "./index.js";

propsBuilder({ filename: "aspect-ratio.scss", props });
propsBuilder({ filename: "_helper.scss", props, varOnly: true });
propsBuilder({ filename: "tokens.json", props });
