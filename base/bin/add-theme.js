#!/usr/bin/env node
// TODO: This script will be replaced by the meta package CLI in the next major release.

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const packageRoot = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const fileToCopy = path.join(packageRoot, "theme.css");

const SEARCH_DIRS = ["src/css", "src/styles", "src/assets"];

let destinationPath = process.argv[2];

if (!destinationPath) {
	const projectRoot = process.cwd();
	for (const dir of SEARCH_DIRS) {
		if (fs.existsSync(path.join(projectRoot, dir))) {
			destinationPath = path.join(projectRoot, dir);
			break;
		}
	}
	destinationPath ??= projectRoot;
}

destinationPath = path.join(destinationPath, "theme.css");

if (fs.existsSync(destinationPath)) {
	console.log("theme.css already exists in the target directory.");
} else {
	fs.copyFileSync(fileToCopy, destinationPath);
	console.log("File copied successfully to:", path.relative(process.cwd(), destinationPath));
}
