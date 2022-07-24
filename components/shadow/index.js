// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

/**
 * Converts any dynamic shadow to a static shadow.
 *
 * @param {{ [key: string | number]: string }} map - Array of shadow maps
 * @param {String} color - Color of shadow
 * @param {String} weight - Shadow weight
 * @returns {{ [key: string | number]: string }} - Array of shadow maps
 */
function replaceShadowVars(map, color, weight) {
    return Object.fromEntries(
        Object.entries(map).map(([key, value]) => {
            value = value.replaceAll("var(--shadow-color)", color);
            value = value.replaceAll("var(--shadow-weight)", weight);
            return [key, value];
        })
    );
}

const shadowUmbra =
    "hsl(var(--shadow-color) / calc(var(--shadow-weight) + 18%))";
const shadowPenumbra =
    "hsl(var(--shadow-color) / calc(var(--shadow-weight) + 12%))";
const shadowAmbient =
    "hsl(var(--shadow-color) / calc(var(--shadow-weight) + 10%))";
const shadowInset =
    "hsl(var(--shadow-color) / calc(var(--shadow-weight) + 9%))";
const shadows = {
    "shadow-color": "0 0% 50%",
    "shadow-weight": "1%",
    shadow: {
        1: `0 2px 1px -1px ${shadowUmbra}, 0 1px 1px ${shadowPenumbra}, 0 1px 3px ${shadowAmbient}`,
        2: `0 3px 1px -2px ${shadowUmbra}, 0 2px 2px ${shadowPenumbra}, 0 1px 5px ${shadowAmbient}`,
        3: `0 2px 4px -1px ${shadowUmbra}, 0 4px 5px ${shadowPenumbra}, 0 1px 10px ${shadowAmbient}`,
        4: `0 3px 5px -1px ${shadowUmbra}, 0 6px 10px ${shadowPenumbra}, 0 1px 18px ${shadowAmbient}`,
        5: `0 5px 5px -3px ${shadowUmbra}, 0 8px 10px 1px ${shadowPenumbra}, 0 3px 14px 2px ${shadowAmbient}`,
        6: `0 7px 8px -4px ${shadowUmbra}, 0 12px 17px 2px ${shadowPenumbra}, 0 5px 22px 4px ${shadowAmbient}`,
    },
    insetShadow: {
        0: `inset 0 0 0 1px ${shadowInset}`,
        1: `inset 0 1px 2px 0 ${shadowInset}`,
        2: `inset 0 1px 4px 0 ${shadowInset}`,
        3: `inset 0 2px 8px 0 ${shadowInset}`,
        4: `inset 0 2px 14px 0 ${shadowInset}`,
    },
};

export default shadows;

export const staticShadows = {
    shadow: {
        ...replaceShadowVars(
            shadows.shadow,
            shadows["shadow-color"],
            shadows["shadow-weight"]
        ),
    },
    insetShadow: {
        ...replaceShadowVars(
            shadows.insetShadow,
            shadows["shadow-color"],
            shadows["shadow-weight"]
        ),
    },
};
