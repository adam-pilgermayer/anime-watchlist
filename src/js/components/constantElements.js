export function Navbar() {
	const $burgerOpen = document.querySelector(".js-open-nav");
	const $burgerClose = document.querySelector(".js-close-nav");
	const $navbar = document.querySelector(".js-collapse");

	function openNavbar() {
		if (!$navbar.classList.contains("show")) {
			$navbar.classList.add("show");
			$burgerOpen.classList.add("hidden");
		}
	}

	function closeNavbar() {
		if ($navbar.classList.contains("show")) {
			$navbar.classList.remove("show");
			$burgerOpen.classList.remove("hidden");
		}
	}

	function handleNavbar(event) {
		//TODO: If clicked outside of navbar, close navbar
		//		If Nav elem clicked, close navbar
	}

	$burgerOpen.addEventListener("click", openNavbar);
	$burgerClose.addEventListener("click", closeNavbar);
}
