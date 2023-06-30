const page = document.querySelector(".js-page"); // Has page dataset. Can be home, search, popular, myList
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

const PAGES = {
	home: "home",
	search: "search",
	popular: "popular",
	myList: "myList",
};

let { pageName, myList } = getInitialState();

function getInitialState() {
	return [
		{
			pageName: "home",
			myList: [],
		},
	];
}

function initialize() {
	return ([{ pageName, myList }] = getInitialState());
}

function reloadPage() {
	header.classList.add("refresh");
	main.classList.add("refresh");
	page.classList.add("actions-disabled");

	setTimeout(() => {
		renderPage();
		header.classList.remove("refresh");
		main.classList.remove("refresh");
		page.classList.remove("actions-disabled");
	}, 800);
}

function setPageName(event) {
	let elem = event.target;

	if (elem.dataset.hasOwnProperty("loadPage")) {
		if (pageName !== elem.dataset.loadPage) {
			pageName = elem.dataset.loadPage;
			reloadPage();
		}
	}
}

function selectPage() {
	if (pageName === "home") {
		renderHomePage();
	} else if (pageName === "search") {
		renderSearchPage();
	} else if (pageName === "popular") {
		renderPopularPage();
	} else if (pageName === "myList") {
		renderMyListPage();
	}
}

function renderHomeHeader() {
	return `<section
    class="container-md p-0 dynamic-border-md cont-dark">
    <div
        class="d-flex flex-column flex-md-row align-items-center text-center text-md-start">
        <div class="container p-0 ps-md-5 py-5 py-md-0">
            <h1 class="fw-bold mb-lg-5">Anime WatchList</h1>
            <h4 class="fw-light">
                Track your favourite
                <strong class="fw-bold gradient-text">Anime</strong>
            </h4>
            <h4 class="fw-light">and make your own list.</h4>
            <div class="pt-4">
                <button class="btn btn-info rounded-3 px-3 m-3 ms-md-0" data-load-page="${PAGES.search}">
                    Search Anime
                </button>
                <button class="btn btn-outline-info rounded-3" data-load-page="${PAGES.popular}">
                    What's Popular
                </button>
            </div>
        </div>
        <div class="container d-flex justify-content-end pe-0">
            <img
                class="img-fluid d-none d-md-block"
                src="./src/assets/image-1.webp"
                alt="an anime character holding swords and covered with flames" />
        </div>
    </div>
</section>`;
}

function renderHomeMain() {
	return `<section class="container my-5 js-my-list" data-list-name="myList" data-has-content="false">
				<h2 data-load-page="${PAGES.myList}" class="d-inline-block fs-1 mb-3 slide-title">My List <i class="fa-solid fa-chevron-right fa-2xs arrow" style="color: #363636;"></i></h2>
				<p>Your List is empty. &#128543;</p>
			</section>`;
}

function renderHomePage() {
	header.innerHTML = renderHomeHeader();
	main.innerHTML = renderHomeMain();
}

function renderSearchHeader() {}

function renderSearchMain() {}

function renderSearchPage() {
	// Under development
	header.innerHTML = "Search Bar";
	main.innerHTML = "Loading...";
}

function renderPopularHeader() {}

function renderPopularMain() {}

function renderPopularPage() {
	// Under development
	header.innerHTML = "Popular";
	main.innerHTML = "Loading...";
}

function renderMyListHeader() {}

function renderMyListMain() {}

function renderMyListPage() {
	// Under development
	header.innerHTML = "My List";
	main.innerHTML = "Loading...";
}

function renderPageNotFound() {
	main.innerHTML = `<section class="container mt-5">
                        <h2>Page Not Found!</h2>
                    </section>`;
}

function renderPage() {
	if (!PAGES.hasOwnProperty(pageName)) {
		return renderPageNotFound();
	}

	selectPage();
}

function renderPopUp() {}

initialize();
renderPage();

page.addEventListener("click", setPageName);
