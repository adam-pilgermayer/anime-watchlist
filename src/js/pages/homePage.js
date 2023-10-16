import { state, initializeEventListeners } from "../state";
import { scrollableList } from "../components/lists";

export default function homePage() {
	const headerElement = document.querySelector(".js-header-content");
	const contentElement = document.querySelector(".js-main-content");

	const renderHomeHeader = () => {
		headerElement.innerHTML = "";

		const headerHTML = `
		<section class="home-header">
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
		</section>`;

		headerElement.innerHTML = headerHTML;
	};

	const renderHomeContent = () => {
		contentElement.innerHTML = "";
		console.log(state);
		const listsToRender = [
			{
				listTitle: "My List",
				titlePath: "/mylist",
				animeList: state.myAnimeList.all,
				isLazy: false,
			},
			{
				listTitle: "Top Anime",
				titlePath: "/popular",
				animeList: state.topList[0],
				isLazy: true,
			},
			{
				listTitle: "Most Popular",
				titlePath: "/popular",
				animeList: state.popularList[0],
				isLazy: true,
			},
			{
				listTitle: "Top Airing",
				titlePath: "/popular",
				animeList: state.airingList[0],
				isLazy: true,
			},
			{
				listTitle: "Top Upcoming",
				titlePath: "/popular",
				animeList: state.upcomingList[0],
				isLazy: true,
			},
		];

		listsToRender.map((list) => {
			const listHTML = scrollableList(list);
			contentElement.appendChild(listHTML);
		});
	};

	const loadHomePage = () => {
		initializeEventListeners();
		renderHomeHeader();
		renderHomeContent();
	};

	loadHomePage();
}
