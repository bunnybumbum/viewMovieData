<script context="module">
	export async function load({ fetch }) {
		const res = await fetch(
			'https://api.themoviedb.org/3/movie/popular?api_key=abdc28af3531b1985bad96e35323c63f&language=en-US&page=1'
		);

		const data = await res.json();
		if (res.ok) {
			return {
				props: { popular: data.results }
			};
		}
	}
</script>

<script>
	import PopularMovies from '../components/PopularMovies.svelte';
	import SearchMovie from '../components/SearchMovie.svelte';
	export let popular;
	import { fly } from 'svelte/transition';
</script>

<section in:fly={{ y: 50, duration: 500 }}>
	<SearchMovie />
	<PopularMovies {popular} />
</section>
