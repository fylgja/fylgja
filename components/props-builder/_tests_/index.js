import { propsBuilder } from "../index.js";

const prefix = "ftz-";
const selector = ".fylgja-test-zone";

const red = {
    0: "#fff5f5",
    1: "#ffe3e3",
    2: "#ffc9c9",
    3: "#ffa8a8",
    4: "#ff8787",
    5: "#ff6b6b",
    6: "#fa5252",
    7: "#f03e3e",
    8: "#e03131",
    9: "#c92a2a",
};
const green = "#0f0";
const blue = "#00f";

const slideIn = `@keyframes slide-in {
    from {
        transform: translateX(var(--tx: 100%));
    }
}`;

const props = {
    "layer-1": 1,
    "size-2": "0.5em",
    "size-4": "4em",
    red,
    green,
    blue,
};

const propsKeys = {
    "slideIn-@": slideIn,
    "slideOut-@": `@keyframes slide-out {
    to {
        transform: translateX(var(--tx: -100%));
    }
}`,
};

const propsBoth = {
    ...props,
    ...propsKeys,
    slideInOut: "slide-in 3s, slide-out 3s",
    gradient: `linear-gradient(90deg, ${green}, ${blue})`,
};

// file types for just props
propsBuilder({ props, filename: "_tests_/_tokens.json" });
propsBuilder({ props, filename: "_tests_/_tokens.figma-tokens.json" });
propsBuilder({ props, filename: "_tests_/_tokens.scss" });
propsBuilder({ props, filename: "_tests_/_tokens.css" });
propsBuilder({ props, filename: "_tests_/_tokens-prefix.scss", prefix }); // Only works with on props, not keyframes/animations
propsBuilder({ props, filename: "_tests_/_tokens-prefix.css", prefix }); // Only works with on props, not keyframes/animations
propsBuilder({ props, filename: "_tests_/_tokens-selector.css", selector }); // only works for CSS

// file types for just keys
propsBuilder({ props: propsKeys, filename: "_tests_/_tokens-key.scss" });
propsBuilder({ props: propsKeys, filename: "_tests_/_tokens-key.css" });

// file types for props and keys
propsBuilder({ props: propsBoth, filename: "_tests_/_tokens-full.scss" });
propsBuilder({ props: propsBoth, filename: "_tests_/_tokens-full.css" });
