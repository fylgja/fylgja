// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import Color from "colorjs.io";

const hexToHsl = (hex) =>
    new Color(hex)
        .to("hsl")
        .coords.map(Math.round)
        .reduce((acc, coord, index) => {
            if (isNaN(coord)) {
                coord = 0;
            }

            if (index > 0) return (acc += " " + coord + "%");
            return (acc += coord);
        }, "");

export default hexToHsl;
