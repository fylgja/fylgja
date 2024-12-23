module.exports = {
  "--ratio-box": 1,
  "--ratio-landscape": "4/3",
  "--ratio-portrait": "3/4",
  "--ratio-widescreen": "16/9",
  "--ratio-superwide": "21/9",
  "--ratio-ultrawide": "18/5",
  "--ratio-golden": "1.618/1",
  "--radius-1": "0.125rem",
  "--radius-2": "0.25rem",
  "--radius-3": "0.5rem",
  "--radius-4": "1rem",
  "--radius-5": "2rem",
  "--radius-6": "3rem",
  "--radius-full": "1e5px",
  "--radius-conditional-1": "clamp(0px, calc(100cqi - 100%) * 1e5, var(--radius-1))",
  "--radius-conditional-2": "clamp(0px, calc(100cqi - 100%) * 1e5, var(--radius-2))",
  "--radius-conditional-3": "clamp(0px, calc(100cqi - 100%) * 1e5, var(--radius-3))",
  "--radius-conditional-4": "clamp(0px, calc(100cqi - 100%) * 1e5, var(--radius-4))",
  "--radius-conditional-5": "clamp(0px, calc(100cqi - 100%) * 1e5, var(--radius-5))",
  "--radius-conditional-6": "clamp(0px, calc(100cqi - 100%) * 1e5, var(--radius-6))",
  "--border-size-1": "0.125rem",
  "--border-size-2": "0.25rem",
  "--border-size-3": "0.375rem",
  "--border-size-4": "0.5rem",
  "--border-size-5": "0.75rem",
  "--border-size-6": "1rem",
  "--color-0": "oklch(99% calc(.03 * var(--chroma, 1)) var(--hue, 0))",
  "--color-1": "oklch(95% calc(.06 * var(--chroma, 1)) var(--hue, 0))",
  "--color-2": "oklch(90% calc(.12 * var(--chroma, 1)) var(--hue, 0))",
  "--color-3": "oklch(88% calc(.14 * var(--chroma, 1)) var(--hue, 0))",
  "--color-4": "oklch(82% calc(.16 * var(--chroma, 1)) var(--hue, 0))",
  "--color-5": "oklch(78% calc(.17 * var(--chroma, 1)) var(--hue, 0))",
  "--color-6": "oklch(68% calc(.19 * var(--chroma, 1)) var(--hue, 0))",
  "--color-7": "oklch(58% calc(.21 * var(--chroma, 1)) var(--hue, 0))",
  "--color-8": "oklch(52% calc(.20 * var(--chroma, 1)) var(--hue, 0))",
  "--color-9": "oklch(44% calc(.18 * var(--chroma, 1)) var(--hue, 0))",
  "--color-10": "oklch(35% calc(.15 * var(--chroma, 1)) var(--hue, 0))",
  "--color-11": "oklch(28% calc(.12 * var(--chroma, 1)) var(--hue, 0))",
  "--color-12": "oklch(20% calc(.10 * var(--chroma, 1)) var(--hue, 0))",
  "--color-13": "oklch(15% calc(.07 * var(--chroma, 1)) var(--hue, 0))",
  "--color-14": "oklch(11% calc(.05 * var(--chroma, 1)) var(--hue, 0))",
  "--hue-pink": 350,
  "--hue-purple": 330,
  "--hue-violet": 310,
  "--hue-indigo": 290,
  "--hue-blue": 260,
  "--hue-cyan": 220,
  "--hue-teal": 170,
  "--hue-green": 140,
  "--hue-lime": 125,
  "--hue-yellow": 96,
  "--hue-orange": 70,
  "--hue-red": 25,
  "--ease-1": "cubic-bezier(0.25, 0.1, 0.1, 1)",
  "--ease-2": "cubic-bezier(0.25, 0.1, 0.2, 1)",
  "--ease-3": "cubic-bezier(0.25, 0.1, 0.3, 1)",
  "--ease-4": "cubic-bezier(0.25, 0.1, 0.4, 1)",
  "--ease-5": "cubic-bezier(0.25, 0.1, 0.5, 1)",
  "--easeIn-1": "cubic-bezier(0.3, 0, 1, 1)",
  "--easeIn-2": "cubic-bezier(0.5, 0, 1, 1)",
  "--easeIn-3": "cubic-bezier(0.7, 0, 1, 1)",
  "--easeIn-4": "cubic-bezier(0.9, 0, 1, 1)",
  "--easeIn-5": "cubic-bezier(1, 0, 1, 1)",
  "--easeOut-1": "cubic-bezier(0, 0, 0.7, 1)",
  "--easeOut-2": "cubic-bezier(0, 0, 0.5, 1)",
  "--easeOut-3": "cubic-bezier(0, 0, 0.3, 1)",
  "--easeOut-4": "cubic-bezier(0, 0, 0.1, 1)",
  "--easeOut-5": "cubic-bezier(0, 0, 0, 1)",
  "--easeInOut-1": "cubic-bezier(0.1, 0, 0.9, 1)",
  "--easeInOut-2": "cubic-bezier(0.3, 0, 0.7, 1)",
  "--easeInOut-3": "cubic-bezier(0.5, 0, 0.5, 1)",
  "--easeInOut-4": "cubic-bezier(0.7, 0, 0.3, 1)",
  "--easeInOut-5": "cubic-bezier(0.9, 0, 0.1, 1)",
  "--easeElasticIn-1": "cubic-bezier(0.5, 0.25, 0.75, -0.25)",
  "--easeElasticIn-2": "cubic-bezier(0.5, 0, 0.75, -0.25)",
  "--easeElasticIn-3": "cubic-bezier(0.5, -0.25, 0.75, -0.25)",
  "--easeElasticIn-4": "cubic-bezier(0.5, -0.5, 0.75, -0.25)",
  "--easeElasticIn-5": "cubic-bezier(0.5, -0.75, 0.75, -0.25)",
  "--easeElasticOut-1": "cubic-bezier(0.5, 0.75, 0.75, 1.25)",
  "--easeElasticOut-2": "cubic-bezier(0.5, 1, 0.75, 1.25)",
  "--easeElasticOut-3": "cubic-bezier(0.5, 1.25, 0.75, 1.25)",
  "--easeElasticOut-4": "cubic-bezier(0.5, 1.5, 0.75, 1.25)",
  "--easeElasticOut-5": "cubic-bezier(0.5, 1.75, 0.75, 1.25)",
  "--easeElasticInOut-1": "cubic-bezier(0.5, -0.1, 0.1, 1.5)",
  "--easeElasticInOut-2": "cubic-bezier(0.5, -0.3, 0.1, 1.5)",
  "--easeElasticInOut-3": "cubic-bezier(0.5, -0.5, 0.1, 1.5)",
  "--easeElasticInOut-4": "cubic-bezier(0.5, -0.7, 0.1, 1.5)",
  "--easeElasticInOut-5": "cubic-bezier(0.5, -0.9, 0.1, 1.5)",
  "--fontSize-1": "0.875rem",
  "--fontSize-2": "1rem",
  "--fontSize-3": "1.125rem",
  "--fontSize-4": "1.25rem",
  "--fontSize-5": "1.5rem",
  "--fontSize-6": "2rem",
  "--fontSize-7": "2.5rem",
  "--fontSize-8": "3rem",
  "--fontSize-9": "3.5rem",
  "--fontSize-fluid-1": "clamp(0.875rem, 1.5cqi, 1rem)",
  "--fontSize-fluid-2": "clamp(1rem, 2cqi, 1.125rem)",
  "--fontSize-fluid-3": "clamp(1.25rem, 2cqi, 1.5rem)",
  "--fontSize-fluid-4": "clamp(1.5rem, 3cqi, 2rem)",
  "--fontSize-fluid-5": "clamp(2rem, 5cqi, 3.5rem)",
  "--lineHeight-1": "1.1",
  "--lineHeight-2": "1.25",
  "--lineHeight-3": "1.375",
  "--lineHeight-4": "1.5",
  "--lineHeight-5": "1.8",
  "--shadow-color-umbra": "color-mix(in srgb, var(--shadow-color, gray) calc(var(--shadow-strength, 1%) + 20%), #0000)",
  "--shadow-color-penumbra": "color-mix(in srgb, var(--shadow-color, gray) calc(var(--shadow-strength, 1%) + 14%), #0000)",
  "--shadow-color-ambient": "color-mix(in srgb, var(--shadow-color, gray) calc(var(--shadow-strength, 1%) + 12%), #0000)",
  "--shadow-1": [
    "0 2px 1px -1px var(--shadow-color-umbra)",
    "0 1px 1px var(--shadow-color-penumbra)",
    "0 1px 3px var(--shadow-color-ambient)"
  ],
  "--shadow-2": [
    "0 3px 3px -2px var(--shadow-color-umbra)",
    "0 3px 4px var(--shadow-color-penumbra)",
    "0 1px 8px var(--shadow-color-ambient)"
  ],
  "--shadow-3": [
    "0 3px 5px -1px var(--shadow-color-umbra)",
    "0 6px 10px var(--shadow-color-penumbra)",
    "0 1px 18px var(--shadow-color-ambient)"
  ],
  "--shadow-4": [
    "0 5px 5px -3px var(--shadow-color-umbra)",
    "0 8px 10px 1px var(--shadow-color-penumbra)",
    "0 3px 14px 2px var(--shadow-color-ambient)"
  ],
  "--shadow-5": [
    "0 7px 8px -4px var(--shadow-color-umbra)",
    "0 12px 17px 2px var(--shadow-color-penumbra)",
    "0 5px 22px 4px var(--shadow-color-ambient)"
  ],
  "--shadow-6": [
    "0 8px 10px -5px var(--shadow-color-umbra)",
    "0 16px 24px 2px var(--shadow-color-penumbra)",
    "0 6px 30px 5px var(--shadow-color-ambient)"
  ],
  "--size-1": "0.125rem",
  "--size-2": "0.25rem",
  "--size-3": "0.5rem",
  "--size-4": "0.625rem",
  "--size-5": "0.75rem",
  "--size-6": "0.875rem",
  "--size-7": "1rem",
  "--size-8": "1.25rem",
  "--size-9": "1.5rem",
  "--size-10": "1.75rem",
  "--size-11": "2rem",
  "--size-12": "2.25rem",
  "--size-13": "2.5rem",
  "--size-14": "2.75rem",
  "--size-15": "3rem",
  "--size-16": "4rem",
  "--size-17": "5rem",
  "--size-18": "7.5rem",
  "--size-19": "10rem",
  "--size-20": "15rem",
  "--size-21": "20rem",
  "--size-22": "30rem",
  "--sizeContent-1": "24ch",
  "--sizeContent-2": "45ch",
  "--sizeContent-3": "68ch",
  "--sizeHeading-1": "20ch",
  "--sizeHeading-2": "28ch",
  "--sizeHeading-3": "36ch",
  "--layer-1": 1,
  "--layer-2": 2,
  "--layer-3": 4,
  "--layer-4": 6,
  "--layer-5": 8
}
