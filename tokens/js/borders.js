// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

export default {
	border: {
		size: {
			1: "0.125rem",
			2: "0.25rem",
			3: "0.375rem",
			4: "0.5rem",
			5: "0.75rem",
			6: "1rem",
		},
	},
	radius: {
		1: "0.125rem",
		2: "0.25rem",
		3: "0.5rem",
		4: "1rem",
		5: "2rem",
		6: "3rem",
		full: "1e5px",
		blob: {
			1: "30% 70% 70% 30% / 53% 30% 70% 47%",
			2: "53% 47% 34% 66% / 63% 46% 54% 37%",
			3: "37% 63% 56% 44% / 49% 56% 44% 51%",
			4: "63% 37% 37% 63% / 43% 37% 63% 57%",
			5: "49% 51% 48% 52% / 57% 44% 56% 43%",
		},
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
