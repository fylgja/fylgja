import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [],
	resolve: {
		alias: {
			"@fylgja/base": path.resolve(import.meta.dirname, "../../base"),
			"@fylgja/form-extend": path.resolve(
				import.meta.dirname,
				"../../components/form-extend"
			),
			"@fylgja/container": path.resolve(
				import.meta.dirname,
				"../../components/container"
			),
			"@fylgja/tokens": path.resolve(import.meta.dirname, "../../tokens"),
			"@fylgja/utilities": path.resolve(import.meta.dirname, "../../utilities"),
		},
	},
});
