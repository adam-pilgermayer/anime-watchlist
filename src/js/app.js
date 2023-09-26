import Navigo from "navigo";
import routes from "./routes";
import { Navbar } from "./components/constantElements";
import { initializeState } from "./state";

export default function App() {
	//Routing
	const router = new Navigo("/", true);
	routes.forEach((route) => {
		router
			.on(route.path, () => {
				route.page();
				document.title = route.title;
				router.updatePageLinks();
			})
			.resolve();
	});

	router.notFound(() => {
		router.navigate("/");
	});

	// Initialize state

	initializeState();

	// Events
	window.addEventListener("load", Navbar);
}
