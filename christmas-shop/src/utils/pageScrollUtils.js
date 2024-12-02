export const disalowScroll = () => {
	document.body.style.overflowY = "hidden !important";
	document.body.style.touchAction = "none";
};

export const allowScroll = () => {
	document.body.style.overflowY = "visible";
	document.body.style.touchAction = "auto";
};
