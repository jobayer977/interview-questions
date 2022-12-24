<script lang="ts">
	export let data = [];
	let searchTerm = '';
	$: sortedTopics = data?.data?.filter((post) =>
		post.title.toLowerCase().includes(searchTerm.toLowerCase())
	);
</script>

<div class="container">
	<div class="pt-24">
		<h1 class="text-xl lg:leading-none md:text-[56px] font-bold text-left text-primary">EconHub</h1>
		<h1 class="text-xl lg:leading-none md:text-[56px] font-bold text-left">
			Get the files you need for free,
		</h1>
		<h1 class="text-xl lg:leading-none md:text-[56px] font-bold text-left">anytime, anywhere.</h1>
		<p class="text-sm lg:text-[24px] text-left text-gray-dark my-3 max-w-2xl">
			Your one-stop shop for free file downloads.
		</p>
	</div>
	<!-- Global Search -->
	<div class="mt-12">
		<div class="relative rounded-md shadow-sm w-full lg:w-2/6 border-solid border-2">
			<input
				id="search"
				type="search"
				bind:value={searchTerm}
				class="form-input py-3 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 focus:outline-none"
				placeholder="Search..."
			/>
			<div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
				<svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
					<path
						fill-rule="evenodd"
						d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
		</div>
	</div>
	<!-- Global Search -->
	<!-- Search Results -->
	<div class="my-12">
		<div class="grid lg:grid-cols-3 gap-4">
			{#each sortedTopics as item}
				<div class="bg-light rounded-lg">
					<div class="relative h-[200px]">
						<img src={item?.thumbnail} alt="cover" class="rounded-lg h-full w-full object-cover" />
					</div>
					<div class="p-4 w-full">
						<h1 class="text-dark font-bold text-base overflow-hidden line-clamp-2">
							{item?.title}
						</h1>
						<p class="text-dark text-xs my-1">{item?.author}</p>
					</div>
					<!-- actions -->
					<div class="grid grid-cols-2 gap-2">
						<a
							href={item?.url}
							target="_blank"
							class="bg-dark block text-center  text-white text-xs font-bold py-3 rounded"
						>
							Enroll
						</a>
						<a
							href={item?.download}
							target="_blank"
							class="bg-primary block text-center text-white text-xs font-bold py-3 rounded"
						>
							Download
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
