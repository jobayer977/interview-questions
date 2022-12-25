<script lang="ts">
	import TopicCard from '../components/TopicCard.svelte';
	export let data = [];
	let searchTerm = '';
	$: sortedTopics = data?.data?.filter((post) =>
		post.title.toLowerCase().includes(searchTerm.toLowerCase())
	);
</script>

<div class="container">
	<div class="pt-16 text-center">
		<img src="/download.png" alt="" class="h-20 mb-2 w-full object-contain" />
		<h1 class="text-xl lg:leading-none md:text-[39px] font-bold ">
			62 languages for you to master
		</h1>
		<p class="text-sm lg:text-[18px] lg:max-w-3xl mx-auto  text-primary leading-relaxed my-3">
			Become fluent in your chosen programming languages by completing these tracks created by our
			awesome team of contributors
		</p>
	</div>
	<!-- Global Search -->
	<div class="mt-12 flex justify-center">
		<div class="relative rounded-md shadow-sm w-full lg:w-2/6 border-gray border-[1px] ">
			<input
				id="search"
				type="search"
				bind:value={searchTerm}
				class="form-input py-3 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 focus:outline-none"
				placeholder="Search..."
			/>
			<div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
				<svg class="h-5 w-5 text-gray" fill="currentColor" viewBox="0 0 20 20">
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
</div>
<div class="my-12 bg-[#FBFCFE]">
	<div class="container">
		<div class="grid lg:grid-cols-2 gap-4">
			<TopicCard />
			<TopicCard />
			<TopicCard />
			<TopicCard />
			<TopicCard />
			<TopicCard />
			<TopicCard />
			<TopicCard />
			<TopicCard />
			<TopicCard />
			<TopicCard />
			<TopicCard />
			<TopicCard />
			<TopicCard />
			<TopicCard />
			<TopicCard />
			<TopicCard />
			<TopicCard />
			<TopicCard />
			<TopicCard />
			<TopicCard />
			<TopicCard />
		</div>
	</div>
</div>
