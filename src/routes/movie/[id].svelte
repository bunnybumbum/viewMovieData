<script context="module">
	export async function load({ fetch, params }) {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/${params.id}?api_key=abdc28af3531b1985bad96e35323c63f&language=en-US`
		);

		const movieDetail = await res.json();
		console.log(movieDetail);
		if (res.ok) {
			return {
				props: { movieDetail }
			};
		}
	}
</script>

<script>
	import PopularMovies from '../../components/PopularMovies.svelte';
	export let movieDetail;
	import { fly } from 'svelte/transition';
</script>

<div in:fly={{ y: 50, duration: 500 }} id="movie-details" class="p-4 lg:w-1/2 lg:mx-auto">
	<div id="img-container" class="mb-4 w-full lg:h-1/2">
		<img
			src={'https://image.tmdb.org/t/p/original' + movieDetail.backdrop_path}
			alt={movieDetail.title}
			class="rounded-lg lg:items-center"
		/>
	</div>

	<div id="txt-container">
		<h1 class="font-bold text-2xl mb-2">{movieDetail.title}</h1>
		<p id="overview" class="text-justify">{movieDetail.overview}</p>
		<p>
			<span class="span-details">Release Date : </span>
			{movieDetail.release_date} <br />
			<span class="span-details">Budget : </span>
			{movieDetail.budget} <br />
			<span class="span-details">Rating : </span>
			{movieDetail.vote_average} <br />
			<span class="span-details">Runtime : </span>
			{movieDetail.runtime}mins <br />
		</p>
	</div>
</div>
