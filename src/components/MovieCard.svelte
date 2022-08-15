<script>
	export let movie;
</script>

<div id="movie-card" class="w-full p-2 mb-2">
	<div id="movie-image" class="overflow-hidden hover:scale-95 transition duration-500 rounded-xl">
		<a href={'/movie/' + movie.id}>
			<img
				src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
				alt={movie.title}
				class="h-full w-full object-cover mb-2 rounded-xl hover:scale-125 transition-all duration-500 hover:rotate-12 bg-cover"
			/>
		</a>
	</div>

	<div id="description">
		<h1 class="font-bold text-md">{movie.title}</h1>
		<p class="">Release Date : {movie.release_date}</p>
	</div>
</div>
