const contentElement = document.querySelector(".main-content");
const headerElement = document.querySelector(".header-content");

export default function attributionsPage() {
	headerElement.innerHTML = "";
	contentElement.innerHTML = "";
	contentElement.innerHTML = "<h1>Attributions</h1>";
}
