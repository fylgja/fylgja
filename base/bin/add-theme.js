#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const packageRoot = path.dirname(__dirname);
const fileToCopy = path.join(packageRoot, "theme", "index.css");
let destinationPath = process.argv[2];

if (!destinationPath) {
	const baseDirs = ["src/css", "src/styles", "src/assets"];
	const projectRoot = process.cwd();

	destinationPath = baseDirs.reduce((acc, dir) => {
		const currentPath = path.join(projectRoot, dir);
		if (!acc && fs.existsSync(currentPath)) {
			return path.join(currentPath);
		}
		return acc;
	}, null);

	if (!destinationPath) {
		destinationPath = path.join(projectRoot);
	}
}

destinationPath = path.join(destinationPath, "theme.css");

if (fs.existsSync(destinationPath)) {
	console.log("theme.css already exists in the target directory.");
} else {
	fs.copyFile(fileToCopy, destinationPath, (err) => {
		if (err) {
			console.error("Error copying file:", err);
		} else {
			const relativePath = path.relative(process.cwd(), destinationPath);
			console.log("File copied successfully to:", relativePath);
		}
	});
}
