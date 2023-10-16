import externalLink from "../../assets/images/external-link.svg";
import { createIcon } from "../utils";
export default function Card(elem) {
	let html = `<div>${elem.title}'s card</div>`;
	return html;
}

export function animeCard(anime, isLazy) {
	const lazyLoading = !isLazy ? "" : "loading=lazy";
	const title =
		!anime.titles.length > 0 ? "Unknown anime" : anime.titles.at(0).title;
	const sanitizedTitle = title.replaceAll(/[\s:]/g, "_"); //replace all white spaces with underscore
	const externalLinkIcon = createIcon(
		externalLink,
		"external link icon",
		"icon"
	);

	return `
		<a href="/anime/${anime.mal_id}/${sanitizedTitle}" class="card-link" data-navigo>
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
					${externalLinkIcon}
				</div>
				<figcaption class="anime-card-title" title="${anime.title}">
					${anime.title}
				</figcaption>
			</figure>
		</a>
							`;
}
