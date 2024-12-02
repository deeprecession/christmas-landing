import { allowScroll, disalowScroll } from "./pageScrollUtils";

export const addBurgerMenuBtnEventListener = () => {
	const openBtn = document.getElementById("open-burger-btn");
	const closeBtn = document.getElementById("close-burger-btn");
	const nav = document.getElementById("header-nav");
	const header = document.getElementById("main-header");

	const setOpenedBurgerState = () => {
		openBtn.style.display = "none";
		closeBtn.style.display = "block";

		nav.style.display = "block";
		nav.className = "main-header__burger-nav";

		header.className = "main-header-burger-unwrapped";

		disalowScroll();
	};

	const setClosedBurgerState = () => {
		closeBtn.style.display = "none";
		openBtn.style.display = "block";

		nav.style.display = "none";
		nav.className = "main-header__burger-nav";

		header.className = "main-header";

		allowScroll();
	};

	const setBigHeaderState = () => {
		openBtn.style.display = "none";
		closeBtn.style.display = "none";

		nav.style.display = "block";
		nav.className = "main-header__default-nav";

		header.className = "main-header";
	};

	const updtaeHeaderToWindowSize = () => {
		if (window.innerWidth < 768) {
			setClosedBurgerState();
		} else {
			setBigHeaderState();
		}
	};

	openBtn.addEventListener("click", () => {
		setOpenedBurgerState();
	});

	closeBtn.addEventListener("click", () => {
		setClosedBurgerState();
	});

	window.addEventListener("resize", () => {
		updtaeHeaderToWindowSize();
	});

	updtaeHeaderToWindowSize();
};
