// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

export default {
	radius: {
		1: "0.125rem",
		2: "0.25rem",
		3: "0.5rem",
		4: "1rem",
		5: "2rem",
		6: "3rem",
		full: "1e5px",
		conditional: {
			1: `clamp(0px, calc(100cqi - 100%) * 1e5, var(--radius-1))`,
			2: `clamp(0px, calc(100cqi - 100%) * 1e5, var(--radius-2))`,
			3: `clamp(0px, calc(100cqi - 100%) * 1e5, var(--radius-3))`,
			4: `clamp(0px, calc(100cqi - 100%) * 1e5, var(--radius-4))`,
			5: `clamp(0px, calc(100cqi - 100%) * 1e5, var(--radius-5))`,
			6: `clamp(0px, calc(100cqi - 100%) * 1e5, var(--radius-6))`,
		},
	},
};
