export const disalowScroll = () => {
	document.documentElement.classList.add("hidden-scroll");
};

export const allowScroll = () => {
	document.documentElement.classList.remove("hidden-scroll");
};
