// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

const breakpoints = {
	sm: "80px",
	md: "768px",
	lg: "1024px",
	xl: "1440px",
	"2xl": "1920px",
};

const mq = {
	sm: `(width >= ${breakpoints.sm})`,
	smMax: `(width < ${breakpoints.sm})`,
	md: `(width >= ${breakpoints.md})`,
	mdMax: `(width < ${breakpoints.md})`,
	lg: `(width >= ${breakpoints.lg})`,
	lgMax: `(width < ${breakpoints.lg})`,
	xl: `(width >= ${breakpoints.xl})`,
	xlMax: `(width < ${breakpoints.xl})`,
	xxl: `(width >= ${breakpoints["2xl"]})`,
	xxlMax: `(width < ${breakpoints["2xl"]})`,

	// Device input
	hdColor: "(dynamic-range: high)",
	touch: "(hover: none) and (pointer: coarse)",
	stylus: "(hover: none) and (pointer: fine)",
	pointer: "(hover) and (pointer: coarse)",
	mouse: "(hover) and (pointer: fine)",

	// prefers mq's
	schemeDark: "(prefers-color-scheme: dark)",
	schemeLight: "(prefers-color-scheme: light)",

	motionSafe: "(prefers-reduced-motion: no-preference)",
	motionReduce: "(prefers-reduced-motion: reduce)",

	opacitySafe: "(prefers-reduced-transparency: no-preference)",
	opacityReduce: "(prefers-reduced-transparency: reduce)",

	dataSafe: "(prefers-reduced-data: no-preference)",
	dataReduce: "(prefers-reduced-data: reduce)",

	contrastMore: "(prefers-contrast: more)",
	contrastLess: "(prefers-contrast: less)",

	portrait: "(orientation: portrait)",
	landscape: "(orientation: landscape)",
};

export { mq as default, mq, breakpoints };
