import initBurgerMenu from "./js/burgerMenu/burgerMenu";
import { addEventListenersToFilters } from "./js/gift/giftFilters";
import { loadAllGifts } from "./js/gift/loadAllGifts";
import { resetRandomGiftsComponent } from "./js/gift/randomGifts";
import { addSliderEventListener } from "./js/home/slider";
import { startCTATimer } from "./js/home/timer";
import { addScrollUpButtonEventListener } from "./js/scrollUp/scrollUpButton";
import "./scss/main.scss";

const basePath = window.location.pathname.startsWith("/christmas-landing/")
	? "/christmas-landing"
	: "";

const pathname = window.location.pathname;

if ([`${basePath}/`, `${basePath}/index.html`].includes(pathname)) {
	startCTATimer();
	resetRandomGiftsComponent();
	initBurgerMenu();
	addSliderEventListener();
}

if ([`${basePath}/gifts`, `${basePath}/gifts.html`].includes(pathname)) {
	loadAllGifts();
	addEventListenersToFilters();
	addScrollUpButtonEventListener();
	initBurgerMenu();
}
