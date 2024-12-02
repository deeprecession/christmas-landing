import "./scss/main.scss";
import { addEventListenersToFilters } from "./utils/giftFilters";
import { loadAllGifts } from "./utils/loadAllGifts";
import { resetRandomGiftsComponent } from "./utils/randomGifts";
import { startCTATimer } from "./utils/timer";

if (
	window.location.pathname === "/" ||
	window.location.pathname === "/index.html"
) {
	startCTATimer();
	resetRandomGiftsComponent();
}

if (
	window.location.pathname === "/gifts" ||
	window.location.pathname === "/gifts.html"
) {
	loadAllGifts();
	addEventListenersToFilters();
}
