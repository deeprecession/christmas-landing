import "./scss/main.scss";
import initBurgerMenu from "./utils/burgerMenu";
import { addEventListenersToFilters } from "./utils/giftFilters";
import { loadAllGifts } from "./utils/loadAllGifts";
import { resetRandomGiftsComponent } from "./utils/randomGifts";
import { addScrollUpButtonEventListener } from "./utils/scrollUpButton";
import { addSliderEventListener } from "./utils/slider";
import { startCTATimer } from "./utils/timer";

if (
	window.location.pathname === "/" ||
	window.location.pathname === "/index.html"
) {
	startCTATimer();
	resetRandomGiftsComponent();
	initBurgerMenu();
	addSliderEventListener();
}

if (
	window.location.pathname === "/gifts" ||
	window.location.pathname === "/gifts.html"
) {
	loadAllGifts();
	addEventListenersToFilters();
	addScrollUpButtonEventListener();

	initBurgerMenu();
}
