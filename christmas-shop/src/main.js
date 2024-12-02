import "./scss/main.scss";
import { resetRandomGiftsComponent } from "./utils/randomGifts";
import { startCTATimer } from "./utils/timer";

if (
	window.location.pathname === "/" ||
	window.location.pathname === "/index.html"
) {
	startCTATimer();
	resetRandomGiftsComponent();
}
