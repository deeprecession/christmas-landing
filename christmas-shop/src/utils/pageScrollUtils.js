export const disalowScroll = () => {
	document.body.style.overflow = "hidden";
	document.body.style.touchAction = "none";
};

export const allowScroll = () => {
	document.body.style.overflow = "visible";
	document.body.style.touchAction = "auto";
};
