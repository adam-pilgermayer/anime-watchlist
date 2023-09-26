const contentElement = document.querySelector(".main-content");
const headerElement = document.querySelector(".header-content");
export default function searchPage() {
	headerElement.innerHTML = "";
	contentElement.innerHTML = "";
	contentElement.innerHTML = "<h1>Search</h1>";
}
