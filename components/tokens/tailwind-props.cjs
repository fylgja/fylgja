// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

module.exports = {
  "screens": {
    "xs": "420px",
    "sm": "640px",
    "md": "768px",
    "lg": "1024px",
    "xl": "1440px",
    "2xl": "2200px",
    "touch": {
      "raw": "(hover: none) and (pointer: coarse)"
    },
    "stylus": {
      "raw": "(hover: none) and (pointer: fine)"
    },
    "pointer": {
      "raw": "(hover) and (pointer: coarse)"
    },
    "mouse": {
      "raw": "(hover) and (pointer: fine)"
    }
  },
  "aspectRatio": {
    "auto": "auto",
    "square": 1,
    "video": "16/9",
    "landscape": "4/3",
    "portrait": "3/4",
    "widescreen": "16/9",
    "superwide": "21/9",
    "ultrawide": "18/5",
    "golden": "1.618/1"
  },
  "boxShadow": {
    "1": "0 2px 1px -1px hsl(0 0% 50% / calc(1% + 18%)), 0 1px 1px hsl(0 0% 50% / calc(1% + 12%)), 0 1px 3px hsl(0 0% 50% / calc(1% + 10%))",
    "2": "0 3px 1px -2px hsl(0 0% 50% / calc(1% + 18%)), 0 2px 2px hsl(0 0% 50% / calc(1% + 12%)), 0 1px 5px hsl(0 0% 50% / calc(1% + 10%))",
    "3": "0 2px 4px -1px hsl(0 0% 50% / calc(1% + 18%)), 0 4px 5px hsl(0 0% 50% / calc(1% + 12%)), 0 1px 10px hsl(0 0% 50% / calc(1% + 10%))",
    "4": "0 3px 5px -1px hsl(0 0% 50% / calc(1% + 18%)), 0 6px 10px hsl(0 0% 50% / calc(1% + 12%)), 0 1px 18px hsl(0 0% 50% / calc(1% + 10%))",
    "5": "0 5px 5px -3px hsl(0 0% 50% / calc(1% + 18%)), 0 8px 10px 1px hsl(0 0% 50% / calc(1% + 12%)), 0 3px 14px 2px hsl(0 0% 50% / calc(1% + 10%))",
    "6": "0 7px 8px -4px hsl(0 0% 50% / calc(1% + 18%)), 0 12px 17px 2px hsl(0 0% 50% / calc(1% + 12%)), 0 5px 22px 4px hsl(0 0% 50% / calc(1% + 10%))",
    "inset": {
      "0": "inset 0 0 0 1px hsl(0 0% 50% / calc(1% + 9%))",
      "1": "inset 0 1px 2px 0 hsl(0 0% 50% / calc(1% + 9%))",
      "2": "inset 0 1px 4px 0 hsl(0 0% 50% / calc(1% + 9%))",
      "3": "inset 0 2px 8px 0 hsl(0 0% 50% / calc(1% + 9%))",
      "4": "inset 0 2px 14px 0 hsl(0 0% 50% / calc(1% + 9%))"
    }
  },
  "colors": {
    "gray": {
      "50": "#f8f9fa",
      "100": "#f1f3f5",
      "200": "#e9ecef",
      "300": "#dee2e6",
      "400": "#ced4da",
      "500": "#adb5bd",
      "600": "#868e96",
      "700": "#495057",
      "800": "#343a40",
      "900": "#212529"
    },
    "slate": {
      "50": "#eceff1",
      "100": "#cfd8dc",
      "200": "#b0bec5",
      "300": "#90a4ae",
      "400": "#78909c",
      "500": "#607d8b",
      "600": "#546e7a",
      "700": "#455a64",
      "800": "#37474f",
      "900": "#263238"
    },
    "red": {
      "50": "#fff5f5",
      "100": "#ffe3e3",
      "200": "#ffc9c9",
      "300": "#ffa8a8",
      "400": "#ff8787",
      "500": "#ff6b6b",
      "600": "#fa5252",
      "700": "#f03e3e",
      "800": "#e03131",
      "900": "#c92a2a"
    },
    "pink": {
      "50": "#fff0f6",
      "100": "#ffdeeb",
      "200": "#fcc2d7",
      "300": "#faa2c1",
      "400": "#f783ac",
      "500": "#f06595",
      "600": "#e64980",
      "700": "#d6336c",
      "800": "#c2255c",
      "900": "#a61e4d"
    },
    "purple": {
      "50": "#f8f0fc",
      "100": "#f3d9fa",
      "200": "#eebefa",
      "300": "#e599f7",
      "400": "#da77f2",
      "500": "#cc5de8",
      "600": "#be4bdb",
      "700": "#ae3ec9",
      "800": "#9c36b5",
      "900": "#862e9c"
    },
    "violet": {
      "50": "#f3f0ff",
      "100": "#e5dbff",
      "200": "#d0bfff",
      "300": "#b197fc",
      "400": "#9775fa",
      "500": "#845ef7",
      "600": "#7950f2",
      "700": "#7048e8",
      "800": "#6741d9",
      "900": "#5f3dc4"
    },
    "indigo": {
      "50": "#edf2ff",
      "100": "#dbe4ff",
      "200": "#bac8ff",
      "300": "#91a7ff",
      "400": "#748ffc",
      "500": "#5c7cfa",
      "600": "#4c6ef5",
      "700": "#4263eb",
      "800": "#3b5bdb",
      "900": "#364fc7"
    },
    "blue": {
      "50": "#e7f5ff",
      "100": "#d0ebff",
      "200": "#a5d8ff",
      "300": "#74c0fc",
      "400": "#4dabf7",
      "500": "#339af0",
      "600": "#228be6",
      "700": "#1c7ed6",
      "800": "#1971c2",
      "900": "#1864ab"
    },
    "cyan": {
      "50": "#e3fafc",
      "100": "#c5f6fa",
      "200": "#99e9f2",
      "300": "#66d9e8",
      "400": "#3bc9db",
      "500": "#22b8cf",
      "600": "#15aabf",
      "700": "#1098ad",
      "800": "#0c8599",
      "900": "#0b7285"
    },
    "teal": {
      "50": "#e6fcf5",
      "100": "#c3fae8",
      "200": "#96f2d7",
      "300": "#63e6be",
      "400": "#38d9a9",
      "500": "#20c997",
      "600": "#12b886",
      "700": "#0ca678",
      "800": "#099268",
      "900": "#087f5b"
    },
    "green": {
      "50": "#ebfbee",
      "100": "#d3f9d8",
      "200": "#b2f2bb",
      "300": "#8ce99a",
      "400": "#69db7c",
      "500": "#51cf66",
      "600": "#40c057",
      "700": "#37b24d",
      "800": "#2f9e44",
      "900": "#2b8a3e"
    },
    "lime": {
      "50": "#f4fce3",
      "100": "#e9fac8",
      "200": "#d8f5a2",
      "300": "#c0eb75",
      "400": "#a9e34b",
      "500": "#94d82d",
      "600": "#82c91e",
      "700": "#74b816",
      "800": "#66a80f",
      "900": "#5c940d"
    },
    "yellow": {
      "50": "#fff9db",
      "100": "#fff3bf",
      "200": "#ffec99",
      "300": "#ffe066",
      "400": "#ffd43b",
      "500": "#fcc419",
      "600": "#fab005",
      "700": "#f59f00",
      "800": "#f08c00",
      "900": "#e67700"
    },
    "orange": {
      "50": "#fff4e6",
      "100": "#ffe8cc",
      "200": "#ffd8a8",
      "300": "#ffc078",
      "400": "#ffa94d",
      "500": "#ff922b",
      "600": "#fd7e14",
      "700": "#f76707",
      "800": "#e8590c",
      "900": "#d9480f"
    }
  },
  "spacing": {
    "size": {
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.625rem",
      "4": "0.75rem",
      "5": "0.875rem",
      "6": "1rem",
      "7": "1.25rem",
      "8": "1.5rem",
      "9": "1.75rem",
      "10": "2rem",
      "11": "2.25rem",
      "12": "2.5rem",
      "13": "2.75rem",
      "14": "3rem",
      "15": "4rem",
      "16": "5rem",
      "17": "7.5rem",
      "19": "10rem",
      "20": "15rem",
      "21": "20rem",
      "22": "30rem",
      "xxs": "240px",
      "xs": "420px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1440px",
      "xxl": "2200px"
    },
    "sizeFluid": {
      "1": "clamp(0.875rem, 1vw, 1rem)",
      "2": "clamp(1rem, 2vw, 1.5rem)",
      "3": "clamp(1.5rem, 3vw, 2rem)",
      "4": "clamp(2rem, 4vw, 3rem)",
      "5": "clamp(4rem, 5vw, 5rem)",
      "6": "clamp(5rem, 7vw, 7.5rem)",
      "7": "clamp(7.5rem, 10vw, 10rem)",
      "8": "clamp(10rem, 20vw, 15rem)",
      "9": "clamp(15rem, 30vw, 20rem)",
      "10": "clamp(20rem, 40vw, 30rem)"
    },
    "sizeContent": {
      "1": "25ch",
      "2": "45ch",
      "3": "65ch"
    },
    "sizeHeading": {
      "1": "22ch",
      "2": "28ch",
      "3": "36ch"
    }
  },
  "transitionTimingFunction": {
    "ease": {
      "1": "cubic-bezier(0.25, 0.1, 0.1, 1)",
      "2": "cubic-bezier(0.25, 0.1, 0.2, 1)",
      "3": "cubic-bezier(0.25, 0.1, 0.3, 1)",
      "4": "cubic-bezier(0.25, 0.1, 0.4, 1)",
      "5": "cubic-bezier(0.25, 0.1, 0.5, 1)"
    },
    "easeIn": {
      "1": "cubic-bezier(0.3, 0, 1, 1)",
      "2": "cubic-bezier(0.5, 0, 1, 1)",
      "3": "cubic-bezier(0.7, 0, 1, 1)",
      "4": "cubic-bezier(0.9, 0, 1, 1)",
      "5": "cubic-bezier(1, 0, 1, 1)"
    },
    "easeOut": {
      "1": "cubic-bezier(0, 0, 0.7, 1)",
      "2": "cubic-bezier(0, 0, 0.5, 1)",
      "3": "cubic-bezier(0, 0, 0.3, 1)",
      "4": "cubic-bezier(0, 0, 0.1, 1)",
      "5": "cubic-bezier(0, 0, 0, 1)"
    },
    "easeInOut": {
      "1": "cubic-bezier(0.1, 0, 0.9, 1)",
      "2": "cubic-bezier(0.3, 0, 0.7, 1)",
      "3": "cubic-bezier(0.5, 0, 0.5, 1)",
      "4": "cubic-bezier(0.7, 0, 0.3, 1)",
      "5": "cubic-bezier(0.9, 0, 0.1, 1)"
    },
    "easeElasticIn": {
      "1": "cubic-bezier(0.5, 0.25, 0.75, -0.25)",
      "2": "cubic-bezier(0.5, 0, 0.75, -0.25)",
      "3": "cubic-bezier(0.5, -0.25, 0.75, -0.25)",
      "4": "cubic-bezier(0.5, -0.5, 0.75, -0.25)",
      "5": "cubic-bezier(0.5, -0.75, 0.75, -0.25)"
    },
    "easeElasticOut": {
      "1": "cubic-bezier(0.5, 0.75, 0.75, 1.25)",
      "2": "cubic-bezier(0.5, 1, 0.75, 1.25)",
      "3": "cubic-bezier(0.5, 1.25, 0.75, 1.25)",
      "4": "cubic-bezier(0.5, 1.5, 0.75, 1.25)",
      "5": "cubic-bezier(0.5, 1.75, 0.75, 1.25)"
    },
    "easeElasticInOut": {
      "1": "cubic-bezier(0.5, -0.1, 0.1, 1.5)",
      "2": "cubic-bezier(0.5, -0.3, 0.1, 1.5)",
      "3": "cubic-bezier(0.5, -0.5, 0.1, 1.5)",
      "4": "cubic-bezier(0.5, -0.7, 0.1, 1.5)",
      "5": "cubic-bezier(0.5, -0.9, 0.1, 1.5)"
    }
  },
  "zIndex": {
    "1": 1,
    "2": 2,
    "3": 4,
    "4": 6,
    "5": 8
  }
};
