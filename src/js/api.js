const API_PREFIX = "https://api.jikan.moe/v4/";

const API_ENDPOINTS = {
	anime: "anime/:id",
	similar: "anime/:id/recommendations",
	search: "anime",
	season: "seasons/:year/:season",
	top: "top/anime",
	random: "random/anime",
	genres: "genres/anime",
};

export async function getTopAnimeList({ filter, page }) {
	const hasFilter = filter === null || filter.length === 0 ? "" : `&filter=${filter}`;
	const url = `${API_PREFIX}${API_ENDPOINTS.top}?page=${page}${hasFilter}`;
	const newAnimeData = await fetchData(url);
	return newAnimeData;
}

export function getRandomAnime() {}

export async function getSearchResults(searchValue, state) {
	const url = `${API_PREFIX}${API_ENDPOINTS.search}?q=${searchValue}&limit=${defaultItemCount}`;

	const searchData = await fetchData(url);
	if (state.length <= 0) {
		state.push(searchData);
	} else {
		let copyOfState = structuredClone(state[0].data);
		let built = [...copyOfState, ...searchData.data];
		state[0].data = built;
	}
}

// This is not required, because every anime on the view is
// available through state, just have to find elem inside state
// THIS FUNCTION IS JUST A REMINDER HERE!
export function getSingleAnimeInfo() {}

export function getSimilarAnime() {}

async function fetchData(url) {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error("Error in request", response.statusText);
		}
		const animeData = await response.json();
		return animeData;
	} catch (err) {
		console.error("Something went wrong!\n", err);
	}
}
