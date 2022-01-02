import { propsBuilder } from "../index.js";

const prefix = "ftz-";
const selector = ".fylgja-test-zone";

const red = "#f00";
const green = "#0f0";
const blue = "#00f";

const slidein = `@keyframes slidein {
    from {
        transform: translateX(var(--tx: 100%));
    }
}`;

const props = {
    z1: 1,
    red: red,
    slideinout: "slidein 3s, slideout 3s",
    "slide-@": slidein,
    "slideout-@": `@keyframes slideout {
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
    filename: "_tests_/key.css",
    props,
    selector,
    prefix,
    keyOnly: true,
});

// Keyframes and SCSS variables
propsBuilder({
    filename: "_tests_/scss.scss",
    props,
    selector,
    prefix,
    keyOnly: true,
    varOnly: true,
});
