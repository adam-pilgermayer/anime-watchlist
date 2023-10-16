import Navigo from "navigo";
import routes from "./routes";
import { Navbar } from "./components/constantElements";
import { state, initializeState } from "./state";
import { delay, renderLoader } from "./utils";
import { getTopAnimeList } from "./api";

export default async function App() {
	const hasInitialData = () => {
		console.log("yo", state.popularList.length !== 0);
		return (
			state.popularList.length !== 0 &&
			state.airingList.length !== 0 &&
			state.upcomingList.length !== 0 &&
			state.topList.length !== 0
		);
	};

	const setInitialData = async () => {
		if (hasInitialData()) return;

		const topListData = await getTopAnimeList({
			filter: "",
			page: 1,
		});
		state.topList.push(topListData);
		await delay(1000);
		const popularData = await getTopAnimeList({
			filter: "bypopularity",
			page: 1,
		});
		state.popularList.push(popularData);
		await delay(1000);
		const airingData = await getTopAnimeList({ filter: "airing", page: 1 });
		state.airingList.push(airingData);
		await delay(1000);

		const upcomingData = await getTopAnimeList({ filter: "upcoming", page: 1 });
		state.upcomingList.push(upcomingData);
	};

	const renderLoadingScreen = () => {
		const loadingScreenHTML = `
			<section class="loading-screen container-flex-row js-loading-screen">
			</section>
		`;
		body.innerHTML += loadingScreenHTML;
		body.classList.add("scroll-disabled");
		const loadingScreenElement = document.querySelector(".js-loading-screen");
		renderLoader(loadingScreenElement);
	};

	const removeLoadingScreen = () => {
		const loadingScreenElement = document.querySelector(".js-loading-screen");
		if (!loadingScreenElement) return;
		body.classList.remove("scroll-disabled");
		loadingScreenElement.remove();
	};

	// Constants

	const body = document.querySelector("body");

	// Initializing state

	initializeState();

	// Fetch data & set state

	renderLoadingScreen();
	await setInitialData();
	removeLoadingScreen();

	//Routing
	const router = new Navigo(null, false);

	routes.forEach((route) => {
		router
			.on(route.path, () => {
				route.page();
				document.title = route.title;
			})
			.resolve();
	});

	router.notFound(() => {
		router.navigate("/");
	});

	// Events
	window.addEventListener("load", Navbar);
}
