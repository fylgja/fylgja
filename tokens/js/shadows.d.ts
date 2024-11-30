export namespace shadows {
    let shadow: {
        strength: string;
        color: {
            DEFAULT: string;
            umbra: string;
            penumbra: string;
            ambient: string;
        };
        1: string[];
        2: string[];
        3: string[];
        4: string[];
        5: string[];
        6: string[];
    };
}
export const darkModeShadows: {
    "shadow-color-@media:dark": string;
    "shadow-strength-@media:dark": string;
};
export { shadows as default };
