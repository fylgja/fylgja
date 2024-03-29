// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

const umbra = "calc(var(--shadow-weight) + 18%)";
const penumbra = "calc(var(--shadow-weight) + 12%)";
const ambient = "calc(var(--shadow-weight) + 10%)";
const shadowInset = "calc(var(--shadow-weight) + 9%)";

const shadow = {
    1: [
        `0 2px 1px -1px hsl(var(--shadow-color) / ${umbra})`,
        `0 1px 1px hsl(var(--shadow-color) / ${penumbra})`,
        `0 1px 3px hsl(var(--shadow-color) / ${ambient})`,
    ],
    2: [
        `0 3px 1px -2px hsl(var(--shadow-color) / ${umbra})`,
        `0 2px 2px hsl(var(--shadow-color) / ${penumbra})`,
        `0 1px 5px hsl(var(--shadow-color) / ${ambient})`,
    ],
    3: [
        `0 2px 4px -1px hsl(var(--shadow-color) / ${umbra})`,
        `0 4px 5px hsl(var(--shadow-color) / ${penumbra})`,
        `0 1px 10px hsl(var(--shadow-color) / ${ambient})`,
    ],
    4: [
        `0 3px 5px -1px hsl(var(--shadow-color) / ${umbra})`,
        `0 6px 10px hsl(var(--shadow-color) / ${penumbra})`,
        `0 1px 18px hsl(var(--shadow-color) / ${ambient})`,
    ],
    5: [
        `0 5px 5px -3px hsl(var(--shadow-color) / ${umbra})`,
        `0 8px 10px 1px hsl(var(--shadow-color) / ${penumbra})`,
        `0 3px 14px 2px hsl(var(--shadow-color) / ${ambient})`,
    ],
    6: [
        `0 7px 8px -4px hsl(var(--shadow-color) / ${umbra})`,
        `0 12px 17px 2px hsl(var(--shadow-color) / ${penumbra})`,
        `0 5px 22px 4px hsl(var(--shadow-color) / ${ambient})`,
    ],
};

// TODO for v2, start from 1
const insetShadow = {
    0: `inset 0 0 0 1px hsl(var(--shadow-color) / ${shadowInset})`,
    1: `inset 0 1px 2px 0 hsl(var(--shadow-color) / ${shadowInset})`,
    2: `inset 0 1px 4px 0 hsl(var(--shadow-color) / ${shadowInset})`,
    3: `inset 0 2px 8px 0 hsl(var(--shadow-color) / ${shadowInset})`,
    4: `inset 0 2px 14px 0 hsl(var(--shadow-color) / ${shadowInset})`,
};

const shadows = {
    "shadow-color": "0 0% 50%",
    "shadow-weight": "1%",
    "shadow-color-@media:dark": "220 40% 2%",
    "shadow-weight-@media:dark": "25%",
    shadow,
    insetShadow,
};

export default shadows;

const staticShadow = Object.fromEntries(
    Object.entries(shadow).map(([key, value]) => {
        value = value.toString();
        value = value.replaceAll(
            "var(--shadow-color)",
            shadows["shadow-color"]
        );
        value = value.replaceAll(umbra, "19%");
        value = value.replaceAll(penumbra, "13%");
        value = value.replaceAll(ambient, "11%");
        return [key, value];
    })
);

const staticInsetShadow = Object.fromEntries(
    Object.entries(insetShadow).map(([key, value]) => {
        value = value.replaceAll(
            "var(--shadow-color)",
            shadows["shadow-color"]
        );
        value = value.replaceAll(shadowInset, "10%");
        return [key, value];
    })
);

export const staticShadows = {
    shadow: staticShadow,
    insetShadow: staticInsetShadow,
};
