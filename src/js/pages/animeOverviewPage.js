const contentElement = document.querySelector(".js-main-content");
const headerElement = document.querySelector(".js-header-content");

export default function animeOverviewPage() {
	headerElement.innerHTML = "";
	contentElement.innerHTML = "";
	contentElement.innerHTML = "<h1>anime Overview</h1>";
}
