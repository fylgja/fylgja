// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

module.exports = {
  "border": {
    "size": {
      "1": "0.125rem",
      "2": "0.25rem",
      "3": "0.375rem",
      "4": "0.5rem",
      "5": "0.75rem",
      "6": "1rem"
    }
  },
  "radius": {
    "1": "0.125rem",
    "2": "0.25rem",
    "3": "0.375rem",
    "4": "0.5rem",
    "5": "0.75rem",
    "6": "1rem",
    "full": "1e5px",
    "fluid": {
      "1": "clamp(0.125rem, 0.5rem, 0.5rem)",
      "2": "clamp(0.25rem, 0.75rem, 0.75rem)",
      "3": "clamp(0.375rem, 1rem, 1rem)",
      "4": "clamp(2rem, 4vw, 4rem)",
      "5": "clamp(3rem, 6vw, 5rem)",
      "6": "clamp(4rem, 6vw, 6rem)"
    },
    "blob": {
      "1": "30% 70% 70% 30% / 53% 30% 70% 47%",
      "2": "53% 47% 34% 66% / 63% 46% 54% 37%",
      "3": "37% 63% 56% 44% / 49% 56% 44% 51%",
      "4": "63% 37% 37% 63% / 43% 37% 63% 57%",
      "5": "49% 51% 48% 52% / 57% 44% 56% 43%"
    },
    "conditional": {
      "1": "clamp(0px, calc(100vw - 100%) * 1e5, 0.125rem)",
      "2": "clamp(0px, calc(100vw - 100%) * 1e5, 0.25rem)",
      "3": "clamp(0px, calc(100vw - 100%) * 1e5, 0.375rem)",
      "4": "clamp(0px, calc(100vw - 100%) * 1e5, 0.5rem)",
      "5": "clamp(0px, calc(100vw - 100%) * 1e5, 0.75rem)",
      "6": "clamp(0px, calc(100vw - 100%) * 1e5, 1rem)"
    }
  },
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
  },
  "fontSize": {
    "1": "0.875rem",
    "2": "1rem",
    "3": "1.125rem",
    "4": "1.25rem",
    "5": "1.5rem",
    "6": "1.875rem",
    "7": "2rem",
    "8": "2.25rem",
    "9": "3rem",
    "fluid": {
      "1": "clamp(0.875rem, 1.5vw, 1rem)",
      "2": "clamp(1rem, 2vw, 1.125rem)",
      "3": "clamp(1.25rem, 2vw, 1.5rem)",
      "4": "clamp(1.5rem, 3vw, 1.875rem)",
      "5": "clamp(2rem, 4vw, 3rem)"
    }
  },
  "lineHeight": {
    "1": "1.1",
    "2": "1.25",
    "3": "1.375",
    "4": "1.5",
    "5": "1.8"
  },
  "ratio": {
    "box": 1,
    "landscape": "4/3",
    "portrait": "3/4",
    "widescreen": "16/9",
    "superwide": "21/9",
    "ultrawide": "18/5",
    "golden": "1.618/1"
  },
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
  },
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
  "sizeContent": {
    "1": "25ch",
    "2": "45ch",
    "3": "65ch"
  },
  "sizeHeading": {
    "1": "22ch",
    "2": "28ch",
    "3": "36ch"
  },
  "layer": {
    "1": 1,
    "2": 2,
    "3": 4,
    "4": 6,
    "5": 8
  },
  "colors": {
    "gray": {
      "0": "#f8f9fa",
      "1": "#f1f3f5",
      "2": "#e9ecef",
      "3": "#dee2e6",
      "4": "#ced4da",
      "5": "#adb5bd",
      "6": "#868e96",
      "7": "#495057",
      "8": "#343a40",
      "9": "#212529"
    },
    "blueGray": {
      "0": "#eceff1",
      "1": "#cfd8dc",
      "2": "#b0bec5",
      "3": "#90a4ae",
      "4": "#78909c",
      "5": "#607d8b",
      "6": "#546e7a",
      "7": "#455a64",
      "8": "#37474f",
      "9": "#263238"
    },
    "red": {
      "0": "#fff5f5",
      "1": "#ffe3e3",
      "2": "#ffc9c9",
      "3": "#ffa8a8",
      "4": "#ff8787",
      "5": "#ff6b6b",
      "6": "#fa5252",
      "7": "#f03e3e",
      "8": "#e03131",
      "9": "#c92a2a"
    },
    "pink": {
      "0": "#fff0f6",
      "1": "#ffdeeb",
      "2": "#fcc2d7",
      "3": "#faa2c1",
      "4": "#f783ac",
      "5": "#f06595",
      "6": "#e64980",
      "7": "#d6336c",
      "8": "#c2255c",
      "9": "#a61e4d"
    },
    "purple": {
      "0": "#f8f0fc",
      "1": "#f3d9fa",
      "2": "#eebefa",
      "3": "#e599f7",
      "4": "#da77f2",
      "5": "#cc5de8",
      "6": "#be4bdb",
      "7": "#ae3ec9",
      "8": "#9c36b5",
      "9": "#862e9c"
    },
    "violet": {
      "0": "#f3f0ff",
      "1": "#e5dbff",
      "2": "#d0bfff",
      "3": "#b197fc",
      "4": "#9775fa",
      "5": "#845ef7",
      "6": "#7950f2",
      "7": "#7048e8",
      "8": "#6741d9",
      "9": "#5f3dc4"
    },
    "indigo": {
      "0": "#edf2ff",
      "1": "#dbe4ff",
      "2": "#bac8ff",
      "3": "#91a7ff",
      "4": "#748ffc",
      "5": "#5c7cfa",
      "6": "#4c6ef5",
      "7": "#4263eb",
      "8": "#3b5bdb",
      "9": "#364fc7"
    },
    "blue": {
      "0": "#e7f5ff",
      "1": "#d0ebff",
      "2": "#a5d8ff",
      "3": "#74c0fc",
      "4": "#4dabf7",
      "5": "#339af0",
      "6": "#228be6",
      "7": "#1c7ed6",
      "8": "#1971c2",
      "9": "#1864ab"
    },
    "cyan": {
      "0": "#e3fafc",
      "1": "#c5f6fa",
      "2": "#99e9f2",
      "3": "#66d9e8",
      "4": "#3bc9db",
      "5": "#22b8cf",
      "6": "#15aabf",
      "7": "#1098ad",
      "8": "#0c8599",
      "9": "#0b7285"
    },
    "teal": {
      "0": "#e6fcf5",
      "1": "#c3fae8",
      "2": "#96f2d7",
      "3": "#63e6be",
      "4": "#38d9a9",
      "5": "#20c997",
      "6": "#12b886",
      "7": "#0ca678",
      "8": "#099268",
      "9": "#087f5b"
    },
    "green": {
      "0": "#ebfbee",
      "1": "#d3f9d8",
      "2": "#b2f2bb",
      "3": "#8ce99a",
      "4": "#69db7c",
      "5": "#51cf66",
      "6": "#40c057",
      "7": "#37b24d",
      "8": "#2f9e44",
      "9": "#2b8a3e"
    },
    "lime": {
      "0": "#f4fce3",
      "1": "#e9fac8",
      "2": "#d8f5a2",
      "3": "#c0eb75",
      "4": "#a9e34b",
      "5": "#94d82d",
      "6": "#82c91e",
      "7": "#74b816",
      "8": "#66a80f",
      "9": "#5c940d"
    },
    "yellow": {
      "0": "#fff9db",
      "1": "#fff3bf",
      "2": "#ffec99",
      "3": "#ffe066",
      "4": "#ffd43b",
      "5": "#fcc419",
      "6": "#fab005",
      "7": "#f59f00",
      "8": "#f08c00",
      "9": "#e67700"
    },
    "orange": {
      "0": "#fff4e6",
      "1": "#ffe8cc",
      "2": "#ffd8a8",
      "3": "#ffc078",
      "4": "#ffa94d",
      "5": "#ff922b",
      "6": "#fd7e14",
      "7": "#f76707",
      "8": "#e8590c",
      "9": "#d9480f"
    }
  },
  "mq": {
    "xs": "420px",
    "xsMin": "(width >= 420px)",
    "xsMax": "(width < 420px)",
    "sm": "640px",
    "smMin": "(width >= 640px)",
    "smMax": "(width < 640px)",
    "md": "768px",
    "mdMin": "(width >= 768px)",
    "mdMax": "(width < 768px)",
    "lg": "1024px",
    "lgMin": "(width >= 1024px)",
    "lgMax": "(width < 1024px)",
    "xl": "1440px",
    "xlMin": "(width >= 1440px)",
    "xlMax": "(width < 1440px)",
    "xxl": "2200px",
    "xxlMin": "(width >= 2200px)",
    "xxlMax": "(width < 2200px)",
    "hdColor": "(dynamic-range: high)",
    "touch": "(hover: none) and (pointer: coarse)",
    "stylus": "(hover: none) and (pointer: fine)",
    "pointer": "(hover) and (pointer: coarse)",
    "mouse": "(hover) and (pointer: fine)",
    "schemeDark": "(prefers-color-scheme: dark)",
    "schemeLight": "(prefers-color-scheme: light)",
    "motionSafe": "(prefers-reduced-motion: no-preference)",
    "motionReduce": "(prefers-reduced-motion: reduce)",
    "opacitySafe": "(prefers-reduced-transparency: no-preference)",
    "opacityReduce": "(prefers-reduced-transparency: reduce)",
    "dataSafe": "(prefers-reduced-data: no-preference)",
    "dataReduce": "(prefers-reduced-data: reduce)",
    "contrastMore": "(prefers-contrast: more)",
    "contrastLess": "(prefers-contrast: less)",
    "portrait": "(orientation: portrait)",
    "landscape": "(orientation: landscape)"
  }
};
