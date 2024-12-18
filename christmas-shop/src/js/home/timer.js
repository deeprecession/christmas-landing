const updateTimer = () => {
	const daysElement = document.getElementById("cta_days");
	const hoursElement = document.getElementById("cta_hours");
	const minutesElement = document.getElementById("cta_minutes");
	const secondsElement = document.getElementById("cta_seconds");

	const now = new Date();
	const nextYearDate = new Date(Date.UTC(now.getFullYear() + 1, 0, 1));

	const leftUntilNewYear = nextYearDate - now;

	const days = Math.floor(leftUntilNewYear / (1000 * 60 * 60 * 24));
	const hours = Math.floor((leftUntilNewYear / (1000 * 60 * 60)) % 24);
	const minutes = Math.floor((leftUntilNewYear / (1000 * 60)) % 60);
	const seconds = Math.floor((leftUntilNewYear / 1000) % 60);

	daysElement.innerText = days;
	hoursElement.innerText = hours;
	minutesElement.innerText = minutes;
	secondsElement.innerText = seconds;
};

export const startCTATimer = () => {
	setInterval(updateTimer, 1000);
};
