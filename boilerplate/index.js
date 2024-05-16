const storageKey = "theme-preference";
const mqIsDark = window.matchMedia("(prefers-color-scheme: dark)");

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

const applyColorPreference = () => {
	document.documentElement.setAttribute("data-theme", theme.value);
};

applyColorPreference();

mqIsDark.addEventListener("change", ({ matches: isDark }) => {
	theme.value = isDark ? "dark" : "light";
	saveColorPreference();
	applyColorPreference();
});

document.addEventListener("click", (e) => {
	if (!e.target.closest("[data-set-theme]")) return;
	const themeValue = e.target
		.closest("[data-set-theme]")
		.getAttribute("data-set-theme");
	console.log(themeValue);
	theme.value = themeValue || (theme.value === "light" ? "dark" : "light");
	saveColorPreference();
	applyColorPreference();
});
