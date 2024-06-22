// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

export default {
	xs: "(width >= 420px)",
	xsMax: "(width < 420px)",
	sm: "(width >= 640px)",
	smMax: "(width < 640px)",
	md: "(width >= 768px)",
	mdMax: "(width < 768px)",
	lg: "(width >= 1024px)",
	lgMax: "(width < 1024px)",
	xl: "(width >= 1440px)",
	xlMax: "(width < 1440px)",
	xxl: "(width >= 2200px)",
	xxlMax: "(width < 2200px)",

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
