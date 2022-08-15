import { c as create_ssr_component, a as each, v as validate_component } from "../../../_app/immutable/chunks/index-9a1255b9.js";
import { M as MovieCard } from "../../../_app/immutable/chunks/MovieCard-63f3f455.js";
async function load({ fetch, params }) {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=abdc28af3531b1985bad96e35323c63f&language=en-US&query=${params.id}&page=1&include_adult=false`);
  const data = await res.json();
  if (res.ok) {
    return { props: { searchedMovie: data.results } };
  }
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { searchedMovie } = $$props;
  if ($$props.searchedMovie === void 0 && $$bindings.searchedMovie && searchedMovie !== void 0)
    $$bindings.searchedMovie(searchedMovie);
  return `<div id="${"searched-movie"}" class="${"grid grid-cols-2 gap-y-14 md:grid-cols-4 xl:grid-cols-7"}">${each(searchedMovie, (movie) => {
    return `${validate_component(MovieCard, "MovieCard").$$render($$result, { movie }, {}, {})}`;
  })}</div>`;
});
export {
  U5Bidu5D as default,
  load
};
