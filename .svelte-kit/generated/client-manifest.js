export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\movie\\[id].svelte"),
	() => import("..\\..\\src\\routes\\search\\[id].svelte")
];

export const dictionary = {
	"": [[0, 2], [1]],
	"movie/[id]": [[0, 3], [1]],
	"search/[id]": [[0, 4], [1]]
};