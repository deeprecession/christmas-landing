export const addSliderEventListener = () => {
	const slider = document.getElementById("slider");
	const left = document.getElementById("slider-left");
	const right = document.getElementById("slider-right");

	let position = 0;

	const moveToRight = () => {
		if (-position >= slider.scrollWidth - window.innerWidth) {
			return;
		}

		const step = calculateStepSize();

		position -= step;
		slider.style.left = `${position}px`;

		updateButtonsStyles();
	};

	const moveToLeft = () => {
		if (-position <= 0) {
			return;
		}

		const step = calculateStepSize();

		position += step;
		slider.style.left = `${position}px`;

		updateButtonsStyles();
	};

	const updateButtonsStyles = () => {
		if (-position >= slider.scrollWidth - window.innerWidth) {
			right.disabled = true;
		} else {
			right.disabled = false;
		}

		if (-position <= 0) {
			left.disabled = true;
		} else {
			left.disabled = false;
		}
	};

	window.addEventListener("resize", () => {
		position = 0;
		slider.style.left = `0px`;

		updateButtonsStyles();
	});

	left.addEventListener("click", moveToLeft);
	right.addEventListener("click", moveToRight);

	updateButtonsStyles();
};

const calculateStepSize = () => {
	const slider = document.getElementById("slider");

	const sliderWidth = slider.scrollWidth + 20;
	const windowSize = window.innerWidth;

	const steps = windowSize < 768 ? 6 : 3;

	// debugger;
	return (sliderWidth - windowSize) / steps;
};
