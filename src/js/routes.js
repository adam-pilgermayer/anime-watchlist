import homePage from "./pages/homePage";
import myListPage from "./pages/myListPage";
import popularPage from "./pages/popularPage";
import searchPage from "./pages/searchPage";
import randomAnimePage from "./pages/randomAnimePage";
import animeOverviewPage from "./pages/animeOverviewPage";
import attributionsPage from "./pages/attributionsPage";

const titlePrefix = "AnimeWatchList - ";

const titles = {
	home: titlePrefix + "HOME",
	myList: titlePrefix + "MY LIST",
	popular: titlePrefix + "POPULAR",
	search: titlePrefix + "SEARCH",
	random: titlePrefix + "RANDOM",
	overview: titlePrefix + "OVERVIEW",
	attr: titlePrefix + "ATTRIBUTIONS",
};

export default [
	{ path: "/", page: homePage, title: titles.home },
	{ path: "/mylist", page: myListPage, title: titles.myList },
	{ path: "/popular", page: popularPage, title: titles.popular },
	{ path: "/search/anime", page: searchPage, title: titles.search },
	{ path: "/random/anime", page: randomAnimePage, title: titles.random },
	{ path: "/anime/:id/:name", page: animeOverviewPage, title: titles.overview },
	{ path: "/attributions", page: attributionsPage, title: titles.attr },
];
