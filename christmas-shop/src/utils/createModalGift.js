import { allowScroll, disalowScroll } from "./pageScrollUtils";

export const showGiftModal = (gift) => {
	const modal = createGiftModal(gift);
	document.body.appendChild(modal);
};

const createOverlay = () => {
	const overlay = document.createElement("div");
	overlay.classList.add("overlay");

	overlay.addEventListener("click", () => {
		overlay.remove();
	});

	return overlay;
};

const createGiftModal = (gift) => {
	disalowScroll();

	const modalGift = document.createElement("div");
	modalGift.classList.add("modal-gift");

	const overlay = createOverlay();
	document.body.appendChild(overlay);

	const closeButton = createCloseButton(modalGift);
	const giftImg = createGiftImage(gift.category);
	const infoContainer = createInfoContainer(gift);

	modalGift.appendChild(closeButton);
	modalGift.appendChild(giftImg);
	modalGift.appendChild(infoContainer);

	overlay.addEventListener("click", () => {
		modalGift.remove();
		allowScroll();
	});
	closeButton.addEventListener("click", () => {
		overlay.remove();
		allowScroll();
	});

	return modalGift;
};

const createCloseButton = (modalGift) => {
	const closeButton = document.createElement("img");
	closeButton.classList.add("modal-gift__close-btn");
	closeButton.src = "/close.png";
	closeButton.alt = "close";

	closeButton.addEventListener("click", () => {
		modalGift.remove();
	});

	return closeButton;
};

const createGiftImage = (category) => {
	const giftImg = document.createElement("img");
	giftImg.classList.add("modal-gift__img");
	giftImg.src = `/gift-${category.toLowerCase().replace(" ", "-")}.png`;
	giftImg.alt = "gift";

	return giftImg;
};

const createInfoContainer = (gift) => {
	const infoContainer = document.createElement("div");
	infoContainer.classList.add("modal-gift__info-container");

	const info = createGiftInfo(gift);
	const superpowersContainer = createSuperpowersContainer(gift.superpowers);

	infoContainer.appendChild(info);
	infoContainer.appendChild(superpowersContainer);

	return infoContainer;
};

const createGiftInfo = (gift) => {
	const info = document.createElement("div");
	info.classList.add("modal-gift__info");

	const categoryTag = createCategoryTag(gift.category);
	const name = createGiftName(gift.name);
	const description = createGiftDescription(gift.description);

	info.appendChild(categoryTag);
	info.appendChild(name);
	info.appendChild(description);

	return info;
};

const createCategoryTag = (category) => {
	const categoryTag = document.createElement("h4");
	categoryTag.classList.add(
		`modal-gift__info__tag-${category.toLowerCase().replace(" ", "-")}`,
	);
	categoryTag.textContent = category.toLowerCase();

	return categoryTag;
};

const createGiftName = (name) => {
	const giftName = document.createElement("h3");
	giftName.textContent = name;
	return giftName;
};

const createGiftDescription = (description) => {
	const giftDescription = document.createElement("p");
	giftDescription.textContent = description;
	return giftDescription;
};

const createSuperpowersContainer = (superpowers) => {
	const container = document.createElement("div");
	container.classList.add("modal-gift__superpowers-container");

	const title = document.createElement("h4");
	title.textContent = "Adds superpowers to:";

	const list = createSuperpowersList(superpowers);

	container.appendChild(title);
	container.appendChild(list);

	return container;
};

const createSuperpowersList = (superpowers) => {
	const list = document.createElement("ul");

	Object.entries(superpowers).forEach(([title, points]) => {
		const listItem = createSuperpowerItem(title, points);
		list.appendChild(listItem);
	});

	return list;
};

const createSuperpowerItem = (title, points) => {
	const listItem = document.createElement("li");
	listItem.classList.add("modal-gift__superpower");

	const superpowerTitle = document.createElement("p");
	superpowerTitle.classList.add("modal-gift__superpower__title");
	superpowerTitle.textContent = title.charAt(0).toUpperCase() + title.slice(1);

	const superpowerPoints = document.createElement("p");
	superpowerPoints.classList.add("modal-gift__superpower__points");
	superpowerPoints.textContent = points;

	const starsContainer = createStarsContainer(points);

	listItem.appendChild(superpowerTitle);
	listItem.appendChild(superpowerPoints);
	listItem.appendChild(starsContainer);

	return listItem;
};

const createStarsContainer = (points) => {
	const starsContainer = document.createElement("div");
	starsContainer.classList.add("modal-gift__superpower__stars-container");

	const numStars = parseInt(points.substring(1), 10) / 100;

	for (let i = 0; i < 5; i++) {
		const star = document.createElement("img");
		star.classList.add("modal-gift__superpower__star");
		star.width = 16;
		star.height = 16;
		star.src = i < numStars ? "/star.png" : "/star-inactive.png";
		star.alt = "star";
		starsContainer.appendChild(star);
	}

	return starsContainer;
};
