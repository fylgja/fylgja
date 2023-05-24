// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import buildJsFile from "./buildJsFile.js";

const contrast = [
    ".02",
    ".04",
    ".12",
    ".18",
    ".2",
    ".22",
    ".21",
    ".2",
    ".18",
    ".14",
    ".12",
    ".08",
    ".04",
];
const contrastSoft = ".03";
const lightMap = [
    "99%",
    "94%",
    "88%",
    "80%",
    "74%",
    "67%",
    "59%",
    "52%",
    "44%",
    "36%",
    "24%",
    "18%",
    "10%",
];

const hue = {
    redGray: 18,
    greenGray: 152,
    blueGray: 258,
    pink: 350,
    purple: 330,
    violet: 310,
    indigo: 290,
    blue: 260,
    cyan: 220,
    teal: 170,
    green: 140,
    lime: 125,
    yellow: 102,
    orange: 70,
    red: 30,
};

// The default is now using the more flexible syntax from oklch
const props = {
    redGray: {
        ...lightMap.map((light) => `${light} ${contrastSoft} ${hue.redGray}`),
    },
    greenGray: {
        ...lightMap.map((light) => `${light} ${contrastSoft} ${hue.greenGray}`),
    },
    blueGray: {
        ...lightMap.map((light) => `${light} ${contrastSoft} ${hue.blueGray}`),
    },
    gray: {
        ...lightMap.map((light) => `${light} 0 0`),
    },
    pink: {
        ...lightMap.map(
            (light, index) => `${light} ${contrast[index]} ${hue.pink}`
        ),
    },
    purple: {
        ...lightMap.map(
            (light, index) => `${light} ${contrast[index]} ${hue.purple}`
        ),
    },
    violet: {
        ...lightMap.map(
            (light, index) => `${light} ${contrast[index]} ${hue.violet}`
        ),
    },
    indigo: {
        ...lightMap.map(
            (light, index) => `${light} ${contrast[index]} ${hue.indigo}`
        ),
    },
    blue: {
        ...lightMap.map(
            (light, index) => `${light} ${contrast[index]} ${hue.blue}`
        ),
    },
    cyan: {
        ...lightMap.map(
            (light, index) => `${light} ${contrast[index]} ${hue.cyan}`
        ),
    },
    teal: {
        ...lightMap.map(
            (light, index) => `${light} ${contrast[index]} ${hue.teal}`
        ),
    },
    green: {
        ...lightMap.map(
            (light, index) => `${light} ${contrast[index]} ${hue.green}`
        ),
    },
    lime: {
        ...lightMap.map(
            (light, index) => `${light} ${contrast[index]} ${hue.lime}`
        ),
    },
    yellow: {
        ...lightMap.map(
            (light, index) => `${light} ${contrast[index]} ${hue.yellow}`
        ),
    },
    orange: {
        ...lightMap.map(
            (light, index) => `${light} ${contrast[index]} ${hue.orange}`
        ),
    },
    red: {
        ...lightMap.map(
            (light, index) => `${light} ${contrast[index]} ${hue.red}`
        ),
    },
};

const propsTemplate = {
    color: {
        ...lightMap.map(
            (light, index) => `${light} ${contrast[index]} var(--color-hue, 0)`
        ),
    },
    soft: {
        ...lightMap.map(
            (light) => `${light} ${contrastSoft} var(--soft-hue, 0)`
        ),
    },
    gray: {
        ...lightMap.map((light) => `${light} 0 var(--gray-hue, 0)`),
    },
};

// For static exports
buildJsFile("oklch-static.cjs", props);
buildJsFile("oklch-static.js", props);

// For dynamic exports
buildJsFile("oklch.cjs", propsTemplate);
buildJsFile("oklch.js", propsTemplate);
buildJsFile("oklch-hues.cjs", hue);
buildJsFile("oklch-hues.js", hue);

export default props;
