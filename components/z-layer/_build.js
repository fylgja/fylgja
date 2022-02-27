// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import { propsBuilder } from "@fylgja/props-builder";
import props from "./index.js";

propsBuilder({ filename: "z-layer.scss", props });
propsBuilder({ filename: "_index.scss", props });
propsBuilder({ filename: "_helper.scss", props, varOnly: true });
propsBuilder({ filename: "tokens.json", props, keepCamelCase: true });
