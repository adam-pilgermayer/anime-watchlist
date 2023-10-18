import { state, initializeEventListeners } from "../state";
import { getTopAnimeList } from "../api";

const animeLists = [
	{ name: "Top Anime", value: "" },
	{ name: "Most Popular", value: "bypopularity" },
	{ name: "Top Airing", value: "airing" },
	{ name: "Top Upcoming", value: "upcoming" },
];

let selectedOption = animeLists[0].name;

export default function popularPage() {
	const headerElement = document.querySelector(".js-header-content");
	const contentElement = document.querySelector(".js-main-content");

	const renderSelectOptions = (animeLists) => {
		let optionsHTML = "";
		animeLists.map((option) => {
			let isSelected = selectedOption === option.name ? "selected" : "";
			optionsHTML += `
				<option ${isSelected} value="${option.value}" class="dropdown-menu-option">${option.name}</option>
			`;
		});
		return optionsHTML;
	};

	const renderPopularHeader = () => {
		headerElement.innerHTML = "";

		let optionsHTML = renderSelectOptions(animeLists);
		let headerHTML = `
			<section class="popular-header">
				<section class="wrapper container-flex-row space-between">
					<h3 class="h3">${selectedOption}</h3>
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
		selectedOption = listToLoad.name;
		renderPopularHeader();
		renderPopularContent(listToLoad);
	};

	const loadPopularPage = async () => {
		initializeEventListeners();
		renderPopularHeader();
		await renderPopularContent(animeLists[0]);
	};

	loadPopularPage();

	headerElement.addEventListener("change", changeView);
}
