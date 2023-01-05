<script lang="ts">
	import SeoHead from '../components/SeoHead.svelte';
	import { onMount } from 'svelte';
	import TopicCard from '../components/TopicCard.svelte';
	let data:any[] = [];
	let searchTerm = '';
	$: sortedTopics = data?.filter((post) =>
		post.title.toLowerCase().includes(searchTerm.toLowerCase())
	);
	const fetchTopics = async () => {
		const res = await fetch('/sections.json');
		const items = await res.json();
		data = items|| [];
	};
	onMount(() => {
		fetchTopics();
	});
</script>
<SeoHead/>
<div class="container">
	<div class="pt-16 text-center">
		<!-- <img src="/download.png" alt="" class="h-20 mb-2 w-full object-contain" /> -->
		<h1 class="text-xl lg:leading-none md:text-[39px] font-bold ">
			Interview Preparation Made Easy
		</h1>
		<p class="text-sm lg:text-[18px] lg:max-w-3xl mx-auto  text-primary leading-relaxed my-3">
			Elevate your interviewing skills with our straightforward guide to interview preparation.
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
			{#each sortedTopics||[] as item}
				<a href={`/${item?.contentFolder}`}>
					<TopicCard data={item}/>
				</a>
			{/each}
		</div>
	</div>
</div>
