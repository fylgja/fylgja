import { propsBuilder } from "@fylgja/props-builder";
import props from "./index.js";

propsBuilder({ filename: "animation.scss", props });
propsBuilder({ filename: "_helper.scss", props, varOnly: true });
propsBuilder({ filename: "_frames.scss", props, frameOnly: true });
