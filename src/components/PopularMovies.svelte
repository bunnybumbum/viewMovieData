<script>
	export let popular;
	import MovieCard from './MovieCard.svelte';
</script>

<h1 class="flex justify-center items-center font-bold p-2 text-4xl mb-8">Popular Movies</h1>

<div id="popular-movies" class="grid grid-cols-2 gap-y-14 md:grid-cols-4 xl:grid-cols-7">
	{#each popular as movie}
		<MovieCard {movie} />
	{/each}
</div>
