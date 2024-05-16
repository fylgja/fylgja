const storageKey = "theme-preference";
const mqIsDark = window.matchMedia("(prefers-color-scheme: dark)");
const btnTogglePreference = "[data-color-preference]";

const getColorPreference = () => {
	const preference = localStorage.getItem(storageKey);
	return preference ? preference : mqIsDark.matches ? "dark" : "light";
};

const theme = {
	value: getColorPreference(),
};

const saveColorPreference = () => {
	localStorage.setItem(storageKey, theme.value);
};

const updateBtnTogglePreference = () => {
	document.querySelectorAll(btnTogglePreference).forEach((el) => {
		el.setAttribute(
			"aria-label",
			theme.value === "dark"
				? "Activate light mode"
				: "Activate dark mode"
		);
		el.innerText =
			theme.value === "dark" ? "Switch to light" : "Switch to dark";
	});
};

const applyColorPreference = () => {
	document.documentElement.setAttribute("data-theme", theme.value);
	updateBtnTogglePreference();
};

applyColorPreference();

document.addEventListener("DOMContentLoaded", updateBtnTogglePreference, false);

document.addEventListener("click", (e) => {
	if (!e.target.closest(btnTogglePreference)) return;
	theme.value = theme.value === "light" ? "dark" : "light";
	saveColorPreference();
	applyColorPreference();
});

mqIsDark.addEventListener("change", ({ matches: isDark }) => {
	theme.value = isDark ? "dark" : "light";
	saveColorPreference();
	applyColorPreference();
});
