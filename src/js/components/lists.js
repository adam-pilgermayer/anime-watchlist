import singleArrowIcon from "../../assets/images/chevron-right.svg";
import doubleArrowIconLeft from "../../assets/images/chevrons-left.svg";
import doubleArrowIconRight from "../../assets/images/chevrons-right.svg";
import { createIcon } from "../utils";
import { registEventListener } from "../state";
import { animeCard } from "./card";

export function scrollableList({ listTitle, titlePath, animeList, isLazy }) {
	const handleListScrollX = (event) => {
		const target = event.target;
		const parent = target.parentElement;

		const isLeft = "toLeft" in target.dataset || "toLeft" in parent.dataset;
		const isRight = "toRight" in target.dataset || "toRight" in parent.dataset;

		if (!isLeft && !isRight) return;

		const list = target.closest(".list-scroll").querySelector(".list-items");

		const xAxis = isLeft ? -400 : isRight ? 400 : 0;
		const yAxis = 0;
		const behavior = "smooth";

		list.scrollBy({ top: yAxis, left: xAxis, behavior: behavior });
	};

	const isListEmpty = (list) => {
		return list.length === 0;
	};

	const renderInterface = () => {
		const arrowRightHTML = createIcon(
			singleArrowIcon,
			"right arrow icon",
			"right-arrow-icon"
		);

		const arrowDoubleRightHTML = createIcon(
			doubleArrowIconRight,
			"right arrows icon"
		);

		const arrowDoubleLeftHTML = createIcon(
			doubleArrowIconLeft,
			"left arrows icon"
		);

		return `
			<a href="${titlePath}" class="list-title" data-navigo>
				<h3 class="h3">${listTitle}</h3>
				${arrowRightHTML}
			</a>
			<div class="list-controls">
				<div tabindex="0" class="list-to-left" data-to-left>
					${arrowDoubleLeftHTML}
				</div>
				<div tabindex="0" class="list-to-right" data-to-right>
					${arrowDoubleRightHTML}
				</div>
			</div>
		`;
	};
	const renderCards = (data) => {
		let listContentHTML = "";
		if (
			shrinkedAnimeList[0]?.data === null ||
			shrinkedAnimeList[0]?.data === undefined
		) {
			listContentHTML += `<p class="empty">This list is empty 😕</p>`;
			return listContentHTML;
		}

		shrinkedAnimeList[0]?.data.map((anime) => {
			listContentHTML += animeCard(anime, isLazy);
		});
		return listContentHTML;
	};

	const cardLimit = 25;
	let shrinkedAnimeList = [];

	if (!isListEmpty(animeList)) {
		shrinkedAnimeList = animeList.slice(0, cardLimit + 1);
	}

	const controllerInterface = renderInterface();
	const animeCards = renderCards(shrinkedAnimeList);

	const listElement = document.createElement("section");
	listElement.classList.add("list", "list-scroll");
	listElement.innerHTML += `
		${controllerInterface}
			<section class="list-items scrollable">
			${animeCards}
		</section>`;

	registEventListener({
		selector: listElement,
		listenTo: "click",
		callback: handleListScrollX,
	});

	const wrapperElement = document.createElement("article");
	wrapperElement.classList.add("wrapper");
	wrapperElement.appendChild(listElement);

	return wrapperElement;
}
