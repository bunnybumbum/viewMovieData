import { c as create_ssr_component, b as add_attribute, e as escape } from "./index-9a1255b9.js";
const MovieCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { movie } = $$props;
  if ($$props.movie === void 0 && $$bindings.movie && movie !== void 0)
    $$bindings.movie(movie);
  return `<div id="${"movie-card"}" class="${"w-full p-2 mb-2"}"><div id="${"movie-image"}" class="${"overflow-hidden hover:scale-95 transition duration-500 rounded-xl"}"><a${add_attribute("href", "/movie/" + movie.id, 0)}><img${add_attribute("src", "https://image.tmdb.org/t/p/w500" + movie.poster_path, 0)}${add_attribute("alt", movie.title, 0)} class="${"h-full w-full object-cover mb-2 rounded-xl hover:scale-125 transition-all duration-500 hover:rotate-12 bg-cover"}"></a></div>

	<div id="${"description"}"><h1 class="${"font-bold text-md"}">${escape(movie.title)}</h1>
		<p class="${""}">Release Date : ${escape(movie.release_date)}</p></div></div>`;
});
export {
  MovieCard as M
};
