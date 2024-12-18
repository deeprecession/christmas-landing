import { allowScroll, disalowScroll } from "../pageScrollUtils";

const initBurgerMenu = () => {
	const burgerMenuBtn = document.getElementById("burger-menu-btn");
	const headerNav = document.getElementById("header-nav");
	const mainHeader = document.getElementById("main-header");

	const toggleMenu = () => {
		const isMenuOpen = mainHeader.classList.toggle("menu-opened");

		disalowScroll();
		if (isMenuOpen) {
			setBurgerMenuToOpenState();
			disalowScroll();
		} else {
			setBurgerMenuToClsedState();
			allowScroll();
		}
	};
	const updateMenuStateOnResize = () => {
		setBurgerMenuToClsedState();

		if (window.innerWidth >= 768) {
			mainHeader.classList.remove("menu-opened");
			headerNav.style.display = "flex";

			allowScroll();
		} else {
			headerNav.style.display = "none";
		}
	};

	burgerMenuBtn.addEventListener("click", toggleMenu);
	window.addEventListener("resize", updateMenuStateOnResize);

	const burgerMenu = document.getElementById("burger-menu");
	const links = burgerMenu.querySelectorAll("a");
	links.forEach((link) => {
		link.addEventListener("click", () => {
			setBurgerMenuToClsedState();
			mainHeader.classList.remove("menu-opened");
		});
	});

	updateMenuStateOnResize();
};

const setBurgerMenuToClsedState = () => {
	const burgerMenu = document.getElementById("burger-menu");
	burgerMenu.classList.remove("burger-menu__site-navigation-opened");

	const burgerMenuContainer = document.getElementById("burger-menu-container");
	burgerMenuContainer.classList.remove("burger-menu-container-extended");
};

const setBurgerMenuToOpenState = () => {
	const burgerMenu = document.getElementById("burger-menu");
	const burgerMenuContainer = document.getElementById("burger-menu-container");

	burgerMenu.classList.add("burger-menu__site-navigation-opened");

	burgerMenuContainer.classList.add("burger-menu-container-extended");
};

export default initBurgerMenu;
