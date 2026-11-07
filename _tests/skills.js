// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

// Checks that the fylgja/skills repo only uses imports and variables that
// exist in this repo. Usage: node _tests/skills.js [path-to-skills-repo]

import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const SKILLS_DIR = path.resolve(process.argv[2] ?? path.join(ROOT, "../skills"));
const PACKAGES = findPackages();
const EXTENSIONS = [
	"",
	".css",
	".scss",
	".js",
	".json",
	"/index.css",
	"/index.js",
	"/_index.scss",
];

/**
 * Maps each @fylgja package in this repo to its folder.
 * @returns {Record<string, string>} Package name without the scope, to folder.
 */
function findPackages() {
	const dirs = fs
		.readdirSync(ROOT)
		.concat(
			fs.readdirSync(path.join(ROOT, "components")).map((name) =>
				path.join("components", name),
			),
		)
		.map((dir) => path.join(ROOT, dir));
	const packages = {};
	for (const dir of dirs) {
		const file = path.join(dir, "package.json");
		if (!fs.existsSync(file)) continue;
		const { name = "" } = JSON.parse(fs.readFileSync(file, "utf8"));
		if (name.startsWith("@fylgja/")) {
			packages[name.replace("@fylgja/", "")] = dir;
		}
	}
	return packages;
}

/**
 * Lists the files below a folder, skipping dependencies and sources.
 * @param {string} dir Folder to walk.
 * @param {string} extension File extension to keep.
 * @returns {string[]} Absolute file paths.
 */
function walk(dir, extension) {
	return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
		const file = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			return ["node_modules", "src", ".git"].includes(entry.name)
				? []
				: walk(file, extension);
		}
		return entry.name.endsWith(extension) ? [file] : [];
	});
}

/**
 * Collects every custom property and modifier name in the built CSS.
 * @returns {Set<string>} Known names, including the leading dashes.
 */
function knownVariables() {
	const names = new Set();
	for (const dir of Object.values(PACKAGES)) {
		for (const file of walk(dir, ".css")) {
			for (const [name] of fs
				.readFileSync(file, "utf8")
				.matchAll(/--[a-zA-Z0-9_-]+/g)) {
				names.add(name);
			}
		}
	}
	return names;
}

/**
 * Checks if an import path resolves to a file in a package.
 * @param {string} name Package name without the scope.
 * @param {string} subpath Path after the package name.
 * @returns {boolean} True if the path resolves.
 */
function resolves(name, subpath) {
	const dir = PACKAGES[name];
	const { exports: map = {} } = JSON.parse(
		fs.readFileSync(path.join(dir, "package.json"), "utf8"),
	);
	if (`./${subpath}` in map) return true;
	return EXTENSIONS.some((extension) => {
		const file = path.join(dir, subpath + extension);
		return fs.existsSync(file) && fs.statSync(file).isFile();
	});
}

/**
 * Finds imports and variables in a skill that do not exist in the packages.
 * @param {string} file Markdown file to check.
 * @param {Set<string>} variables Known variable names.
 * @returns {string[]} A message per problem.
 */
function check(file, variables) {
	// Shell blocks hold command flags, which look like variables
	const text = fs
		.readFileSync(file, "utf8")
		.replace(/```(?:bash|sh)\n[\s\S]*?```/g, "");
	const problems = [];

	// Placeholders like {name} and wildcards like --color-* are skipped
	for (const [, name, subpath] of text.matchAll(
		/@fylgja\/([a-z-]+)\/([\w./-]*\w)(?![\w./-]*\{)/g,
	)) {
		if (name in PACKAGES && !resolves(name, subpath)) {
			problems.push(`@fylgja/${name}/${subpath} does not exist`);
		}
	}

	for (const [, name] of text.matchAll(
		/(?<![\w-])(--[a-zA-Z][\w-]*)(?![\w-]|\*)/g,
	)) {
		if (!variables.has(name)) problems.push(`${name} does not exist`);
	}

	return [...new Set(problems)];
}

if (!fs.existsSync(path.join(SKILLS_DIR, "skills"))) {
	console.error(`No skills folder in ${SKILLS_DIR}`);
	process.exit(1);
}

const variables = knownVariables();
const results = walk(path.join(SKILLS_DIR, "skills"), ".md").map((file) => [
	file,
	check(file, variables),
]);

for (const [file, problems] of results) {
	for (const problem of problems) {
		console.error(`${path.relative(SKILLS_DIR, file)}: ${problem}`);
	}
}

if (results.some(([, problems]) => problems.length)) {
	process.exit(1);
}

console.log(`Checked ${results.length} skill files`);
