const contentElement = document.querySelector(".main-content");
const headerElement = document.querySelector(".header-content");

export default function randomAnimePage() {
	headerElement.innerHTML = "";
	contentElement.innerHTML = "";
	contentElement.innerHTML = "<h1>Random Anime</h1>";
}
