import { state, initializeEventListeners } from "../state";
import { getTopAnimeList } from "../api";
import { createIcon } from "../utils";
import loadingSpinnerIcon from "../../assets/images/loading.gif";

export default function popularPage() {
	const headerElement = document.querySelector(".js.header-content");
	const contentElement = document.querySelector(".js.main-content");

	const animeLists = [
		{ name: "Top Anime", value: null },
		{ name: "Most Popular", value: "bypopularity" },
		{ name: "Top Airing", value: "airing" },
		{ name: "Top Upcoming", value: "upcoming" },
	];

	const renderSelectOptions = (animeLists) => {
		let optionsHTML = "";
		animeLists.map((option) => {
			optionsHTML += `
				<option value="${option.value}" class="dropdown-menu-option">${option.name}</option>
			`;
		});
		return optionsHTML;
	};

	const renderPopularHeader = (currentList) => {
		headerElement.innerHTML = "";

		let optionsHTML = renderSelectOptions(animeLists);
		let headerHTML = `
			<section class="popular-header">
				<section class="wrapper container-flex-row space-between">
					<h3 class="h3">${currentList.name}</h3>
					<label class="input-title">
						<select name="lists" class="dropdown-menu js-select-anime-list">
							${optionsHTML}
						</select>
					</label>
				</section>	
			</section>
		`;

		headerElement.innerHTML += headerHTML;
	};

	const renderPopularContent = async (currentList) => {
		contentElement.innerHTML = "";
		let currentData = await getTopAnimeList({
			filter: currentList.value,
			page: 1,
		});

		console.log(currentData);
	};

	const changeView = (event) => {
		const target = event.target;
		const listToLoad = animeLists.find((obj) => obj.value === target.value);
		renderPopularHeader(listToLoad);
		renderPopularContent(listToLoad);
	};

	const loadPopularPage = async () => {
		initializeEventListeners();
		renderPopularHeader(animeLists[0]);
		await renderPopularContent(animeLists[0]);
	};

	loadPopularPage();

	headerElement.addEventListener("change", changeView);
}
