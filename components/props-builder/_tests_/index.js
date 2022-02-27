import { propsBuilder } from "../index.js";

const prefix = "ftz-";
const selector = ".fylgja-test-zone";

const red = "#f00";
const green = "#0f0";
const blue = "#00f";

const slideIn = `@keyframes slideIn {
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
    slideInOut: "slideIn 3s, slideOut 3s",
    "slideIn-@": slideIn,
    "slideOut-@": `@keyframes slideOut {
    to {
        transform: translateX(var(--tx: -100%));
    }
}`,
    gradient: `linear-gradient(90deg, ${red}, ${green}, ${blue})`,
};

// Just style
propsBuilder({ filename: "_tests_/style.css", props, selector, prefix });
propsBuilder({ filename: "_tests_/style.scss", props, selector, prefix });

// Just SCSS variables
propsBuilder({
    filename: "_tests_/var.scss",
    props,
    selector,
    prefix,
    varOnly: true,
});

// Just keyframes
propsBuilder({
    filename: "_tests_/keyframes.css",
    props,
    selector,
    prefix,
    frameOnly: true,
});

// Keyframes and SCSS variables
propsBuilder({
    filename: "_tests_/scss.scss",
    props,
    selector,
    prefix,
    frameOnly: true,
    varOnly: true,
});

// As json and keep camelCase
propsBuilder({ filename: "_tests_/tokens.json", props, keepCamelCase: true });
