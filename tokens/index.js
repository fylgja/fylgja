export default {
  "ratio": {
    "box": 1,
    "landscape": "4/3",
    "portrait": "3/4",
    "widescreen": "16/9",
    "superwide": "21/9",
    "ultrawide": "18/5",
    "golden": "1.618/1"
  },
  "radius": {
    "1": "0.125rem",
    "2": "0.25rem",
    "3": "0.5rem",
    "4": "1rem",
    "5": "2rem",
    "6": "3rem",
    "full": "1e5px",
    "conditional": {
      "1": "clamp(0px, calc(100cqi - 100%) * 1e5, var(--radius-1))",
      "2": "clamp(0px, calc(100cqi - 100%) * 1e5, var(--radius-2))",
      "3": "clamp(0px, calc(100cqi - 100%) * 1e5, var(--radius-3))",
      "4": "clamp(0px, calc(100cqi - 100%) * 1e5, var(--radius-4))",
      "5": "clamp(0px, calc(100cqi - 100%) * 1e5, var(--radius-5))",
      "6": "clamp(0px, calc(100cqi - 100%) * 1e5, var(--radius-6))"
    }
  },
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
  "color": {
    "0": "oklch(99% calc(.03 * var(--chroma, 1)) var(--hue, 0))",
    "1": "oklch(95% calc(.06 * var(--chroma, 1)) var(--hue, 0))",
    "2": "oklch(90% calc(.12 * var(--chroma, 1)) var(--hue, 0))",
    "3": "oklch(88% calc(.14 * var(--chroma, 1)) var(--hue, 0))",
    "4": "oklch(82% calc(.16 * var(--chroma, 1)) var(--hue, 0))",
    "5": "oklch(78% calc(.17 * var(--chroma, 1)) var(--hue, 0))",
    "6": "oklch(68% calc(.19 * var(--chroma, 1)) var(--hue, 0))",
    "7": "oklch(58% calc(.21 * var(--chroma, 1)) var(--hue, 0))",
    "8": "oklch(52% calc(.20 * var(--chroma, 1)) var(--hue, 0))",
    "9": "oklch(44% calc(.18 * var(--chroma, 1)) var(--hue, 0))",
    "10": "oklch(35% calc(.15 * var(--chroma, 1)) var(--hue, 0))",
    "11": "oklch(28% calc(.12 * var(--chroma, 1)) var(--hue, 0))",
    "12": "oklch(20% calc(.10 * var(--chroma, 1)) var(--hue, 0))",
    "13": "oklch(15% calc(.07 * var(--chroma, 1)) var(--hue, 0))",
    "14": "oklch(11% calc(.05 * var(--chroma, 1)) var(--hue, 0))"
  },
  "hue": {
    "pink": 350,
    "purple": 330,
    "violet": 310,
    "indigo": 290,
    "blue": 260,
    "cyan": 220,
    "teal": 170,
    "green": 140,
    "lime": 125,
    "yellow": 96,
    "orange": 70,
    "red": 25
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
    "6": "2rem",
    "7": "2.5rem",
    "8": "3rem",
    "9": "3.5rem",
    "fluid": {
      "1": "clamp(0.875rem, 1.5cqi, 1rem)",
      "2": "clamp(1rem, 2cqi, 1.125rem)",
      "3": "clamp(1.25rem, 2cqi, 1.5rem)",
      "4": "clamp(1.5rem, 3cqi, 2rem)",
      "5": "clamp(2rem, 5cqi, 3.5rem)"
    }
  },
  "lineHeight": {
    "1": "1.1",
    "2": "1.25",
    "3": "1.375",
    "4": "1.5",
    "5": "1.8"
  },
  "shadow-color": {
    "umbra": "color-mix(in srgb, var(--shadow-color, gray) calc(var(--shadow-strength, 1%) + 20%), #0000)",
    "penumbra": "color-mix(in srgb, var(--shadow-color, gray) calc(var(--shadow-strength, 1%) + 14%), #0000)",
    "ambient": "color-mix(in srgb, var(--shadow-color, gray) calc(var(--shadow-strength, 1%) + 12%), #0000)"
  },
  "shadow": {
    "1": [
      "0 2px 1px -1px var(--shadow-color-umbra)",
      "0 1px 1px var(--shadow-color-penumbra)",
      "0 1px 3px var(--shadow-color-ambient)"
    ],
    "2": [
      "0 3px 3px -2px var(--shadow-color-umbra)",
      "0 3px 4px var(--shadow-color-penumbra)",
      "0 1px 8px var(--shadow-color-ambient)"
    ],
    "3": [
      "0 3px 5px -1px var(--shadow-color-umbra)",
      "0 6px 10px var(--shadow-color-penumbra)",
      "0 1px 18px var(--shadow-color-ambient)"
    ],
    "4": [
      "0 5px 5px -3px var(--shadow-color-umbra)",
      "0 8px 10px 1px var(--shadow-color-penumbra)",
      "0 3px 14px 2px var(--shadow-color-ambient)"
    ],
    "5": [
      "0 7px 8px -4px var(--shadow-color-umbra)",
      "0 12px 17px 2px var(--shadow-color-penumbra)",
      "0 5px 22px 4px var(--shadow-color-ambient)"
    ],
    "6": [
      "0 8px 10px -5px var(--shadow-color-umbra)",
      "0 16px 24px 2px var(--shadow-color-penumbra)",
      "0 6px 30px 5px var(--shadow-color-ambient)"
    ]
  },
  "size": {
    "1": "0.125rem",
    "2": "0.25rem",
    "3": "0.5rem",
    "4": "0.625rem",
    "5": "0.75rem",
    "6": "0.875rem",
    "7": "1rem",
    "8": "1.25rem",
    "9": "1.5rem",
    "10": "1.75rem",
    "11": "2rem",
    "12": "2.25rem",
    "13": "2.5rem",
    "14": "2.75rem",
    "15": "3rem",
    "16": "4rem",
    "17": "5rem",
    "18": "7.5rem",
    "19": "10rem",
    "20": "15rem",
    "21": "20rem",
    "22": "30rem"
  },
  "sizeContent": {
    "1": "24ch",
    "2": "45ch",
    "3": "68ch"
  },
  "sizeHeading": {
    "1": "20ch",
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
  "shadow-color-@media:dark": "hsl(220 40% 2%)",
  "shadow-strength-@media:dark": "25%"
}
