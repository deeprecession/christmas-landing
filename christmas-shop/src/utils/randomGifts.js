const categoryToImagePath = {
	"For Work": "/gift-for-work.png",
	"For Health": "/gift-for-health.png",
	"For Harmony": "/gift-for-harmony.png",
};

const categoryToColor = {
	"For Work": "purple",
	"For Health": "green",
	"For Harmony": "pink",
};

export const resetRandomGiftsComponent = async () => {
	const allGifts = await fetchGiftsJSON();

	const randomGifts = popRandomN(allGifts, 4);

	console.log(randomGifts);

	updateComponent(randomGifts);
};

const updateComponent = (gifts) => {
	const giftsContainer = document.getElementById("random-gifts");

	if (!giftsContainer) {
		console.error("#random-gifts does not exist");
		return;
	}

	const cards = createGiftCards(gifts);

	resetComponentWithCards(giftsContainer, cards);
};

const resetComponentWithCards = (element, cards) => {
	element.innerHtml = "";

	cards.map((card) => {
		element.appendChild(card);
	});
};

const createGiftCards = (gifts) => {
	const giftsEelments = [];

	for (const gift of gifts) {
		giftsEelments.push(createGiftCard(gift.name, gift.category));
	}

	return giftsEelments;
};

const createGiftCard = (name, category) => {
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

const popRandomN = (list, n) => {
	const result = [];

	for (let i = 0; i < n; i++) {
		if (list.length == 0) break;

		const randomElement = popRandom(list);
		result.push(randomElement);
	}

	return result;
};

const popRandom = (list) => {
	const randomInx = Math.floor(Math.random() * list.length);
	return list.splice(randomInx, 1)[0];
};

const fetchGiftsJSON = async () => {
	try {
		const response = await fetch("/gifts.json");
		if (!response.ok) {
			throw new Error("Failed to load gifts JSON");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error loading gifts JSON:", error);
		return [];
	}
};
