import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [],
	resolve: {
		alias: {
			"@fylgja/base": path.resolve(__dirname, "../../base"),
			"@fylgja/form-extend": path.resolve(
				__dirname,
				"../../components/form-extend"
			),
		},
	},
});
