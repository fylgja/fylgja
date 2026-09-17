import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { preprocess } from "@fylgja/css-attr-polyfill/lightningcss";
import { transform } from "lightningcss";
import config from "./fylgja.config.json" with { type: "json" };

const root = new URL("../", import.meta.url);
const input = fileURLToPath(new URL("utils/experimental/spacing.css", root));
const output = fileURLToPath(new URL("utils/experimental/spacing.min.css", root));

const source = await readFile(input, "utf8");
const { code, warnings } = await preprocess(source, { safelist: config.safelist });

for (const warning of warnings) console.warn("warning:", warning);

const result = transform({
	code: Buffer.from(code),
	filename: "spacing.css",
	minify: true,
});

await writeFile(output, result.code);
