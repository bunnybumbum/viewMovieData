import { c as create_ssr_component, v as validate_component } from "../../_app/immutable/chunks/index-9a1255b9.js";
const app = "";
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"flex m-4 mb-7 justify-center md:justify-start "}"><a href="${"/"}" class="${"font-bold text-lg bg-violet-400 text-white rounded-lg p-3 duration-700 transition hover:animate-pulse"}">Movie Database</a></nav>`;
});
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Movie DB</title>`, ""}`, ""}

${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}

${slots.default ? slots.default({}) : ``}`;
});
export {
  _layout as default
};
