<script lang="ts">
	import { page } from '$app/stores';
	import SeoHead from '../../components/SeoHead.svelte';
	import { onMount } from 'svelte';
	import TopicItem from '../../components/TopicItem.svelte';
	export let data:any[] = []
	let sectionData:any = null;
	const fetchTopics = async () => {
		const res = await fetch('/sections.json');
		const items = await res.json();
		sectionData = items.find((item:any) => item?.contentFolder === $page.params.slug);
	};
	onMount(() => {
		fetchTopics();
	});
</script>
<SeoHead title={sectionData?.title} ogImage={sectionData?.image}/>
<div class="my-12 bg-[#FBFCFE]">
	<div class="container">
		<div class="flex space-x-3 items-center">
			<div class="item-image">
				<img
					class="h-[128px] w-[128px] object-contain mr-8"
					src={sectionData?.image}
					alt=""
					height="128"
					width="128"
				/>
			</div>
			<div class="ml-24">
				<h1>{sectionData?.title}</h1>
				<p class="mt-2">
					Remain everything you know about the {sectionData?.title} and start
				</p>
			</div>
		</div>
	</div>
	<div class="container mt-20">
		{#each data?.data ||[] as item}
			<TopicItem data={item} sectionData={sectionData}/>
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
