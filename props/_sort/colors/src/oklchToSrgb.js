// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import Color from "colorjs.io";

/**
 *
 * @param {string} clr - color to convert
 * @param {string} [outputSyntax=hsl] - syntax to use (default=hsl)
 * @param {boolean} [colorWrapper=false] - if to keep the color wrapper (default=false)
 * @returns {string} the color in the new syntax
 */
export default function oklchToSrgb(
    clr,
    outputSyntax = "hsl",
    colorWrapper = false
) {
    const srgb = new Color(`oklch(${clr})`).toGamut({
        space: "srgb",
        method: "clip",
    });

    if (outputSyntax === "hex") {
        return srgb.to("srgb").toString({ format: "hex" });
    }

    let color = srgb.to(outputSyntax === "rgb" ? "srgb" : "hsl").toString();
    if (!colorWrapper) {
        color = color
            .replace(outputSyntax, "")
            .replace("(", "")
            .replace(")", "");
    }

    return color;
}
