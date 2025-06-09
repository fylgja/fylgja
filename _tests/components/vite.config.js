import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [],
	resolve: {
		alias: {
			"@fylgja/base": path.resolve(__dirname, "../../base"),
			"@fylgja/container": path.resolve(
				__dirname,
				"../../components/container"
			),
			"@fylgja/tokens": path.resolve(__dirname, "../../tokens"),
			"@fylgja/utilities": path.resolve(__dirname, "../../utilities"),
		},
	},
});
