// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

// ? Consider swapping this logic with colorjs.io library later, when stable

function hexToHsl(colorInput) {
    // Convert hex to RGB first
    let r = 0,
        g = 0,
        b = 0;

    if (colorInput.length == 4) {
        r = "0x" + colorInput[1] + colorInput[1];
        g = "0x" + colorInput[2] + colorInput[2];
        b = "0x" + colorInput[3] + colorInput[3];
    } else if (colorInput.length == 7) {
        r = "0x" + colorInput[1] + colorInput[2];
        g = "0x" + colorInput[3] + colorInput[4];
        b = "0x" + colorInput[5] + colorInput[6];
    }

    // Then to HSL
    r /= 255;
    g /= 255;
    b /= 255;

    let cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;

    if (delta == 0) h = 0;
    else if (cmax == r) h = ((g - b) / delta) % 6;
    else if (cmax == g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    if (h < 0) h += 360;

    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +Math.round((s * 100).toFixed(1));
    l = +Math.round((l * 100).toFixed(1));

    return h + " " + s + "% " + l + "%";
}

export default hexToHsl;
