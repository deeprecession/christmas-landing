export const fetchGiftsJSON = async () => {
	try {
		const basepath = "/deeprecession-JSFE2024Q4/";
		const response = await fetch(basepath + "/gifts.json");
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
