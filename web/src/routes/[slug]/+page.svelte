<script lang="ts">
	import TopicItem from '../../components/TopicItem.svelte';
	export let data:any[] = []
	console.log("🚀 ~ file: +page.svelte:4 ~ data", data)
	// let topics:any[] = []
	// let searchTerm = '';
	// $: sortedTopics = data?.data?.filter((post:any) =>
	// 	post.title.toLowerCase().includes(searchTerm.toLowerCase())
	// );
	// onMount(async () => {
	// 	const res = await fetch('/topics.json');
	// 	const data = await res.json();
	// 	topics = data[$page.params.slug] || [];
	// });
	// console.log("🚀 ~ file: +page.svelte:17 ~ data", data)
</script>
<div class="my-12 bg-[#FBFCFE]">
	<div class="container">
		<div class="flex space-x-3">
			<!-- <div class="item-image">
				<img
					class="h-[128px] w-[128px] object-contain mr-14"
					src="https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/laptop-man-1-18c1946cd8269f24a33c3db759e9f7db89eb0178.svg"
					alt=""
				/>
			</div> -->
			<div class="ml-24">
				<h1>Explore the AWK exercises on Exercism</h1>
				<p class="mt-2">
					Unlock more exercises as you progress. They’re great practice and fun to do!
				</p>
			</div>
		</div>
	</div>
	<div class="container mt-20">
		{#each data?.data ||[] as item}
			<TopicItem data={item}/>
		{/each}
	</div>
</div>
<style>
	.box {
		background-clip: padding-box, border-box;
		background-color: #fafaff;
		background-image: linear-gradient(#fff, #fff), linear-gradient(#20f, #9e00ff);
		background-origin: border-box;
		border: 2px solid transparent;
		box-shadow: 0 4px 24px rgb(96 79 205 / 40%);
	}
	.title {
		align-items: center;
		color: #130b43;
		display: flex;
		font-size: 20px;
		font-weight: 600;
		line-height: 140%;
		margin-bottom: 8px;
	}
	.description {
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		color: #5c5589;
		display: -webkit-box;
		font-size: 15px;
		line-height: 150%;
	}
</style>
