export const shadows: {
    "shadow-color": {
        umbra: string;
        penumbra: string;
        ambient: string;
    };
    shadow: {
        1: string[];
        2: string[];
        3: string[];
        4: string[];
        5: string[];
        6: string[];
    };
};
export const darkModeShadows: {
    "shadow-color-@media:dark": string;
    "shadow-strength-@media:dark": string;
};
export { shadows as default };
