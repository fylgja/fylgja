// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

const genSizes = (max = 10, extra = []) => {
	const sizes = {};
	const arr = Array.from(Array(max + 1).keys()).slice(1);
	arr.push(...extra);

	arr.forEach((size) => {
		sizes[`${size}`] = `calc(var(--spacing) * ${size})`;
	});

	return sizes;
};

const listSizes = genSizes(
	10,
	[12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 50, 60, 70, 80, 90, 100, 120],
);

export default {
	spacing: "0.25rem", // 4px
	size: {
		"05": "calc(var(--spacing) * 0.5)",
		...listSizes,
	},
	"size-heading": "36ch", // 288px
	"size-content": "64ch", // 512px
};
