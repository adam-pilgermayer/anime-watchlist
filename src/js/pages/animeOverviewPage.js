const contentElement = document.querySelector(".main-content");
const headerElement = document.querySelector(".header-content");

export default function animeOverviewPage() {
	headerElement.innerHTML = "";
	contentElement.innerHTML = "";
	contentElement.innerHTML = "<h1>anime Overview</h1>";
}
