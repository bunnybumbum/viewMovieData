import { c as create_ssr_component, a as each, v as validate_component, b as add_attribute } from "../../_app/immutable/chunks/index-9a1255b9.js";
import { M as MovieCard } from "../../_app/immutable/chunks/MovieCard-63f3f455.js";
const PopularMovies = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { popular } = $$props;
  if ($$props.popular === void 0 && $$bindings.popular && popular !== void 0)
    $$bindings.popular(popular);
  return `<h1 class="${"flex justify-center items-center font-bold p-2 text-4xl mb-8"}">Popular Movies</h1>

<div id="${"popular-movies"}" class="${"grid grid-cols-2 gap-y-14 md:grid-cols-4 xl:grid-cols-7"}">${each(popular, (movie) => {
    return `${validate_component(MovieCard, "MovieCard").$$render($$result, { movie }, {}, {})}`;
  })}</div>`;
});
const SearchMovie = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputValue = "";
  return `<form id="${"search"}" class="${"flex items-center justify-center m-8 "}"><input type="${"text"}" name="${"search_movie"}" placeholder="${"Search Movie Here"}" class="${"border-2 rounded-l-full px-2 py-1 w-full lg:w-1/2 hover:ring-1 hover:ring-violet-500 active:border-1 transition duration-300"}"${add_attribute("value", inputValue, 0)}>
	<button class="${"bg-violet-400 border-2 border-violet-400 text-white font-semibold px-2 py-1 rounded-r-full cursor-pointer h-full hover:bg-violet-500 transition duration-300 "}">Search</button></form>`;
});
async function load({ fetch }) {
  const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=abdc28af3531b1985bad96e35323c63f&language=en-US&page=1");
  const data = await res.json();
  if (res.ok) {
    return { props: { popular: data.results } };
  }
}
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { popular } = $$props;
  if ($$props.popular === void 0 && $$bindings.popular && popular !== void 0)
    $$bindings.popular(popular);
  return `<section>${validate_component(SearchMovie, "SearchMovie").$$render($$result, {}, {}, {})}
	${validate_component(PopularMovies, "PopularMovies").$$render($$result, { popular }, {}, {})}</section>`;
});
export {
  Routes as default,
  load
};
