// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import buildJsFile from "./buildJsFile.js";

const contrast = [0.05, 0.1, 0.2, 0.25, 0.31, 0.27, 0.25, 0.2, 0.2, 0.1];
const contrastGray = 0.03;
const lightMap = [
    "99%",
    "90%",
    "80%",
    "72%",
    "67%",
    "50%",
    "35%",
    "25%",
    "13%",
    "5%",
];

const hue = {
    redGray: 18,
    greenGray: 152,
    blueGray: 258,
    gray: 240,
    pink: 350,
    purple: 330,
    violet: 310,
    indigo: 290,
    blue: 260,
    cyan: 220,
    teal: 170,
    green: 140,
    lime: 125,
    yellow: 110,
    orange: 70,
    red: 30,
};

// The default is now using the more flexible syntax from oklch
const props = {
    redGray: {
        ...lightMap.map((light) => `${light} ${contrastGray} ${hue.redGray}`),
    },
    greenGray: {
        ...lightMap.map((light) => `${light} ${contrastGray} ${hue.greenGray}`),
    },
    blueGray: {
        ...lightMap.map((light) => `${light} ${contrastGray} ${hue.blueGray}`),
    },
    gray: {
        ...lightMap.map((light) => `${light} ${contrastGray} ${hue.gray}`),
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
    gray: {
        ...lightMap.map(
            (light) => `${light} ${contrastGray} var(--gray-hue, 0)`
        ),
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
