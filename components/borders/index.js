// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

const baseSizes = {
    1: "0.125rem",
    2: "0.25rem",
    3: "0.375rem",
    4: "0.5rem",
    5: "0.75rem",
    6: "1rem",
};

function toVW(value) {
    value.replace("rem", "vw");
    return value;
}

export default {
    borderSize: baseSizes,
    radius: {
        ...baseSizes,
        full: "1e5px",
        fluid: {
            1: `clamp(${baseSizes[1]}, ${toVW(baseSizes[4])}, ${baseSizes[4]})`,
            2: `clamp(${baseSizes[2]}, ${toVW(baseSizes[5])}, ${baseSizes[5]})`,
            3: `clamp(${baseSizes[3]}, ${toVW(baseSizes[6])}, ${baseSizes[6]})`,
            4: `clamp(2rem, 4vw, 4rem)`,
            5: `clamp(3rem, 6vw, 5rem)`,
            6: `clamp(4rem, 6vw, 6rem)`,
        },
        blob: {
            1: "30% 70% 70% 30% / 53% 30% 70% 47%",
            2: "53% 47% 34% 66% / 63% 46% 54% 37%",
            3: "37% 63% 56% 44% / 49% 56% 44% 51%",
            4: "63% 37% 37% 63% / 43% 37% 63% 57%",
            5: "49% 51% 48% 52% / 57% 44% 56% 43%",
        },
        conditional: {
            1: `clamp(0px, calc(100vw - 100%) * 1e5, ${baseSizes[1]})`,
            2: `clamp(0px, calc(100vw - 100%) * 1e5, ${baseSizes[2]})`,
            3: `clamp(0px, calc(100vw - 100%) * 1e5, ${baseSizes[3]})`,
            4: `clamp(0px, calc(100vw - 100%) * 1e5, ${baseSizes[4]})`,
            5: `clamp(0px, calc(100vw - 100%) * 1e5, ${baseSizes[5]})`,
            6: `clamp(0px, calc(100vw - 100%) * 1e5, ${baseSizes[6]})`,
        },
    },
};
