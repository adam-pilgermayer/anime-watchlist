import { state, initializeEventListeners } from "../state";


const contentElement = document.querySelector(".js-main-content");
const headerElement = document.querySelector(".js-header-content");

export default function myListPage() {
	initializeEventListeners();
	headerElement.innerHTML = "";
	contentElement.innerHTML = "";
	contentElement.innerHTML = "<h1>MyListPage</h1>";
	console.log(state.airingList);
}
