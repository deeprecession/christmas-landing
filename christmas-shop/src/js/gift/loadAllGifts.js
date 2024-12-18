import { createGiftCard } from "./createGiftCard";
import { fetchGiftsJSON } from "./fetchGiftsJSON";

export const loadAllGifts = async () => {
	const cards = await fetchGiftsJSON();

	const cardsElements = [];
	cards.map((card, id) => {
		const cardElement = createGiftCard(card);
		cardElement.id = `gift-${id}`;
		cardsElements.push(cardElement);
	});

	const container = document.getElementById("gifts-container");
	cardsElements.map((cardElem) => container.appendChild(cardElem));
};
