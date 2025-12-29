import path from "path";
import { defineConfig } from "vite";

function pkgPath(path) {
	return `../../${path}`;
}

export default defineConfig({
	plugins: [],
	resolve: {
		alias: {
			"@fylgja/badge": pkgPath("components/badge"),
			"@fylgja/base": pkgPath("base"),
			"@fylgja/breadcrumbs": pkgPath("components/breadcrumbs"),
			"@fylgja/card": pkgPath("components/card"),
			"@fylgja/form-extend": pkgPath("components/form-extend"),
			"@fylgja/input-group": pkgPath("components/input-group"),
			"@fylgja/toast": pkgPath("components/toast"),
			"@fylgja/tokens": pkgPath("tokens"),
			"@fylgja/utilities": pkgPath("utilities"),
		},
	},
});
