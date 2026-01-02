module.exports = {
  "ratio": {
    "box": 1,
    "landscape": "4/3",
    "portrait": "3/4",
    "widescreen": "16/9",
    "superwide": "21/9",
    "ultrawide": "18/5",
    "golden": "1.618/1"
  },
  "border-size": {
    "1": "1px",
    "2": "2px",
    "3": "4px",
    "4": "8px",
    "5": "12px"
  },
  "radius": {
    "1": "0.125rem",
    "2": "0.25rem",
    "3": "0.5rem",
    "4": "1rem",
    "5": "2rem",
    "6": "3rem",
    "full": "1e5px"
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
  "hue-@": "@property --hue { syntax: \"<angle> | <number>\"; inherits: true; initial-value: 0; }",
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
    "DEFAULT": "hsl(0 0 0 / 10%)",
    "-@": "@property --shadow-color { syntax: \"<color>\"; inherits: true; initial-value: hsl(0 0 0 / 10%); }"
  },
  "shadow": {
    "1": "0 2px 1px -1px var(--shadow-color), 0 1px 1px var(--shadow-color), 0 1px 3px var(--shadow-color)",
    "2": "0 3px 3px -2px var(--shadow-color), 0 3px 4px var(--shadow-color), 0 1px 8px var(--shadow-color)",
    "3": "0 3px 5px -1px var(--shadow-color), 0 6px 10px var(--shadow-color), 0 1px 18px var(--shadow-color)",
    "4": "0 5px 5px -3px var(--shadow-color), 0 8px 10px 1px var(--shadow-color), 0 3px 14px 2px var(--shadow-color)",
    "5": "0 7px 8px -4px var(--shadow-color), 0 12px 17px 2px var(--shadow-color), 0 5px 22px 4px var(--shadow-color)",
    "6": "0 8px 10px -5px var(--shadow-color), 0 16px 24px 2px var(--shadow-color), 0 6px 30px 5px var(--shadow-color)"
  },
  "spacing": "0.25rem",
  "size": {
    "1": "calc(var(--spacing) * 1)",
    "2": "calc(var(--spacing) * 2)",
    "3": "calc(var(--spacing) * 3)",
    "4": "calc(var(--spacing) * 4)",
    "5": "calc(var(--spacing) * 5)",
    "6": "calc(var(--spacing) * 6)",
    "7": "calc(var(--spacing) * 7)",
    "8": "calc(var(--spacing) * 8)",
    "9": "calc(var(--spacing) * 9)",
    "10": "calc(var(--spacing) * 10)",
    "12": "calc(var(--spacing) * 12)",
    "14": "calc(var(--spacing) * 14)",
    "16": "calc(var(--spacing) * 16)",
    "18": "calc(var(--spacing) * 18)",
    "20": "calc(var(--spacing) * 20)",
    "24": "calc(var(--spacing) * 24)",
    "28": "calc(var(--spacing) * 28)",
    "32": "calc(var(--spacing) * 32)",
    "36": "calc(var(--spacing) * 36)",
    "40": "calc(var(--spacing) * 40)",
    "50": "calc(var(--spacing) * 50)",
    "60": "calc(var(--spacing) * 60)",
    "70": "calc(var(--spacing) * 70)",
    "80": "calc(var(--spacing) * 80)",
    "90": "calc(var(--spacing) * 90)",
    "100": "calc(var(--spacing) * 100)",
    "120": "calc(var(--spacing) * 120)",
    "05": "calc(var(--spacing) * 0.5)"
  },
  "size-heading": "36ch",
  "size-content": "64ch",
  "layer": {
    "1": 1,
    "2": 2,
    "3": 4,
    "4": 6,
    "5": 8
  },
  "shadow-color-@media:dark": "hsl(220 40% 2% / 25%)"
}
