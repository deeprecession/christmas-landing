import { fetchGiftsJSON } from "./fetchGiftsJSON";

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
		giftsEelments.push(createGiftCards(gift.name, gift.category));
	}

	return giftsEelments;
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
