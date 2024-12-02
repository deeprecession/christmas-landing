import { createGiftCard } from "./createGiftCard";
import { showGiftModal } from "./createModalGift";
import { fetchGiftsJSON } from "./fetchGiftsJSON";

export const loadAllGifts = async () => {
	const cards = await fetchGiftsJSON();

	const cardsElements = [];
	cards.map((card, id) => {
		const cardElement = createGiftCard(card);
		cardElement.id = `gift-${id}`;
		cardsElements.push(cardElement);
	});

	addEventListenersToGifts(cardsElements, cards);

	const container = document.getElementById("gifts-container");
	cardsElements.map((cardElem) => container.appendChild(cardElem));
};

const addEventListenersToGifts = (elements, cards) => {
	elements.map((element, i) =>
		element.addEventListener("click", () => {
			showGiftModal(cards[i]);
		}),
	);
};
