function pluginCreator(opts) {
	return {
		postcssPlugin: "postcss-utility-to-css",
		AtRule: {
			utility: (util, { Declaration, Rule }) => {
				if (!util.nodes) return;

				const { name, prop, values } = util.nodes.reduce(
					(acc, node) => {
						if (node.prop === "selector") {
							acc.name = node.selector;
						}

						if (node.prop === "property") {
							acc.prop = node.value;
						}

						if (node.prop === "values") {
							acc.values = node.value.split(/\s*,\s*/);
						}

						return acc;
					},
					{}
				);

				values.forEach((value) => {
					let selector = value;

					if (prop === "display" && value === "none") {
						selector = "hidden";
					}

					if (name) {
						selector = `${name}-${selector}`;
					} else {
						selector = `.${selector}`;
					}

					const rule = new Rule({ selector });
					const declaration = new Declaration({ prop, value });

					rule.append(declaration);
					util.after(rule);
				});

				// Remove the @utility rule after processing
				util.remove();
			},
		},
	};
}

pluginCreator.postcss = true;

module.exports = pluginCreator;
