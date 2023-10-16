const contentElement = document.querySelector(".js-main-content");
const headerElement = document.querySelector(".js-header-content");

export default function attributionsPage() {
	headerElement.innerHTML = "";
	contentElement.innerHTML = "";
	contentElement.innerHTML = "<h1>Attributions</h1>";
}
