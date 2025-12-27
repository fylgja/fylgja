import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [],
	resolve: {
		alias: {
			"@fylgja/base": path.resolve(__dirname, "../../base"),
			"@fylgja/badge": path.resolve(__dirname, "../../components/badge"),
			"@fylgja/input-group": path.resolve(
				__dirname,
				"../../components/input-group",
			),
			"@fylgja/toast": path.resolve(__dirname, "../../components/toast"),
			"@fylgja/card": path.resolve(__dirname, "../../components/card"),
			"@fylgja/form-extend": path.resolve(
				__dirname,
				"../../components/form-extend",
			),
			"@fylgja/tokens": path.resolve(__dirname, "../../tokens"),
			"@fylgja/utilities": path.resolve(__dirname, "../../utilities"),
		},
	},
});
