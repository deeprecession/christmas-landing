import "./scss/main.scss";
import initBurgerMenu from "./utils/burgerMenu";
import { addEventListenersToFilters } from "./utils/giftFilters";
import { loadAllGifts } from "./utils/loadAllGifts";
import { resetRandomGiftsComponent } from "./utils/randomGifts";
import { addScrollUpButtonEventListener } from "./utils/scrollUpButton";
import { addSliderEventListener } from "./utils/slider";
import { startCTATimer } from "./utils/timer";

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
	addEventListenersToFilters();
	addScrollUpButtonEventListener();
	initBurgerMenu();
}
