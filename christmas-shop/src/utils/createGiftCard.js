const basepath = "/deeprecession-JSFE2024Q4";

const categoryToImagePath = {
	"For Work": basepath + "/gift-for-work.png",
	"For Health": basepath + "/gift-for-health.png",
	"For Harmony": basepath + "/gift-for-harmony.png",
};

const categoryToColor = {
	"For Work": "purple",
	"For Health": "green",
	"For Harmony": "pink",
};

export const createGiftCard = ({ name, category }) => {
	const giftCard = document.createElement("div");
	giftCard.classList.add("gift-card");

	const img = document.createElement("img");
	img.src = categoryToImagePath[category];
	img.alt = "gift";

	const textContainer = document.createElement("div");
	textContainer.classList.add("gift-card__text");

	const categoryElement = document.createElement("h4");
	categoryElement.classList.add(
		`gift-card__text__tag-${categoryToColor[category]}`,
	);
	categoryElement.textContent = category;

	const title = document.createElement("h3");
	title.textContent = name;

	textContainer.appendChild(categoryElement);
	textContainer.appendChild(title);

	giftCard.appendChild(img);
	giftCard.appendChild(textContainer);

	return giftCard;
};
