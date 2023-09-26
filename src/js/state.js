let initialState = {
	myAnimeList: {
		watching: [],
		planToWatch: [],
		completed: [],
		onHold: [],
		dropped: [],
		all: [],
	},
	popularList: [],
	airingList: [],
	topList: [],
	upcomingList: [],
	animeOverview: [], //maybe not required, because we only see one anime at a time
	searchResults: [],
	eventListeners: [],
};

export let state = structuredClone(initialState);

export const initializeState = () => {
	state = structuredClone(initialState);
};

export const registEventListener = ({ selector, listenTo, callback }) => {
	selector.addEventListener(listenTo, callback);
	state.eventListeners.push({
		selector: selector,
		listenTo: listenTo,
		callback: callback,
	});
};

export const initializeEventListeners = () => {
	state.eventListeners.map((listener) => {
		const selector = listener.selector;
		const event = listener.listenTo;
		const callback = listener.callback;
		selector.removeEventListener(event, callback);
	});
	state.eventListeners = structuredClone(initialState.eventListeners);
};
