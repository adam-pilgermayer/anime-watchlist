import loadingSpinnerIcon from "../../assets/images/loading.gif";
import { createIcon } from "../utils";
import { state, initializeEventListeners } from "../state";
import { getTopAnimeList } from "../api";
import { scrollableList } from "../components/lists";

export default function homePage() {
	const headerElement = document.querySelector(".header-content");
	const contentElement = document.querySelector(".main-content");

	const setInitialData = async () => {
		const delay = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

		if (state.popularList.length !== 0) return;
		if (state.airingList.length !== 0) return;
		if (state.upcomingList.length !== 0) return;

		const popularData = await getTopAnimeList({
			filter: "bypopularity",
			page: 1,
		});
		state.popularList.push(popularData);
		await delay();
		const airingData = await getTopAnimeList({ filter: "airing", page: 1 });
		state.airingList.push(airingData);
		await delay();

		const upcomingData = await getTopAnimeList({ filter: "upcoming", page: 1 });
		state.upcomingList.push(upcomingData);
	};

	const renderSpinner = () => {
		const spinnerHTML = createIcon(
			loadingSpinnerIcon,
			"loading spinner icon",
			"spinner"
		);
		return `<section class="wrapper spinner-box">${spinnerHTML}</section>`;
	};

	const renderLoader = (selector) => {
		selector.innerHTML = "";
		selector.innerHTML += renderSpinner();
	};

	const renderHomeHeader = () => {
		headerElement.innerHTML = "";

		const headerHTML = `
		<header class="home-header">
			<section class="container-flex-col wrapper flow">
				<h1 class="h1">Create your unique Anime list</h1>
				<p class="paragraph-shrink">
					Search up your favorite anime, save it to your own list and track the
					progress.
				</p>
				<a href="/search/anime" tabindex="0" class="btn btn-1-filled" data-navigo>
					Search Anime
				</a>
			</section>
		</header>`;

		headerElement.innerHTML = headerHTML;
	};

	const renderHomeContent = () => {
		contentElement.innerHTML = "";

		const myAnimeListHTML = scrollableList({
			listTitle: "My List",
			titlePath: "/mylist",
			animeList: state.myAnimeList.all,
			cardLimit: 25,
			isLazy: false,
		});

		const popularListHTML = scrollableList({
			listTitle: "Most Popular",
			titlePath: "/popular",
			animeList: state.popularList,
			cardLimit: 25,
			isLazy: true,
		});

		const airingListHTML = scrollableList({
			listTitle: "Top Airing",
			titlePath: "/popular",
			animeList: state.airingList,
			cardLimit: 25,
			isLazy: true,
		});

		const upcomingListHTML = scrollableList({
			listTitle: "Top Upcoming",
			titlePath: "/popular",
			animeList: state.upcomingList,
			cardLimit: 25,
			isLazy: true,
		});

		contentElement.appendChild(myAnimeListHTML);
		contentElement.appendChild(popularListHTML);
		contentElement.appendChild(airingListHTML);
		contentElement.appendChild(upcomingListHTML);
	};

	const renderHomePage = async () => {
		initializeEventListeners();
		renderHomeHeader();
		renderLoader(contentElement);
		await setInitialData();
		renderHomeContent();
	};

	renderHomePage();
}
