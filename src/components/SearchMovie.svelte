<script>
	let inputValue = '';
	import { goto } from '$app/navigation';

	function submitSearch() {
		goto('/search/' + inputValue);
	}
</script>

<form
	on:submit|preventDefault={submitSearch}
	id="search"
	class="flex items-center justify-center m-8 "
>
	<input
		bind:value={inputValue}
		type="text"
		name="search_movie"
		placeholder="Search Movie Here"
		class="border-2 rounded-l-full px-2 py-1 w-full lg:w-1/2 hover:ring-1 hover:ring-violet-500 active:border-1 transition duration-300"
	/>
	<button
		class="bg-violet-400 border-2 border-violet-400 text-white font-semibold px-2 py-1 rounded-r-full cursor-pointer h-full hover:bg-violet-500 transition duration-300 "
		>Search</button
	>
</form>
