import { promises as fs } from "fs";
import { join } from "path";

const getFileStats = async (filePath) => {
	try {
		return await fs.stat(filePath);
	} catch (err) {
		console.error(`Error getting file stats for ${filePath}:`, err);
		throw err;
	}
};

const deleteFile = async (filePath) => {
	try {
		await fs.unlink(filePath);
	} catch (err) {
		console.error(`Error deleting file ${filePath}:`, err);
	}
};

const deleteFiles = async (dir, extension) => {
	try {
		const files = await fs.readdir(dir);

		const deletePromises = files.map(async (file) => {
			const filePath = join(dir, file);

			const stats = await getFileStats(filePath);
			if (
				stats.isFile() &&
				file.endsWith(extension) &&
				!file.startsWith("_")
			) {
				await deleteFile(filePath);
			}
		});

		await Promise.all(deletePromises);
	} catch (err) {
		console.error(`Error reading directory ${dir}:`, err);
	}
};

deleteFiles("css", ".css");
deleteFiles("scss", ".scss");
