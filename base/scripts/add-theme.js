const fs = require("fs");
const path = require("path");

const packageRoot = path.dirname(__dirname);
const fileToCopy = path.join(packageRoot, "theme", "index.css");

// Get the destination path from the command-line arguments
const destinationPath = process.argv[2];

// If no destination path is provided, determine a default based on the directory structure
if (!destinationPath) {
	const baseDirs = ["src", "css", "styles", "assets"];
	const projectRoot = process.cwd();

	destinationPath = baseDirs.reduce((acc, dir) => {
		const currentPath = path.join(projectRoot, dir);
		if (!acc && fs.existsSync(currentPath)) {
			// Create the directory if it doesn't exist
			fs.mkdirSync(currentPath, { recursive: true });
			return path.join(currentPath, "theme.css");
		}
		return acc;
	}, null);

	if (!destinationPath) {
		destinationPath = path.join(projectRoot, "theme.css");
	}
}

fs.copyFile(fileToCopy, destinationPath, (err) => {
	if (err) {
		console.error("Error! something went wrong with adding theme.css", err);
	} else {
		console.log("Added theme.css to your project");
		console.log(
			"you can now customize the contens to meet you brand style"
		);
	}
});
