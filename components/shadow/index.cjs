// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

const shadows = {
    "shadow-color": "0 0% 50%",
    "shadow-weight": "1%",
    "shadow-color-@media:dark": "220 40% 2%",
    "shadow-weight-@media:dark": "25%",
    "shadow": {
        "1": [
            "0 2px 1px -1px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 18%))",
            "0 1px 1px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 12%))",
            "0 1px 3px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 10%))"
        ],
        "2": [
            "0 3px 1px -2px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 18%))",
            "0 2px 2px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 12%))",
            "0 1px 5px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 10%))"
        ],
        "3": [
            "0 2px 4px -1px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 18%))",
            "0 4px 5px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 12%))",
            "0 1px 10px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 10%))"
        ],
        "4": [
            "0 3px 5px -1px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 18%))",
            "0 6px 10px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 12%))",
            "0 1px 18px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 10%))"
        ],
        "5": [
            "0 5px 5px -3px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 18%))",
            "0 8px 10px 1px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 12%))",
            "0 3px 14px 2px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 10%))"
        ],
        "6": [
            "0 7px 8px -4px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 18%))",
            "0 12px 17px 2px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 12%))",
            "0 5px 22px 4px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 10%))"
        ]
    },
    "insetShadow": {
        "0": "inset 0 0 0 1px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 9%))",
        "1": "inset 0 1px 2px 0 hsl(var(--shadow-color) / calc(var(--shadow-weight) + 9%))",
        "2": "inset 0 1px 4px 0 hsl(var(--shadow-color) / calc(var(--shadow-weight) + 9%))",
        "3": "inset 0 2px 8px 0 hsl(var(--shadow-color) / calc(var(--shadow-weight) + 9%))",
        "4": "inset 0 2px 14px 0 hsl(var(--shadow-color) / calc(var(--shadow-weight) + 9%))"
    }
};

const staticShadows = {
    "shadow": {
        "1": "0 2px 1px -1px hsl(0 0% 50% / 19%),0 1px 1px hsl(0 0% 50% / 13%),0 1px 3px hsl(0 0% 50% / 11%)",
        "2": "0 3px 1px -2px hsl(0 0% 50% / 19%),0 2px 2px hsl(0 0% 50% / 13%),0 1px 5px hsl(0 0% 50% / 11%)",
        "3": "0 2px 4px -1px hsl(0 0% 50% / 19%),0 4px 5px hsl(0 0% 50% / 13%),0 1px 10px hsl(0 0% 50% / 11%)",
        "4": "0 3px 5px -1px hsl(0 0% 50% / 19%),0 6px 10px hsl(0 0% 50% / 13%),0 1px 18px hsl(0 0% 50% / 11%)",
        "5": "0 5px 5px -3px hsl(0 0% 50% / 19%),0 8px 10px 1px hsl(0 0% 50% / 13%),0 3px 14px 2px hsl(0 0% 50% / 11%)",
        "6": "0 7px 8px -4px hsl(0 0% 50% / 19%),0 12px 17px 2px hsl(0 0% 50% / 13%),0 5px 22px 4px hsl(0 0% 50% / 11%)"
    },
    "insetShadow": {
        "0": "inset 0 0 0 1px hsl(0 0% 50% / 10%)",
        "1": "inset 0 1px 2px 0 hsl(0 0% 50% / 10%)",
        "2": "inset 0 1px 4px 0 hsl(0 0% 50% / 10%)",
        "3": "inset 0 2px 8px 0 hsl(0 0% 50% / 10%)",
        "4": "inset 0 2px 14px 0 hsl(0 0% 50% / 10%)"
    }
};

module.exports = { ...shadows, staticShadows };
