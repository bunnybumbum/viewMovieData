<script context="module">
	export async function load({ fetch, params }) {
		const res = await fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=abdc28af3531b1985bad96e35323c63f&language=en-US&query=${params.id}&page=1&include_adult=false`
		);

		const data = await res.json();
		if (res.ok) {
			return {
				props: { searchedMovie: data.results }
			};
		}
	}
</script>

<script>
	import MovieCard from '../../components/MovieCard.svelte';
	export let searchedMovie;
</script>

<div id="searched-movie" class="grid grid-cols-2 gap-y-14 md:grid-cols-4 xl:grid-cols-7">
	{#each searchedMovie as movie}
		<MovieCard {movie} />
	{/each}
</div>
