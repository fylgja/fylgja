// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

/**
 * Color spaces that CSS writes with the `color()` function,
 * every other supported color space has its own function (e.g. `oklch()`).
 *
 * @source https://www.designtokens.org/tr/2025.10/color/#supported-color-spaces
 */
const colorFunctionSpaces = [
	"srgb",
	"srgb-linear",
	"display-p3",
	"a98-rgb",
	"prophoto-rgb",
	"rec2020",
	"xyz-d65",
	"xyz-d50",
];

/**
 * Per channel `[percentScale, numberScale]`, mapping a CSS channel to the
 * Design Token component range. A missing `percentScale` means the channel
 * is a hue, which does not accept percentages.
 *
 * @type {Object<string, Array<[number|undefined, number]>>}
 */
const channelScales = {
	rgb: [[0.01, 1 / 255], [0.01, 1 / 255], [0.01, 1 / 255]],
	hsl: [[undefined, 1], [1, 1], [1, 1]],
	hwb: [[undefined, 1], [1, 1], [1, 1]],
	lab: [[1, 1], [1.25, 1], [1.25, 1]],
	lch: [[1, 1], [1.5, 1], [undefined, 1]],
	oklab: [[0.01, 1], [0.004, 1], [0.004, 1]],
	oklch: [[0.01, 1], [0.004, 1], [undefined, 1]],
	color: [[0.01, 1], [0.01, 1], [0.01, 1]],
};

/** CSS functions whose Design Token components are percentages */
const percentComponentSpaces = ["hsl", "hwb"];

const numberPattern = "-?(?:\\d+\\.?\\d*|\\.\\d+)(?:e[+-]?\\d+)?";
const channelRegex = new RegExp(`^(${numberPattern})(%|deg)?$`, "i");
const hexRegex = /^#([\da-f]{3,4}|[\da-f]{6}|[\da-f]{8})$/i;
const colorFunctionRegex = /^(rgba?|hsla?|hwb|lab|lch|oklab|oklch|color)\(\s*([^()]*)\)$/i;

/**
 * Removes floating point noise, e.g. `0.1 * 3` becoming `0.30000000000000004`.
 *
 * @param {number} value
 * @returns {number}
 */
const round = (value) => Number.parseFloat(value.toPrecision(12));

/**
 * @param {string} channel - CSS channel, e.g. `50%`, `.3`, `120deg` or `none`
 * @param {[number|undefined, number]} scale
 * @returns {number|"none"|undefined}
 */
function parseChannel(channel, [percentScale, numberScale]) {
	if (channel === "none") return "none";

	const match = channel.match(channelRegex);
	if (!match) return;

	const value = Number.parseFloat(match[1]);
	if (match[2] === "%") {
		return percentScale === undefined ? undefined : round(value * percentScale);
	}

	return round(value * numberScale);
}

/**
 * @param {number[]} components - sRGB components in the 0 to 1 range
 * @returns {string|undefined}
 */
function componentsToHex(components) {
	if (!components.every((c) => typeof c === "number" && c >= 0 && c <= 1)) {
		return;
	}

	return `#${components
		.map((c) => Math.round(c * 255).toString(16).padStart(2, "0"))
		.join("")}`;
}

/**
 * @param {string} hex - hex digits without the leading `#`
 * @returns {Object}
 */
function hexToColor(hex) {
	const digits = hex.length <= 4 ? [...hex].map((d) => d + d) : hex.match(/../g);
	const [r, g, b, a] = digits.map((d) => Number.parseInt(d, 16) / 255);
	const components = [r, g, b].map(round);
	const color = { colorSpace: "srgb", components };

	if (a !== undefined && a < 1) color.alpha = round(a);
	color.hex = componentsToHex(components);

	return color;
}

/**
 * Parses a CSS color into a Design Token color value.
 * Only literal colors are supported, a color using `var()` or `calc()` returns `undefined`.
 *
 * @param {string} input - CSS color, e.g. `#f00`, `hsl(0 0 0 / 10%)` or `oklch(70% .1 200)`
 * @returns {{colorSpace: string, components: Array<number|"none">, alpha?: number, hex?: string}|undefined}
 */
export function parseCssColor(input) {
	if (typeof input !== "string") return;

	const value = input.trim().toLowerCase();
	const hex = value.match(hexRegex);
	if (hex) return hexToColor(hex[1]);

	const colorFunction = value.match(colorFunctionRegex);
	if (!colorFunction) return;

	const name = colorFunction[1].replace(/^(rgb|hsl)a$/, "$1");
	const [channelInput, alphaInput] = colorFunction[2].replaceAll(",", " ").split("/");
	const channels = channelInput.trim().split(/\s+/);
	let alphaChannel = alphaInput?.trim();
	let colorSpace = name === "rgb" ? "srgb" : name;

	if (name === "color") {
		colorSpace = channels.shift();
		if (!colorFunctionSpaces.includes(colorSpace)) return;
	}

	// Legacy syntax, e.g. `rgba(0, 0, 0, 0.5)`
	if (channels.length === 4 && alphaChannel === undefined) {
		alphaChannel = channels.pop();
	}

	if (channels.length !== 3) return;

	const components = channels.map((channel, index) =>
		parseChannel(channel, channelScales[name][index]),
	);
	if (components.includes(undefined)) return;

	const color = { colorSpace, components };

	if (alphaChannel !== undefined) {
		const alpha = parseChannel(alphaChannel, [0.01, 1]);
		if (typeof alpha !== "number") return;
		if (alpha < 1) color.alpha = alpha;
	}

	if (colorSpace === "srgb") {
		const hexValue = componentsToHex(components);
		if (hexValue) color.hex = hexValue;
	}

	return color;
}

/**
 * Converts a Design Token color value into a CSS color.
 *
 * @param {{colorSpace: string, components: Array<*>, alpha?: *, hex?: string}} color
 * @param {function(*, string=): *} toCss - converts a nested value, e.g. a component `$ref`
 * @returns {string}
 */
export function colorToCss({ colorSpace, components = [], alpha, hex }, toCss) {
	const alphaValue = alpha === undefined ? 1 : toCss(alpha, "number");
	const hasAlpha = alphaValue !== 1;

	if (colorSpace === "srgb" && hex && !hasAlpha) {
		return hex;
	}

	const channels = components
		.map((component, index) => {
			const channel = toCss(component, "number");
			// The first component of hsl and hwb is the hue, which has no percentage
			const isPercent =
				index > 0 &&
				percentComponentSpaces.includes(colorSpace) &&
				typeof channel === "number";

			return isPercent ? `${channel}%` : channel;
		})
		.join(" ");
	const alphaChannel = hasAlpha ? ` / ${alphaValue}` : "";

	return colorFunctionSpaces.includes(colorSpace)
		? `color(${colorSpace} ${channels}${alphaChannel})`
		: `${colorSpace}(${channels}${alphaChannel})`;
}
