// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import buildJsFile from "./buildJsFile.js";

const oklchMap = [
    ["99%", ".03"],
    ["95%", ".06"],
    ["88%", ".12"],
    ["80%", ".14"],
    ["74%", ".16"],
    ["68%", ".19"],
    ["63%", ".20"],
    ["58%", ".21"],
    ["53%", ".20"],
    ["49%", ".19"],
    ["40%", ".17"],
    ["34%", ".15"],
    ["23%", ".12"],
    ["16%", ".08"],
    ["10%", ".05"],
];

const contrastSoft = ".03";

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
    yellow: 100,
    orange: 70,
    red: 25,
};

// The default is now using the more flexible syntax from oklch
const props = {
    redGray: {
        ...oklchMap.map(([light]) => `${light} ${contrastSoft} ${hue.redGray}`),
    },
    greenGray: {
        ...oklchMap.map(
            ([light]) => `${light} ${contrastSoft} ${hue.greenGray}`
        ),
    },
    blueGray: {
        ...oklchMap.map(
            ([light]) => `${light} ${contrastSoft} ${hue.blueGray}`
        ),
    },
    gray: {
        ...oklchMap.map(([light, contrast]) => `${light} 0 0`),
    },
    pink: {
        ...oklchMap.map(
            ([light, contrast]) => `${light} ${contrast} ${hue.pink}`
        ),
    },
    purple: {
        ...oklchMap.map(
            ([light, contrast]) => `${light} ${contrast} ${hue.purple}`
        ),
    },
    violet: {
        ...oklchMap.map(
            ([light, contrast]) => `${light} ${contrast} ${hue.violet}`
        ),
    },
    indigo: {
        ...oklchMap.map(
            ([light, contrast]) => `${light} ${contrast} ${hue.indigo}`
        ),
    },
    blue: {
        ...oklchMap.map(
            ([light, contrast]) => `${light} ${contrast} ${hue.blue}`
        ),
    },
    cyan: {
        ...oklchMap.map(
            ([light, contrast]) => `${light} ${contrast} ${hue.cyan}`
        ),
    },
    teal: {
        ...oklchMap.map(
            ([light, contrast]) => `${light} ${contrast} ${hue.teal}`
        ),
    },
    green: {
        ...oklchMap.map(
            ([light, contrast]) => `${light} ${contrast} ${hue.green}`
        ),
    },
    lime: {
        ...oklchMap.map(
            ([light, contrast]) => `${light} ${contrast} ${hue.lime}`
        ),
    },
    yellow: {
        ...oklchMap.map(
            ([light, contrast]) => `${light} ${contrast} ${hue.yellow}`
        ),
    },
    orange: {
        ...oklchMap.map(
            ([light, contrast]) => `${light} ${contrast} ${hue.orange}`
        ),
    },
    red: {
        ...oklchMap.map(
            ([light, contrast]) => `${light} ${contrast} ${hue.red}`
        ),
    },
};

const propsTemplate = {
    color: {
        ...oklchMap.map(
            ([light, contrast]) => `${light} ${contrast} var(--color-hue, 0)`
        ),
    },
    soft: {
        ...oklchMap.map(
            ([light]) => `${light} ${contrastSoft} var(--soft-hue, 0)`
        ),
    },
    gray: {
        ...oklchMap.map(([light]) => `${light} 0 var(--gray-hue, 0)`),
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
