// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

const mqValues = {
    xs: "420px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1440px",
    xxl: "2200px",
};

export default {
    // Sizing mq's
    xs: mqValues.xs,
    xsMin: `(width >= ${mqValues.xs})`,
    xsMax: `(width < ${mqValues.xs})`,

    sm: mqValues.sm,
    smMin: `(width >= ${mqValues.sm})`,
    smMax: `(width < ${mqValues.sm})`,

    md: mqValues.md,
    mdMin: `(width >= ${mqValues.md})`,
    mdMax: `(width < ${mqValues.md})`,

    lg: mqValues.lg,
    lgMin: `(width >= ${mqValues.lg})`,
    lgMax: `(width < ${mqValues.lg})`,

    xl: mqValues.xl,
    xlMin: `(width >= ${mqValues.xl})`,
    xlMax: `(width < ${mqValues.xl})`,

    xxl: mqValues.xxl,
    xxlMin: `(width >= ${mqValues.xxl})`,
    xxlMax: `(width < ${mqValues.xxl})`,

    // Device input
    hdColor: "(dynamic-range: high)",
    touch: "(hover: none) and (pointer: coarse)",
    stylus: "(hover: none) and (pointer: fine)",
    pointer: "(hover) and (pointer: coarse)",
    mouse: "(hover) and (pointer: fine)",

    // prefers mq's
    schemeDark: "(prefers-color-scheme: dark)",
    schemeLight: "(prefers-color-scheme: light)",

    motionSafe: "(prefers-reduced-motion: no-preference)",
    motionReduce: "(prefers-reduced-motion: reduce)",

    opacitySafe: "(prefers-reduced-transparency: no-preference)",
    opacityReduce: "(prefers-reduced-transparency: reduce)",

    dataSafe: "(prefers-reduced-data: no-preference)",
    dataReduce: "(prefers-reduced-data: reduce)",

    contrastMore: "(prefers-contrast: more)",
    contrastLess: "(prefers-contrast: less)",

    portrait: "(orientation: portrait)",
    landscape: "(orientation: landscape)",
};
