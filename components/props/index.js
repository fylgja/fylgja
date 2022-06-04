import fylgjaRatio from "@fylgja/aspect-ratio";
import fylgjaEasing from "@fylgja/easing";
import fylgjaShadow from "@fylgja/shadow";
import fylgjaLayer from "@fylgja/z-layer";

const { ratio: aspectRatio } = fylgjaRatio;
const { ease, easeIn, easeOut, easeInOut, easeElastic, easeSquish } =
    fylgjaEasing;
const { shadow, innerShadow } = fylgjaShadow;
const { layer } = fylgjaLayer;

export {
    aspectRatio,
    ease,
    easeIn,
    easeOut,
    easeInOut,
    easeElastic,
    easeSquish,
    shadow,
    innerShadow,
    layer,
};

export default {
    aspectRatio,
    ...fylgjaEasing,
    ...fylgjaShadow,
    ...fylgjaLayer,
};
