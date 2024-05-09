/* stylelint-disable at-rule-no-unknown */

@layer utilities {
	@utility {
		property: display;
		values: none, block, inline-block, flex;
	}

	@utility {
		selector: ".flex";
		property: flex-wrap;
		values: wrap, nowrap;
	}

	@utility {
		selector: ".flex";
		property: flex-direction;
		values: row, column;
	}
}
