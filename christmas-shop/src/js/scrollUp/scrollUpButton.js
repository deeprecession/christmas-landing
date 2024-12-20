export const addScrollUpButtonEventListener = () => {
	const button = document.getElementById("scrollUpButton");

	button.addEventListener("click", () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	});

	window.addEventListener("scroll", () => {
		if (window.innerWidth <= 768 && window.scrollY > 300) {
			button.style.display = "flex";
		} else {
			button.style.display = "none";
		}
	});

	window.addEventListener("resize", () => {
		if (window.innerWidth <= 768 && window.scrollY > 300) {
			button.style.display = "flex";
		} else {
			button.style.display = "none";
		}
	});
};
