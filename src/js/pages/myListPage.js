import { state, initializeEventListeners } from "../state";


const contentElement = document.querySelector(".main-content");
const headerElement = document.querySelector(".header-content");

export default function myListPage() {
	initializeEventListeners();
	headerElement.innerHTML = "";
	contentElement.innerHTML = "";
	contentElement.innerHTML = "<h1>MyListPage</h1>";
	console.log(state.airingList);
}
