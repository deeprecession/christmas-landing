let curActiveElement = document.getElementById("filter-gifts-all");

export const addEventListenersToFilters = () => {
	addEventListeter("filter-gifts-all", filterAll);
	addEventListeter("filter-gifts-work", filterByCategory("work"));
	addEventListeter("filter-gifts-harmony", filterByCategory("harmony"));
	addEventListeter("filter-gifts-health", filterByCategory("health"));
};

const addEventListeter = (id, filterCallback) => {
	const elem = document.getElementById(id);

	elem.addEventListener("click", () => {
		if (elem == curActiveElement) return;

		filterCallback();

		switchSelectedFilterStyle(elem);
	});
};

const switchSelectedFilterStyle = (switchTo) => {
	curActiveElement.className = "gifts__filter-panel__button-normal";
	switchTo.className = "gifts__filter-panel__button-active";
	curActiveElement = switchTo;
};

const filterAll = () => {
	const container = document.getElementById("gifts-container");

	Array.from(container.children).forEach((child) => {
		child.style.display = "";
	});
};

const filterByCategory = (category) => {
	return () => {
		const container = document.getElementById("gifts-container");

		Array.from(container.children).forEach((child) => {
			const h4 = child.querySelector("h4");

			if (h4 && !h4.textContent.toLowerCase().includes(category)) {
				child.style.display = "none";
			} else {
				child.style.display = "";
			}
		});
	};
};
