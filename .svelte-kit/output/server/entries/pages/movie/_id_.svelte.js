import { c as create_ssr_component, b as add_attribute, e as escape } from "../../../_app/immutable/chunks/index-9a1255b9.js";
async function load({ fetch, params }) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=abdc28af3531b1985bad96e35323c63f&language=en-US`);
  const movieDetail = await res.json();
  console.log(movieDetail);
  if (res.ok) {
    return { props: { movieDetail } };
  }
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { movieDetail } = $$props;
  if ($$props.movieDetail === void 0 && $$bindings.movieDetail && movieDetail !== void 0)
    $$bindings.movieDetail(movieDetail);
  return `<div id="${"movie-details"}" class="${"p-4 lg:w-1/2 lg:mx-auto"}"><div id="${"img-container"}" class="${"mb-4 w-full lg:h-1/2"}"><img${add_attribute("src", "https://image.tmdb.org/t/p/original" + movieDetail.backdrop_path, 0)}${add_attribute("alt", movieDetail.title, 0)} class="${"rounded-lg lg:items-center"}"></div>

	<div id="${"txt-container"}"><h1 class="${"font-bold text-2xl mb-2"}">${escape(movieDetail.title)}</h1>
		<p id="${"overview"}" class="${"text-justify"}">${escape(movieDetail.overview)}</p>
		<p><span class="${"span-details"}">Release Date : </span>
			${escape(movieDetail.release_date)} <br>
			<span class="${"span-details"}">Budget : </span>
			${escape(movieDetail.budget)} <br>
			<span class="${"span-details"}">Rating : </span>
			${escape(movieDetail.vote_average)} <br>
			<span class="${"span-details"}">Runtime : </span>
			${escape(movieDetail.runtime)}mins <br></p></div></div>`;
});
export {
  U5Bidu5D as default,
  load
};
