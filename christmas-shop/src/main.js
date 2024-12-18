import initBurgerMenu from "./js/burgerMenu/burgerMenu";
import { loadAllGifts } from "./js/gift/loadAllGifts";
import { resetRandomGiftsComponent } from "./js/gift/randomGifts";
import { addSliderEventListener } from "./js/home/slider";
import { startCTATimer } from "./js/home/timer";
import { addScrollUpButtonEventListener } from "./js/scrollUp/scrollUpButton";
import "./scss/main.scss";

const basePath = window.location.pathname.startsWith(
	"/deeprecession-JSFE2024Q4",
)
	? "/deeprecession-JSFE2024Q4"
	: "";

if (
	window.location.pathname === `${basePath}/` ||
	window.location.pathname === `${basePath}/index.html`
) {
	startCTATimer();
	resetRandomGiftsComponent();
	initBurgerMenu();
	addSliderEventListener();
}

if (
	window.location.pathname === `${basePath}/gifts` ||
	window.location.pathname === `${basePath}/gifts.html`
) {
	loadAllGifts();
	addEventListener();
	addScrollUpButtonEventListener();
	initBurgerMenu();
}
