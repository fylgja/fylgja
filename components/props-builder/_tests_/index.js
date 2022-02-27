import { propsBuilder } from "../index.js";

const prefix = "ftz-";
const selector = ".fylgja-test-zone";

const red = "#f00";
const green = "#0f0";
const blue = "#00f";

const slideIn = `@keyframes slide-in {
    from {
        transform: translateX(var(--tx: 100%));
    }
}`;

const props = {
    z1: 1,
    zTop: 100,
    red,
    green,
    blue,
    slideInOut: "slide-in 3s, slide-out 3s",
    "slideIn-@": slideIn,
    "slideOut-@": `@keyframes slide-out {
    to {
        transform: translateX(var(--tx: -100%));
    }
}`,
    gradient: `linear-gradient(90deg, ${red}, ${green}, ${blue})`,
};

// Just style
propsBuilder({ filename: "_tests_/_style.css", props, selector, prefix });
propsBuilder({ filename: "_tests_/_style.scss", props, selector, prefix });

// Just SCSS variables
propsBuilder({
    filename: "_tests_/_var.scss",
    props,
    selector,
    prefix,
    varOnly: true,
});

// Just keyframes
propsBuilder({
    filename: "_tests_/_keyframes.css",
    props,
    selector,
    prefix,
    frameOnly: true,
});

// Keyframes and SCSS variables
propsBuilder({
    filename: "_tests_/_scss.scss",
    props,
    selector,
    prefix,
    frameOnly: true,
    varOnly: true,
});

// As json and keep camelCase
propsBuilder({ filename: "_tests_/_tokens.json", props, keepCamelCase: true });
