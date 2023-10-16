import loadingSpinnerIcon from "../assets/images/loading.gif";

export function setPage(content, selector) {
	document.addEventListener("DOMContentLoaded", function () {
		const contentElement = document.querySelector(selector);
		contentElement.innerHTML = content;
	});
}

export const createIcon = (src, alt, ...classes) => {
	const icon = new Image();
	icon.src = src;
	icon.alt = alt;
	if (classes.length > 0) {
		icon.classList.add(...classes);
	}
	return icon.outerHTML;
};

export const delay = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

export const renderSpinner = () => {
	const spinnerHTML = createIcon(
		loadingSpinnerIcon,
		"loading spinner icon",
		"spinner"
	);
	return `<section class="wrapper spinner-box">${spinnerHTML}</section>`;
};

export const renderLoader = (selector) => {
	selector.innerHTML = "";
	selector.innerHTML += renderSpinner();
};
