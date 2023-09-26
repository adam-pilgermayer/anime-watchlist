const contentElement = document.querySelector(".main-content");
const headerElement = document.querySelector(".header-content");

export default function popularPage() {
	headerElement.innerHTML = "";
	contentElement.innerHTML = "";
	contentElement.innerHTML = "<h1>Popular Page</h1>";
}
