import path from "path";
import { defineConfig } from "vite";

function pkgPath(pkg) {
	return path.resolve(import.meta.dirname, "../..", pkg);
}

export default defineConfig({
	plugins: [],
	resolve: {
		alias: {
			"@fylgja/badge": pkgPath("components/badge"),
			"@fylgja/base": pkgPath("base"),
			"@fylgja/breadcrumbs": pkgPath("components/breadcrumbs"),
			"@fylgja/callout": pkgPath("components/callout"),
			"@fylgja/card": pkgPath("components/card"),
			"@fylgja/form-extend": pkgPath("components/form-extend"),
			"@fylgja/input-group": pkgPath("components/input-group"),
			"@fylgja/toast": pkgPath("components/toast"),
			// Aliases skip the exports map, and this subpath must match before the package
			"@fylgja/tokens/css": pkgPath("tokens/css/index.css"),
			"@fylgja/tokens": pkgPath("tokens"),
			"@fylgja/utilities": pkgPath("utilities"),
		},
	},
});
