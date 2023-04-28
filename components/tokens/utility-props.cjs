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
  "borderWidth": {
    "0": "0",
    "2": "0.125rem",
    "4": "0.25rem",
    "6": "0.375rem",
    "8": "0.5rem",
    "10": "0.75rem",
    "12": "1rem",
    "DEFAULT": "1px"
  },
  "borderRadius": {
    "none": 0,
    "sm": "0.125rem",
    "DEFAULT": "0.25rem",
    "md": "0.375rem",
    "lg": "0.5rem",
    "xl": "0.75rem",
    "2xl": "1rem",
    "full": "1e5px",
    "fluid-sm": "clamp(0.125rem, 0.5rem, 0.5rem)",
    "fluid": "clamp(0.25rem, 0.75rem, 0.75rem)",
    "fluid-md": "clamp(0.375rem, 1rem, 1rem)",
    "fluid-lg": "clamp(2rem, 4vw, 4rem)",
    "fluid-xl": "clamp(3rem, 6vw, 5rem)",
    "fluid-2xl": "clamp(4rem, 6vw, 6rem)",
    "blob-1": "30% 70% 70% 30% / 53% 30% 70% 47%",
    "blob-2": "53% 47% 34% 66% / 63% 46% 54% 37%",
    "blob-3": "37% 63% 56% 44% / 49% 56% 44% 51%",
    "blob-4": "63% 37% 37% 63% / 43% 37% 63% 57%",
    "blob-5": "49% 51% 48% 52% / 57% 44% 56% 43%",
    "conditional-sm": "clamp(0px, calc(100vw - 100%) * 1e5, 0.125rem)",
    "conditional": "clamp(0px, calc(100vw - 100%) * 1e5, 0.25rem)",
    "conditional-md": "clamp(0px, calc(100vw - 100%) * 1e5, 0.375rem)",
    "conditional-lg": "clamp(0px, calc(100vw - 100%) * 1e5, 0.5rem)",
    "conditional-xl": "clamp(0px, calc(100vw - 100%) * 1e5, 0.75rem)",
    "conditional-2xl": "clamp(0px, calc(100vw - 100%) * 1e5, 1rem)"
  },
  "boxShadow": {
    "none": 0,
    "sm": "0 2px 1px -1px hsl(0 0% 50% / 19%),0 1px 1px hsl(0 0% 50% / 13%),0 1px 3px hsl(0 0% 50% / 11%)",
    "DEFAULT": "0 3px 1px -2px hsl(0 0% 50% / 19%),0 2px 2px hsl(0 0% 50% / 13%),0 1px 5px hsl(0 0% 50% / 11%)",
    "md": "0 2px 4px -1px hsl(0 0% 50% / 19%),0 4px 5px hsl(0 0% 50% / 13%),0 1px 10px hsl(0 0% 50% / 11%)",
    "lg": "0 3px 5px -1px hsl(0 0% 50% / 19%),0 6px 10px hsl(0 0% 50% / 13%),0 1px 18px hsl(0 0% 50% / 11%)",
    "xl": "0 5px 5px -3px hsl(0 0% 50% / 19%),0 8px 10px 1px hsl(0 0% 50% / 13%),0 3px 14px 2px hsl(0 0% 50% / 11%)",
    "2xl": "0 7px 8px -4px hsl(0 0% 50% / 19%),0 12px 17px 2px hsl(0 0% 50% / 13%),0 5px 22px 4px hsl(0 0% 50% / 11%)",
    "inset": "inset 0 0 0 1px hsl(0 0% 50% / 10%)",
    "inset-1": "inset 0 1px 2px 0 hsl(0 0% 50% / 10%)",
    "inset-2": "inset 0 1px 4px 0 hsl(0 0% 50% / 10%)",
    "inset-3": "inset 0 2px 8px 0 hsl(0 0% 50% / 10%)",
    "inset-4": "inset 0 2px 14px 0 hsl(0 0% 50% / 10%)"
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
    "xxl": "2200px",
    "prose-xs": "25ch",
    "prose-sm": "45ch",
    "prose": "65ch",
    "heading-xs": "22ch",
    "heading-sm": "28ch",
    "heading": "36ch"
  },
  "fontSize": {
    "sm": [
      "0.875rem",
      "1.25"
    ],
    "base": [
      "1rem",
      "1.25"
    ],
    "md": [
      "1.125rem",
      "1.25"
    ],
    "lg": [
      "1.25rem",
      "1.25"
    ],
    "xl": [
      "1.5rem",
      "1.25"
    ],
    "2xl": [
      "1.875rem",
      "1.1"
    ],
    "3xl": [
      "2rem",
      "1.1"
    ],
    "4xl": [
      "2.25rem",
      "1.1"
    ],
    "5xl": [
      "3rem",
      "1.1"
    ],
    "fluid-sm": [
      "clamp(0.875rem, 1.5vw, 1rem)",
      "1.25"
    ],
    "fluid-base": [
      "clamp(1rem, 2vw, 1.125rem)",
      "1.25"
    ],
    "fluid-md": [
      "clamp(1.25rem, 2vw, 1.5rem)",
      "1.25"
    ],
    "fluid-lg": [
      "clamp(1.5rem, 3vw, 1.875rem)",
      "1.25"
    ],
    "fluid-xl": [
      "clamp(2rem, 4vw, 3rem)",
      "1.25"
    ]
  },
  "lineHeight": {
    "none": "1.1",
    "tight": "1.25",
    "snug": "1.375",
    "normal": "1.5",
    "relaxed": "1.8"
  },
  "transitionTimingFunction": {
    "ease-linear": "linear",
    "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
    "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
    "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
    "ease-1": "cubic-bezier(0.25, 0.1, 0.1, 1)",
    "ease-2": "cubic-bezier(0.25, 0.1, 0.2, 1)",
    "ease-3": "cubic-bezier(0.25, 0.1, 0.3, 1)",
    "ease-4": "cubic-bezier(0.25, 0.1, 0.4, 1)",
    "ease-5": "cubic-bezier(0.25, 0.1, 0.5, 1)",
    "ease-in-1": "cubic-bezier(0.3, 0, 1, 1)",
    "ease-in-2": "cubic-bezier(0.5, 0, 1, 1)",
    "ease-in-3": "cubic-bezier(0.7, 0, 1, 1)",
    "ease-in-4": "cubic-bezier(0.9, 0, 1, 1)",
    "ease-in-5": "cubic-bezier(1, 0, 1, 1)",
    "ease-out-1": "cubic-bezier(0, 0, 0.7, 1)",
    "ease-out-2": "cubic-bezier(0, 0, 0.5, 1)",
    "ease-out-3": "cubic-bezier(0, 0, 0.3, 1)",
    "ease-out-4": "cubic-bezier(0, 0, 0.1, 1)",
    "ease-out-5": "cubic-bezier(0, 0, 0, 1)",
    "ease-in-out-1": "cubic-bezier(0.1, 0, 0.9, 1)",
    "ease-in-out-2": "cubic-bezier(0.3, 0, 0.7, 1)",
    "ease-in-out-3": "cubic-bezier(0.5, 0, 0.5, 1)",
    "ease-in-out-4": "cubic-bezier(0.7, 0, 0.3, 1)",
    "ease-in-out-5": "cubic-bezier(0.9, 0, 0.1, 1)",
    "ease-elastic-in-1": "cubic-bezier(0.5, 0.25, 0.75, -0.25)",
    "ease-elastic-in-2": "cubic-bezier(0.5, 0, 0.75, -0.25)",
    "ease-elastic-in-3": "cubic-bezier(0.5, -0.25, 0.75, -0.25)",
    "ease-elastic-in-4": "cubic-bezier(0.5, -0.5, 0.75, -0.25)",
    "ease-elastic-in-5": "cubic-bezier(0.5, -0.75, 0.75, -0.25)",
    "ease-elastic-out-1": "cubic-bezier(0.5, 0.75, 0.75, 1.25)",
    "ease-elastic-out-2": "cubic-bezier(0.5, 1, 0.75, 1.25)",
    "ease-elastic-out-3": "cubic-bezier(0.5, 1.25, 0.75, 1.25)",
    "ease-elastic-out-4": "cubic-bezier(0.5, 1.5, 0.75, 1.25)",
    "ease-elastic-out-5": "cubic-bezier(0.5, 1.75, 0.75, 1.25)",
    "ease-elastic-in-out-1": "cubic-bezier(0.5, -0.1, 0.1, 1.5)",
    "ease-elastic-in-out-2": "cubic-bezier(0.5, -0.3, 0.1, 1.5)",
    "ease-elastic-in-out-3": "cubic-bezier(0.5, -0.5, 0.1, 1.5)",
    "ease-elastic-in-out-4": "cubic-bezier(0.5, -0.7, 0.1, 1.5)",
    "ease-elastic-in-out-5": "cubic-bezier(0.5, -0.9, 0.1, 1.5)"
  },
  "zIndex": {
    "0": 0,
    "10": 1,
    "20": 2,
    "30": 4,
    "40": 6,
    "50": 8
  }
};
