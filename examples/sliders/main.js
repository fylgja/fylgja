function newCssSlider(slider) {
	if (!slider) {
		console.error("use a valid html element with an id");
		return;
	}

	const sliderTrack = slider.querySelector("[data-slide-track]");
	if (!sliderTrack) {
		console.error(
			"No track specified, make sure to set data-slide-track on the slides wrapper"
		);
		return;
	}

	const sliderElements = Array.from(sliderTrack.children);

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				entry.target.setAttribute(
					"data-slide-active",
					entry.intersectionRatio >= 0.99
				);
			});
		},
		{
			root: slider,
			threshold: [0.01, 0.99],
		}
	);

	sliderElements.forEach((slide) => {
		observer.observe(slide);
	});

	function sliderThumbs(event) {
		if (!event.target.closest("[data-slider-thumbs]")) return;
		const link = event.target.closest("a");
		if (!link) return;
		event.preventDefault();
		const target = document.querySelector(link.getAttribute("href"));
		if (!target) return;
		target.scrollIntoView({ block: "nearest" });
	}

	function sliderNavButtons(event) {
		const prevBtn = event.target.closest("[data-slide-prev]");
		const nextBtn = event.target.closest("[data-slide-next]");
		const currentSlides = Array.from(
			slider.querySelectorAll('[data-slide-active="true"]')
		);
		if (!currentSlides.length) return;

		if (prevBtn) {
			const target = currentSlides[0].previousElementSibling;
			if (!target) return;
			target.scrollIntoView({ block: "nearest" });
		}

		if (nextBtn) {
			const target =
				currentSlides[currentSlides.length - 1].nextElementSibling;

			if (!target) return;
			target.scrollIntoView({ block: "nearest" });
		}
	}

	slider.addEventListener("click", (event) => {
		sliderNavButtons(event);
		sliderThumbs(event);
	});
}

newCssSlider(document.getElementById("css-slider-example"));
newCssSlider(document.getElementById("css-slider-example2"));
