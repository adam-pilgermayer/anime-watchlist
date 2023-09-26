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
