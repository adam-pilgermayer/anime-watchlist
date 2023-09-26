export default function Card(elem) {
	let html = `<div>${elem.title}'s card</div>`;
	return html;
}

export function animeCard(anime, isLazy) {
	const lazyLoading = !isLazy ? "" : "loading=lazy";
	const title =
		!anime.titles.length > 0 ? "Unknown anime" : anime.titles.at(0).title;
	const sanitizedTitle = title.replaceAll(/[\s:]/g, "_");
	return `
		<a href="/anime/${anime.mal_id}/${sanitizedTitle}" data-navigo>
			<figure class="card scroll-card">
				<img
					${lazyLoading}
					decoding="async"
					src="${anime.images.webp.large_image_url}"
					alt="Thumbnail image of ${title}"
					class="card-img"
					width="165"
					height="230" />
				<div class="content-layer">
					<img
						src="assets/images/external-link.svg"
						alt="external link icon"
						class="icon" />
				</div>
				<figcaption>
					${anime.title}
				</figcaption>
			</figure>
		</a>
							`;
}
